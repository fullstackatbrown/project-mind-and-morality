import CosmicServices from "@/services/CosmicServices";
import TeamMemberCard from "@/components/TeamMemberCard";

export default async function TeamPage() {

  const cosmic = new CosmicServices();
  const [staff, undergrads] = await cosmic.getTeamMembers();

  return (
    <div className="max-w-6xl bg-zinc-50 mx-auto px-6">

      <h1 className="text-5xl text-center text-teal-700 font-semibold mb-16">
        Our Team
      </h1>

      {/* Faculty / Staff */}
      {staff.map((member) => (
        <TeamMemberCard
          key={member.id}
          member={member}
        />
      ))}

      {/* Undergrads */}
      {undergrads.length > 0 && (
        <>
          <h2 className="text-3xl mt-24 mb-10 text-teal-700">
            Undergraduate Researchers
          </h2>

          {undergrads.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
            />
          ))}
        </>
      )}

    </div>
  );
}