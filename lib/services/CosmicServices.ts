import { cosmic } from "../cosmic";


// CLASS TO INTERACT WITH COSMIC BACKEND (for now one file but can split into multiple if gets too big)

class CosmicServices {
    // method to fetch team members
    // each team member will have : slug, name, role, linkedin, website, description, email, profile-photo, cv, undergraduate (boolean) --- only required fields are name, role, description, and undergraduate
    getTeamMembers = async () => {
        const data = await cosmic.find({type: 'team-members'});
        return data.objects;
    };

}

export default CosmicServices;