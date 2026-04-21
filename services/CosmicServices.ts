import { error } from "console";
import { cosmic } from "../lib/cosmic";
import {
  TeamMember,
  NewsPost,
  NewsPostRaw,
  NewsPostThumbnail,
  NewsPostThumbnailRaw,
  ResearchPublication,
  ResearchPublicationsPage,
  ResearchQuestion,
  ResearchTopic,
  ResearchTopicsAndPublications,
  ResearchTopicsPage,
  GetInvolvedFamiliesPage,
  GetInvolvedStudentsPage,
  HomePage,
  TeamPageGroups,
  ContactFormSubmission
} from "./CosmicTypes";

/**
 * Compare two strings case-insensitively, treating missing values as empty strings.
 * @param first
 * first string to compare
 * @param second
 * second string to compare
 * @returns negative when first sorts before second, positive when after, or 0 when equivalent
 */
const compareStrings = (first?: string, second?: string) =>
  (first ?? "").localeCompare(second ?? "", undefined, { sensitivity: "base" });

/**
 * Compare two numbers, treating missing values as 0.
 * @param first
 * first number to compare
 * @param second
 * second number to compare
 * @returns negative when first is smaller, positive when larger, or 0 when equal
 */
const compareNumbers = (first?: number, second?: number) =>
  (first ?? 0) - (second ?? 0);

// CLASS TO INTERACT WITH COSMIC BACKEND (for now one file but can split into multiple if gets too big)

class CosmicServices {
  /**
   * method to get Team Members
   *
   * @returns a TeamPageGroups objects, which contains fields for each list of team members (which are TeamMember objects)
   */

  getTeamMembers = async (): Promise<TeamPageGroups> => {
    try {
      const data = await cosmic.objects
        .find({ type: "team-members" })
        .status("published");

      const raw_objects = data.objects as TeamMember[];
      const filtered_objects = [];

      filtered_objects.push(raw_objects.filter(
        (member) => member.metadata.role == "Lab Director"
      ));
      filtered_objects.push(raw_objects.filter(
        (member) => member.metadata.role == "Post Doctoral Researcher"
      ));
      filtered_objects.push(raw_objects.filter(
        (member) => member.metadata.role == "Graduate Student"
      ));
      filtered_objects.push(raw_objects.filter(
        (member) => member.metadata.role == "Lab Manager"
      ));
      filtered_objects.push(raw_objects.filter(
        (member) => member.metadata.undergraduate
      ));

      filtered_objects.forEach(lst => {
          lst.sort((a, b) => {
          const orderA = a.metadata.displayOrder ?? Number.MAX_SAFE_INTEGER;
          const orderB = b.metadata.displayOrder ?? Number.MAX_SAFE_INTEGER;

          if (orderA !== orderB) {
            return orderA - orderB;
          }

          const byName = compareStrings(a.metadata.name, b.metadata.name);

          if (byName !== 0) {
            return byName;
          }

          return compareStrings(a.id, b.id);
        });
      })
      const team_page_groups = {} as TeamPageGroups;
      team_page_groups.lab_directors = filtered_objects[0];
      team_page_groups.post_doctoral_researchers = filtered_objects[1];
      team_page_groups.graduate_students = filtered_objects[2];
      team_page_groups.lab_managers = filtered_objects[3];
      team_page_groups.undergrads = filtered_objects[4];

      return team_page_groups;

    } catch {
      return {} as TeamPageGroups;
    }
  };

  /**
   * method to get NewPostThumbnails
   *
   * @param limit for the number of news post thumbnails to get
   * @param page_number the page number to get from (the method will get results from limit * page_number up to limit * (page_number + 1))
   * @returns a list of news post thumbnails to display, or an empty list on failure
   */
  getNewsPostThumbnails = async (
    pageSize: number,
    page_number: number,
  ): Promise<NewsPostThumbnail[]> => {
    try {
      const safePageSize = Number.isFinite(pageSize) && pageSize > 0 ? pageSize : 15;
      const props = `
        id
        title
        slug
        created_at
        modified_at
        metadata {
          publish_date
          featured_image
          summary
        }
        `;

      const data = await cosmic.objects
        .find({
          type: "news-posts",
        })
        .status("published")
        .props(props)
        .sort("-metadata.publish_date")
        // Fetch one extra item so the client can determine if there is a next page,
        // while still skipping by the true page size.
        .limit(safePageSize + 1)
        .skip(safePageSize * page_number);

      const raw_thumbnails = data.objects as NewsPostThumbnailRaw[];

      const thumbnails = raw_thumbnails.map((thumbnail) => ({
        ...thumbnail,
        created_at: new Date(thumbnail.created_at),
        modified_at: new Date(thumbnail.modified_at),
        metadata: {
          ...thumbnail.metadata,
          publish_date: new Date(thumbnail.metadata.publish_date),
        },
      }));

      thumbnails.sort((first, second) => {
        const publishDateDiff =
          second.metadata.publish_date.getTime() -
          first.metadata.publish_date.getTime();

        if (publishDateDiff !== 0) {
          return publishDateDiff;
        }

        const createdAtDiff =
          second.created_at.getTime() - first.created_at.getTime();

        if (createdAtDiff !== 0) {
          return createdAtDiff;
        }

        const titleDiff = compareStrings(first.title, second.title);

        if (titleDiff !== 0) {
          return titleDiff;
        }

        return compareStrings(first.id, second.id);
      });

      return thumbnails;
    } catch {
      return [];
    }
  };

  /**
   * method to a get a news post by its slug (which you can get from a thumbnails .slug)
   * @param slug the slug of the news post to get
   * @returns a NewsPost, or null if fetch fails
   */
  getNewsPostBySlug = async (slug: string): Promise<NewsPost | null> => {
    try {
      const props = `
        id
        title
        slug
        created_at
        modified_at
        metadata {
          publish_date
          featured_image
          summary
          content
        }
        `;
      const data = await cosmic.objects
        .findOne({
          type: "news-posts",
          slug: slug,
        })
        .props(props);

      const raw_news_post = data.object as NewsPostRaw;

      return {
        ...raw_news_post,
        created_at: new Date(raw_news_post.created_at),
        modified_at: new Date(raw_news_post.modified_at),
        metadata: {
          ...raw_news_post.metadata,
          publish_date: new Date(raw_news_post.metadata.publish_date),
        },
      };
    } catch {
      return null;
    }
  };

  // CALLS FOR RESEARCH PAGES
  /**
   * method to get research topics grouped with starred and unstarred publications
   *
   * topics are sorted by metadata.display_order (with "Other" pushed to the end for ties),
   * then by topic title, then by topic id for deterministic ordering
   *
   * @returns a list of research topic groups with their publications, or null if the fetch fails
   */
  getResearchTopicsAndPublications = async (): Promise<
    ResearchPublicationsPage | null
  > => {
    try {
      // get topics ('research-topics')
      const raw_topics_data = await cosmic.objects
        .find({ type: "research-topics" })
        .status("published");
      const topics = raw_topics_data.objects as ResearchTopic[];

      // gert publications, sorted by the year they were published
      const raw_publications_data = await cosmic.objects
        .find({ type: "research-publications" })
        .status("published")
        .sort("-metadata.year_published");
      const publications =
        raw_publications_data.objects as ResearchPublication[];

      const map = new Map<string, ResearchTopicsAndPublications>();

      topics.forEach((topic) => {
        map.set(topic.id, {
          topic,
          starred_publications: [],
          unstarred_publications: [],
        });
      });

      publications.forEach((publication) => {
        const topic = publication.metadata.topic;

        if (topic && map.has(topic)) {
          const topicGroup = map.get(topic);

          if (!topicGroup) {
            return;
          }

          if (publication.metadata.starred) {
            topicGroup.starred_publications.push(publication);
          } else {
            topicGroup.unstarred_publications.push(publication);
          }
        }
      });

      const research_topics_and_pubs = Array.from(map.values());

      // sort the topics
      research_topics_and_pubs.sort((top1, top2) => {
        let top1_order =
          top1.topic.metadata.display_order ?? Number.MAX_SAFE_INTEGER - 1;
        let top2_order =
          top2.topic.metadata.display_order ?? Number.MAX_SAFE_INTEGER - 1;

        top1_order += top1.topic.title === "Other" ? 1 : 0;
        top2_order += top2.topic.title === "Other" ? 1 : 0;

        if (top1_order !== top2_order) {
          return top1_order - top2_order;
        }

        const titleDiff = compareStrings(top1.topic.title, top2.topic.title);

        if (titleDiff !== 0) {
          return titleDiff;
        }

        return compareStrings(top1.topic.id, top2.topic.id);
      });

      const sorted_alph = publications.toSorted((pub1, pub2) => compareStrings(pub1.title, pub2.title))
      
      const pub_page = {
        sorted_by_topic : research_topics_and_pubs,
        sorted_by_date : publications, 
        sorted_alphabetically : sorted_alph} as ResearchPublicationsPage;
      return pub_page;
    } catch (error) {
      console.error(error)
      return null;
    }
  };
  /**
   * method to get the static research topics page content and ordered research questions
   *
   * questions are sorted by metadata.display_order, then by title, then by id
   * for deterministic ordering
   *
   * @returns a tuple of [research topics page content, research questions], or null if the fetch fails
   */
  getResearchTopicsPage = async (): Promise<
    [ResearchTopicsPage, ResearchQuestion[]] | null
  > => {
    try {
      const raw_questions_data = await cosmic.objects
        .find({ type: "research-questions" })
        .status("published")
        .sort("metadata.display_order");
      const questions = raw_questions_data.objects as ResearchQuestion[];

      questions.sort((first, second) => {
        const orderDiff = compareNumbers(
          first.metadata.display_order,
          second.metadata.display_order,
        );

        if (orderDiff !== 0) {
          return orderDiff;
        }

        const titleDiff = compareStrings(first.title, second.title);

        if (titleDiff !== 0) {
          return titleDiff;
        }

        return compareStrings(first.id, second.id);
      });

      const raw_topics_page_data = await cosmic.objects.findOne({
        type: "research-topics-page",
      });
      const topics_page = raw_topics_page_data.object as ResearchTopicsPage;

      return [topics_page, questions];
    } catch {
      return null;
    }
  };

  /**
    * Get the static home page content from Cosmic.
    *
    * @returns the home page content, or null if fetch fails
   */
  getHomePage = async () : Promise<HomePage | null> => {
    try {
      const raw_home_page = await cosmic.objects.findOne({
        type: 'home-page'
      });
      const home_page = raw_home_page.object as HomePage;

      return home_page;

    } catch {
      return null;
    }
  }

  /**
    * Get the student get involved page content from Cosmic.
    *
    * @returns the student involvement page content, or null if fetch fails
   */
  getStudentInvolvementPage = async () : Promise<GetInvolvedStudentsPage | null> => {
    try {
      const raw_student_involvement_page = await cosmic.objects.findOne({
        type: 'get-involved-students-page'
      });
      const student_involvement_page = raw_student_involvement_page.object as GetInvolvedStudentsPage;

      return student_involvement_page;

    } catch {
      return null;
    }
  }

  /**
    * Get the families get involved page content from Cosmic.
    *
    * @returns the families involvement page content, or null if fetch fails
   */
  getFamilyInvolvementPage = async () : Promise<GetInvolvedFamiliesPage | null> => {
    try {
       const raw_family_involvement_page = await cosmic.objects.findOne({
        type: 'get-involved-families-page'
      });
      const family_involvement_page = raw_family_involvement_page.object as GetInvolvedFamiliesPage;

      return family_involvement_page;

    } catch {
      return null;
    }
  }

  /**
   * method to submit a contact form entry to Cosmic
   *
   * @param submission the contact form submission data
   * @returns true if successful, false otherwise
   */
  submitContactForm = async (submission: ContactFormSubmission): Promise<boolean> => {
    try {
      await cosmic.objects.insertOne({
        type: "messages",
        title: `Contact from ${submission.first_name} ${submission.last_name}`,
        metadata: {
          first_name: submission.first_name,
          last_name: submission.last_name,
          email: submission.email,
          message: submission.message,
        },
      });
      return true;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message)
      }
      return false;
    }
  };
}

export default CosmicServices;
