// COSMIC TYPES

import ResearchTopicsPage from "@/app/research/topics/page";

// interface for a TeamMember -- should be moved to a types.ts file, but placed here for now
/**
 * @param  url
 * url for the image/media
 * @param imgix_url
 * imgix_url cdn optimized image url, lets you add query params for resizing, compression, and cropping
 * @param name
 * original filename if needed
 */
export interface CosmicMedia {
  url: string;
  imgix_url?: string;
  name?: string;
}

// TEAM MEMBER STUFF :

/**
 * Interface for TeamMembers, purposed for the Our Team page
 * @param id
 * cosmic object id for the team member entry
 * @param title
 * content title set in Cosmic
 * @param slug
 * url-safe slug for routing and lookups
 * @param status
 * object status in Cosmic (typically published or draft)
 * @param metadata.name
 * full display name of the team member
 * @param metadata.role
 * role/title shown on the team page
 * @param metadata.description
 * short biography or profile description
 * @param metadata.undergraduate
 * true when the member is an undergraduate student
 * @param metadata.displayOrder
 * optional sort order used for manual ordering in UI
 * @param metadata.linkedin
 * optional linkedin profile URL
 * @param metadata.website
 * optional personal or lab website URL
 * @param metadata.email
 * optional contact email address
 * @param metadata.cv
 * optional uploaded CV/resume media object
 * @param metadata.profilePhoto
 * optional profile image media object
 */

export interface TeamMember {
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
    displayorder?: number;

    linkedin?: string;
    website?: string;
    email?: string;
    cv?: CosmicMedia;

    profilePhoto?: CosmicMedia;
    profilephoto?: CosmicMedia;
  };
}
/**
 * Interface for grouping team members by role for rendering on the team page.
 * @param lab_directors
 * list of team members categorized as lab directors
 * @param post_doctoral_researchers
 * list of team members categorized as post-doctoral researchers
 * @param graduate_students
 * list of team members categorized as graduate students
 * @param lab_managers
 * list of team members categorized as lab managers
 * @param undergrads
 * list of team members categorized as undergraduate students
 */
export interface TeamPageGroups {
  lab_directors : TeamMember[];
  post_doctoral_researchers : TeamMember[];
  graduate_students : TeamMember[];
  lab_managers : TeamMember[];
  undergrads : TeamMember[];
}

export interface TeamPageGroups {
  lab_directors: TeamMember[];
  post_doctoral_researchers: TeamMember[];
  graduate_students: TeamMember[];
  lab_managers: TeamMember[];
  undergrads: TeamMember[];
}

// NEWS POST STUFF :
/**
 * A raw NewsPostThumbnail that has its dates as strings rather than Dates
 * @param id
 * cosmic object id for the news post
 * @param title
 * content title set in Cosmic
 * @param slug
 * url-safe slug for routing and lookups
 * @param created_at
 * ISO timestamp when the object was created in Cosmic
 * @param modified_at
 * ISO timestamp when the object was last modified in Cosmic
 * @param metadata.publish_date
 * publish date string from Cosmic metadata
 * @param metadata.featured_image
 * featured image media object for listing cards
 * @param metadata.summary
 * short article summary used in previews
 */
export interface NewsPostThumbnailRaw {
  id: string;
  title?: string;
  slug?: string;
  created_at: string;
  modified_at: string;

  metadata: {
    publish_date: string;
    featured_image: CosmicMedia;
    summary: string;
  };
}

/**
 * A NewsPostRaw that has its dates as strings rather than Dates.
 * @inheritDoc NewsPostThumbnailRaw
 * @param metadata.content
 * full article body as an HTML string
 */
export interface NewsPostRaw extends NewsPostThumbnailRaw {
  metadata: NewsPostThumbnailRaw["metadata"] & {
    content: string;
  };
}

/**
 * @param created_at
 * creation timestamp converted to a Date object
 * @param modified_at
 * modification timestamp converted to a Date object
 * @param metadata.publish_date
 * publish date converted to a Date object
 */
export interface NewsPostThumbnail extends Omit<
  NewsPostThumbnailRaw,
  "created_at" | "modified_at" | "metadata"
> {
  created_at: Date;
  modified_at: Date;
  metadata: Omit<NewsPostThumbnailRaw["metadata"], "publish_date"> & {
    publish_date: Date;
  };
}

/**
 * A NewsPost that extends NewsPostThumbnail and adds full article content.
 * @inheritDoc NewsPostThumbnail
 * @param metadata.content
 * full article body as an HTML string
 */
export interface NewsPost extends NewsPostThumbnail {
  metadata: NewsPostThumbnail["metadata"] & {
    content: string;
  };
}

// RESEARCH PUBLICATION/TOPICS STUFF

/**
 * Interface for a research topic entry used to group publications and order topics on the page.
 * @param id
 * cosmic object id for the research topic entry
 * @param slug
 * url-safe slug for routing and lookups
 * @param title
 * display title for the research topic
 * @param metadata.display_order
 * optional manual sort order for displaying topics
 */
export interface ResearchTopic {
  id: string;
  slug: string;
  title: string;
  metadata: {
    display_order?: number;
  };
}

/**
 * Interface for a research publication entry used in topic publication lists.
 * @param id
 * cosmic object id for the research publication entry
 * @param slug
 * url-safe slug for routing and lookups
 * @param title
 * publication title
 * @param metadata.citation_prefix
 * citation prefix, typically authors and date
 * @param metadata.topic
 * the id of the given topic
 * @param metadata.link
 * optional URL to the publication source
 * @param metadata.citation_suffix
 * citation suffix, typically publication venue and page range --> needs period added at end
 * @param metadata.starred
 * true when the publication should be highlighted as starred
 */
export interface ResearchPublication {
  id: string;
  slug: string;
  title: string;
  metadata: {
    citation_prefix: string;
    topic: string;
    link?: string;
    citation_suffix: string;
    starred: boolean;
    year_published: number;
  };
}

/**
 * Interface for grouping a research topic with its related publications.
 * @param topic
 * topic entry for this publication group
 * @param starred_publications
 * list of publications associated with the topic that are starred
 * @param unstarred_publications 
 * list of publications associated with the topic that aren't starred
 */
export interface ResearchTopicsAndPublications {
  topic: ResearchTopic;
  starred_publications: ResearchPublication[];
  unstarred_publications: ResearchPublication[];
}

export interface ResearchPublicationsPage {
  sorted_by_topic: ResearchTopicsAndPublications[];
  sorted_by_date: ResearchPublication[];
  sorted_alphabetically: ResearchPublication[];
}

/**
 * Interface for a research question entry shown on research content pages.
 * @param id
 * cosmic object id for the research question entry
 * @param slug
 * url-safe slug for routing and lookups
 * @param title
 * short display title for the question
 * @param metadata.question
 * primary research question text
 * @param metadata.description
 * supporting description or context for the question
 * @param metadata.display_order
 * optional manual sort order for rendering questions
 */
export interface ResearchQuestion {
  id: string;
  slug: string;
  title: string;
  metadata: {
    question: string;
    description: string;
    display_order?: number;
  };
}

/**
 * Interface for static content on the research topics page.
 * @param metadata.page_description_heading
 * heading text for the page description section
 * @param metadata.page_description
 * body text for the page description section
 * @param metadata.graphic1
 * first page graphic/media asset
 * @param metadata.graphic2
 * second page graphic/media asset
 */
export interface ResearchTopicsPage {
  title: string;
  slug: string;
  metadata: {
    page_description_heading: string;
    page_description: string;
    graphic1: CosmicMedia;
    graphic2: CosmicMedia;
  };
}


/**
 * Interface for a slideshow image displayed on the home page.
 * @param title
 * title for the slideshow image entry - not displayed on page
 * @param slug
 * url-safe slug for routing and lookups
 * @param metadata.image
 * image media asset shown in the slideshow
 */
export interface SlideshowImage {
  title : string;
  slug : string;
  metadata: {
    image: CosmicMedia;
  }
}

/**
 * Interface for static content on the home page.
 * @param title
 * content title set in Cosmic - not displayed on page
 * @param slug
 * url-safe slug for routing and lookups
 * @param metadata.slideshow_images
 * ordered slideshow images displayed on the home page
 * @param metadata.logo
 * logo image for the home page
 * @param metadata.lab_header
 * heading text for the home page lab description
 * @param metadata.lab_description
 * body text for the home page lab description
 */
export interface HomePage {
  title: string;
  slug: string;
  metadata: {
    slideshow_images: SlideshowImage[];
    logo: CosmicMedia;
    lab_header: string;
    lab_description: string;
  }
}

/**
 * Interface for the student-focused get involved page content.
 * @param title
 * content title set in Cosmic - displayed on page
 * @param slug
 * url-safe slug for routing and lookups
 * @param metadata.undergrads_header
 * heading for the undergraduate section
 * @param metadata.undergrads_subheader1
 * subheading for the undergraduate section
 * @param metadata.undergrads_description
 * first undergraduate description block as HTML
 * @param metadata.undergrads_subheader2
 * second subheading for the undergraduate section
 * @param metadata.undergrads_description2
 * second undergraduate description block as HTML
 * @param metadata.image1
 * first supporting image for the undergraduate section
 * @param metadata.undergrads_textbox
 * additional undergraduate textbox content as HTML
 * @param metadata.image2
 * second supporting image for the undergraduate section
 * @param metadata.graduates_header
 * heading for the graduate section
 * @param metadata.graduates_subheader
 * subheading for the graduate section
 * @param metadata.graduate_description
 * graduate section description as HTML
 * @param metadata.image3
 * supporting image for the graduate section
 */
export interface GetInvolvedStudentsPage {
  title: string;
  slug: string;
  metadata: {
    undergrads_header: string;
    undergrads_subheader1: string;
    undergrads_description: string; // HTML string
    undergrads_subheader2: string;
    undergrads_description2 : string; // HTML string
    image1 : CosmicMedia;
    undergrads_textbox: string; // HTML string
    image2 : CosmicMedia;
    graduates_header: string;
    graduates_subheader: string;
    graduate_description: string; // HTML string
    image3 : CosmicMedia;
  }
}

/**
 * Interface for a single item shown on the families get involved page.
 * @param title
 * item title set in Cosmic - not displayed on page
 * @param slug
 * url-safe slug for routing and lookups
 * @param metadata.item_header
 * heading for the item card or section
 * @param metadata.item_text
 * descriptive body text for the item
 * @param metadata.link_text
 * text shown for the item's link
 * @param metadata.link
 * URL for the item's linked resource
 * @param metadata.image
 * image shown alongside the item
 */
export interface GetInvolvedFamiliesItem {
  title : string;
  slug: string;
  metadata: {
    item_header: string;
    item_text: string;
    link_text: string;
    link : string;
    image: CosmicMedia;
  }

}

/**
 * Interface for the families-focused get involved page content.
 * @param title
 * content title set in Cosmic - displayed on page
 * @param slug
 * url-safe slug for routing and lookups
 * @param metadata.subheader
 * supporting subheader for the page
 * @param metadata.opportunities
 * list of family engagement opportunities
 */
export interface GetInvolvedFamiliesPage {
  title: string;
  slug: string;
  metadata: {
    subheader: string;
    opportunities: GetInvolvedFamiliesItem[];
  }
}

/**
 * Interface for a contact form submission.
 * @param first_name
 * first name of the person submitting the form
 * @param last_name
 * last name of the person submitting the form
 * @param email
 * email address of the person submitting the form
 * @param message
 * message content from the form submission
 */
export interface ContactFormSubmission {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
}
