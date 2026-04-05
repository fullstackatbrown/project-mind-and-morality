import { cosmic } from "../lib/cosmic";


// CLASS TO INTERACT WITH COSMIC BACKEND (for now one file but can split into multiple if gets too big)

// Types : 

// interface for a TeamMember -- should be moved to a types.ts file, but placed here for now
interface CosmicMedia{
  // url for the image/file
  url: string;
  // CDN optimized image URL, lets you add query params for resizing, compression, and cropping --- most likely not necessary for us
  imgix_url?: string;
  // original filename if needed
  name?: string;
}

interface TeamMember {
  id: string;
  title?: string;
  slug?: string;
  status: string; // published or draft

  metadata: {
    name: string;
    role: string;
    description: string;
    undergraduate: boolean;
    displayOrder?: number;

    linkedin?: string;
    website?: string;
    email?: string;
    cv?: CosmicMedia;

    profilePhoto?: CosmicMedia;
  };
}

interface NewsPostThumbnailRaw {
  id: string;
  title?: string;
  slug?: string;
  created_at: string;
  modified_at: string; 

  metadata: {
    publish_date : string;
    featured_image: CosmicMedia;
    summary: string;
  };
}

interface NewsPostRaw extends NewsPostThumbnailRaw {
  metadata: NewsPostThumbnailRaw['metadata'] & {
    content: string; // IMPORTANT NOTE : the string returned is a string of HTML content (e.g. "<h1> Title </h1> <p> This is the first paragraph of the article </p>")
  };
}

interface NewsPostThumbnail extends Omit<NewsPostThumbnailRaw, "created_at" | "modified_at" | "metadata"> {
  created_at: Date;
  modified_at : Date;
  metadata: Omit<NewsPostThumbnailRaw["metadata"], "publish_date"> & {
    publish_date : Date;
  }
}
interface NewsPost extends Omit<NewsPostRaw, "created_at" | "modified_at" | "metadata"> {
  created_at: Date;
  modified_at: Date;
  metadata: Omit<NewsPostRaw["metadata"], "publish_date"> & {
    publish_date : Date;
  }
}

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
      



}

export default CosmicServices;