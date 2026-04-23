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

    linkedin?: string;
    website?: string;
    email?: string;
    cv?: CosmicMedia;

    profilePhoto?: CosmicMedia;
  };
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
