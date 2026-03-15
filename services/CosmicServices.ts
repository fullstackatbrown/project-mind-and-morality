import { cosmic } from "../lib/cosmic";


// CLASS TO INTERACT WITH COSMIC BACKEND (for now one file but can split into multiple if gets too big)
// interface for a TeamMember -- should be moved to a types.ts file, but placed here for now
interface CosmicMedia{
  // url for the image/file
  url: string;
  // CDN optimized image URL, lets you add query params for resizing, compression, and cropping --- most likely not necessary for us
  imgix_url?: string;
  // original filename if needed
  name?: string;
}

export interface TeamMember {
  id: string;
  title?: string;
  slug?: string;

  metadata: {
    name: string;
    role: string;
    description: string;
    undergraduate: boolean;
    displayOrder: number;

    linkedin?: string;
    website?: string;
    email?: string;
    cv?: CosmicMedia;

    profilePhoto?: CosmicMedia;
  };
}

class CosmicServices {
    /**
     * method to get Team Members
     * 
     * @returns two lists of TeamMembers, the first the list of non undergrads (to be displayed at the top of the page) and the second the list of undergrads
     */
     
    getTeamMembers = async (): Promise<[TeamMember[], TeamMember[]]> => {
        const data = await cosmic.objects.find({ type: "team-members" });

        const raw_objects = data.objects as TeamMember[];

        const non_undergrads = raw_objects.filter(
            (member) => !member.metadata.undergraduate
        );

        non_undergrads.sort((a, b) => a.metadata.displayOrder - b.metadata.displayOrder)

        const undergrads = raw_objects.filter(
            (member) => member.metadata.undergraduate
        );

        undergrads.sort((a, b) => a.metadata.displayOrder - b.metadata.displayOrder)

        return [non_undergrads, undergrads];
    };

}

export default CosmicServices;