import CosmicServices from "@/services/CosmicServices";
import StaffCard from "@/components/StaffCard";
import UndergradCard from "@/components/UndergradCard";
import { TeamMember } from "@/services/CosmicTypes";

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mt-4 mb-4">
      <div className="flex-1 h-1 bg-[#459A9F]" />
      <h2 className="text-3xl text-[#459A9F] font-semibold whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-1 bg-[#459A9F]" />
    </div>
  );
}

function StaffSection({ title, members }: { title: string; members: TeamMember[] }) {
  if (members.length === 0) return null;
  return (
    <>
      <SectionHeader title={title} />
      {members.map((member) => (
        <StaffCard key={member.id} member={member} />
      ))}
    </>
  );
}

export default async function TeamPage() {
  const cosmic = new CosmicServices();
  const groups = await cosmic.getTeamMembers();

  if (!groups) return null;

  const { lab_directors, post_doctoral_researchers, graduate_students, lab_managers, undergrads } = groups;

  return (
    <div className="bg-white">
      <div className="max-w-6xl bg-white mx-auto px-6">

        <h1 className="text-5xl text-center text-[#459A9F] font-semibold mt-12 mb-12">
          Our Team
        </h1>

        <StaffSection title="Lab Directors" members={lab_directors} />
        <StaffSection title="Post Doctoral Researchers" members={post_doctoral_researchers} />
        <StaffSection title="Graduate Students" members={graduate_students} />
        <StaffSection title="Lab Managers" members={lab_managers} />

        {undergrads.length > 0 && (
          <>
            <SectionHeader title="Undergraduate Research Assistants" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
              {undergrads.map((member) => (
                <UndergradCard key={member.id} member={member} />
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
}
