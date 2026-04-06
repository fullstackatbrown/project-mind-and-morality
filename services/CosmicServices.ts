import { cosmic } from "../lib/cosmic";
import { TeamMember, NewsPost, NewsPostRaw, NewsPostThumbnail, NewsPostThumbnailRaw, ResearchPublication, ResearchQuestion, ResearchTopic, ResearchTopicsAndPublications, ResearchTopicsPage} from "./CosmicTypes";



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

              return orderA - orderB;

          })

          const undergrads = raw_objects.filter(
              (member) => member.metadata.undergraduate
          );

          undergrads.sort((a, b) => {
              const orderA = a.metadata.displayOrder ?? Number.MAX_SAFE_INTEGER;
              const orderB = b.metadata.displayOrder ?? Number.MAX_SAFE_INTEGER;

              return orderA - orderB;
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
        ))

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
          const raw_publications_data = await cosmic.objects.find({type: "research-publications"}).status("published").sort("-year_published");
          const publications = raw_publications_data.objects as ResearchPublication[];
          
          const map = new Map();

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
              if (publication.metadata.starred) {
                map.get(topic.id).starred_publications.push(publication);
              } else {
                map.get(topic.id).unstarred_publications.push(publication);
              }
            }
          });

          const research_topics_and_pubs = map.values() as unknown as ResearchTopicsAndPublications[];

          // sort the topics
          research_topics_and_pubs.sort((top1, top2) => {
            let top1_order = top1.topic.metadata.display_order ?? Number.MAX_SAFE_INTEGER - 1;
            let top2_order = top1.topic.metadata.display_order ?? Number.MAX_SAFE_INTEGER - 1;

            top1_order += top1.topic.title === "Other" ? 1 : 0;
            top2_order += top2.topic.title === "Other" ? 1 : 0;

            return top1_order - top2_order;
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

          } catch {
            return null;
          }
      }


}

export default CosmicServices;