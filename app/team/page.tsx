import CosmicServices from "@/services/CosmicServices";
import StaffCard from "@/components/StaffCard";
import UndergradCard from "@/components/UndergradCard";

export default async function TeamPage() {

  const cosmic = new CosmicServices();
  const [staff, undergrads] = await cosmic.getTeamMembers();

  return (
    <div className="bg-white">
    <div className="max-w-6xl bg-white mx-auto px-6">

      <h1 className="text-5xl text-center text-[#459A9F] font-semibold pt-16 mb-16">
        Our Team
      </h1>

      {/* Faculty / Staff */}
      {staff.map((member) => (
        <StaffCard
          key={member.id}
          member={member}
        />
      ))}

      {/* Undergrads */}
      {undergrads.length > 0 && (
        <>
          <h2 className="text-3xl mt-24 mb-10 text-center text-[#459A9F] font-semibold">
            Undergraduate Research Assistants
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            {undergrads.map((member) => (
              <UndergradCard
                key={member.id}
                member={member}
              />
            ))}
          </div>
        </>
      )}

    </div>
    </div>
  );
}
