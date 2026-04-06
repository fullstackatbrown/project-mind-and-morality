import { cosmic } from "../lib/cosmic";
import { TeamMember, NewsPost, NewsPostRaw, NewsPostThumbnail, NewsPostThumbnailRaw, ResearchPublication, ResearchQuestion, ResearchTopic, ResearchTopicsAndPublications, ResearchTopicsPage} from "./CosmicTypes";


const compareStrings = (first?: string, second?: string) =>
  (first ?? "").localeCompare(second ?? "", undefined, { sensitivity: "base" });

const compareNumbers = (first?: number, second?: number) => (first ?? 0) - (second ?? 0);



// CLASS TO INTERACT WITH COSMIC BACKEND (for now one file but can split into multiple if gets too big)

class CosmicServices {
    /**
     * method to get Team Members
     * 
     * @returns two lists of TeamMembers, the first the list of non undergrads (to be displayed at the top of the page) and the second the list of undergrads
     */
     
    getTeamMembers = async (): Promise<[TeamMember[], TeamMember[]]> => {
        try {
          const data = await cosmic.objects.find({ type: "team-members" }).status('published');

          const raw_objects = data.objects as TeamMember[];

          const non_undergrads = raw_objects.filter(
              (member) => !member.metadata.undergraduate
          );

          non_undergrads.sort((a, b) => {
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

          })

          const undergrads = raw_objects.filter(
              (member) => member.metadata.undergraduate
          );

          undergrads.sort((a, b) => {
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
          })

          return [non_undergrads, undergrads];
        } catch {
          return [[], []]
        }
        
    };

    /**
     * method to get NewPostThumbnails
     * 
     * @param limit for the number of news post thumbnails to get
     * @param page_number the page number to get from (the method will get results from limit * page_number up to limit * (page_number + 1))
     * @returns a list of news post thumbnails to display
     */
    getNewsPostThumbnails = async (limit: number, page_number: number): Promise<NewsPostThumbnail[]> => {
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
        }
        `;

        const data = await cosmic.objects.find({ 
          type: "news-posts",})
          .status('published')
          .props(props)
          .sort('-metadata.publish_date')
          .limit(limit)
          .skip(limit * page_number);

        const raw_thumbnails = data.objects as NewsPostThumbnailRaw[];

        const thumbnails = raw_thumbnails.map((thumbnail) => (
          {
            ...thumbnail,
            created_at: new Date(thumbnail.created_at),
            modified_at: new Date(thumbnail.modified_at),
            metadata: {
              ...thumbnail.metadata,
              publish_date: new Date(thumbnail.metadata.publish_date)
            }
          }
        ));

        thumbnails.sort((first, second) => {
          const publishDateDiff = second.metadata.publish_date.getTime() - first.metadata.publish_date.getTime();

          if (publishDateDiff !== 0) {
            return publishDateDiff;
          }

          const createdAtDiff = second.created_at.getTime() - first.created_at.getTime();

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
    }

    /**
     * method to a get a news post by its slug (which you can get from a thumbnails .slug)
     * @param slug the slug of the news post to get
     * @returns a NewsPost 
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
        const data = await cosmic.objects.findOne(
          {
            type: 'news-posts',
            slug: slug,
          }
        ).props(props);

        const raw_news_post = data.object as NewsPostRaw;

        return {
          ...raw_news_post, 
          created_at: new Date(raw_news_post.created_at),
          modified_at: new Date(raw_news_post.modified_at),
          metadata : {
            ...raw_news_post.metadata,
            publish_date: new Date(raw_news_post.metadata.publish_date)
          }
        };
      } catch {
        return null;
      }
      }
      

      // CALLS FOR RESEARCH PAGES
      /**
       * 
       */
      getResearchTopicsAndPublications = async () : Promise<ResearchTopicsAndPublications[] | null> => {
        try {
          // get topics ('research-topics')
          const raw_topics_data = await cosmic.objects.find({type: "research-topics"}).status("published");
          const topics = raw_topics_data.objects as ResearchTopic[];

          // gert publications, sorted by the year they were published
          const raw_publications_data = await cosmic.objects.find({type: "research-publications"}).status("published").sort("-metadata.year_published");
          const publications = raw_publications_data.objects as ResearchPublication[];
          
          const map = new Map<string, ResearchTopicsAndPublications>();

          topics.forEach(topic => {
            map.set(topic.id, {
              topic,
              starred_publications : [],
              unstarred_publications : []
            });
          });
          
          publications.forEach(publication => {
            const topic = publication.metadata.topic;

            if (topic && map.has(topic.id)) {
              const topicGroup = map.get(topic.id);

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
            let top1_order = top1.topic.metadata.display_order ?? Number.MAX_SAFE_INTEGER - 1;
            let top2_order = top2.topic.metadata.display_order ?? Number.MAX_SAFE_INTEGER - 1;

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

          return research_topics_and_pubs;

        } catch {
          return null;
        }
      }
      /**
       * 
       */
      // getResearchTopicsPage -> [ResearchTopicsPage, ResearchQuestions[]]
      getResearchTopicsPage = async () : Promise<[ResearchTopicsPage, ResearchQuestion[]] | null> => {
          try {
            const raw_questions_data = await cosmic.objects.find({type: "research-questions"}).status("published").sort("metadata.display_order");
            const questions = raw_questions_data.objects as ResearchQuestion[];

            questions.sort((first, second) => {
              const orderDiff = compareNumbers(first.metadata.display_order, second.metadata.display_order);

              if (orderDiff !== 0) {
                return orderDiff;
              }

              const titleDiff = compareStrings(first.title, second.title);

              if (titleDiff !== 0) {
                return titleDiff;
              }

              return compareStrings(first.id, second.id);
            });

            const raw_topics_page_data = await cosmic.objects.findOne({type: "research-topics-page"});
            const topics_page = raw_topics_page_data.object as ResearchTopicsPage;

            return [topics_page, questions];

          } catch {
            return null;
          }
      }


}

export default CosmicServices;