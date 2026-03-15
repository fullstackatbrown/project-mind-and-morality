import { TeamMember } from "@/services/CosmicServices";

type Props = {
  member: TeamMember;
};

export default function TeamMemberCard({ member }: Props) {
  const {
    name,
    role,
    description,
    linkedin,
    website,
    email,
    cv,
    profilePhoto,
  } = member.metadata;

  return (
    <div className="flex flex-col md:flex-row gap-12 items-center py-20 border-b border-zinc-200">

      {/* Profile Image */}
      <div className="flex-shrink-0">
        {profilePhoto ? (
          <img
            src={profilePhoto.url}
            alt={name}
            className="w-[320px] h-[320px] rounded-full border-[8px] border-orange-400 object-cover"
          />
        ) : (
          <div className="w-[320px] h-[320px] rounded-full border-[8px] border-orange-400 bg-zinc-200" />
        )}
      </div>

      {/* Info Section */}
      <div className="max-w-xl">

        <h2 className="text-3xl font-semibold text-orange-500">
          {name}
        </h2>

        <p className="text-xl text-teal-700 font-semibold mt-2">
          {role}
        </p>

        <p className="mt-6 text-zinc-600 leading-relaxed">
          {description}
        </p>

        {/* Links */}
        <div className="flex items-center gap-6 mt-6">

          {cv && (
            <a
              href={cv.url}
              className="flex items-center gap-2 bg-teal-200 text-teal-900 px-4 py-2 rounded-full"
            >
              Download CV
            </a>
          )}

          {email && (
            <a href={`mailto:${email}`} className="text-teal-700">
              Email
            </a>
          )}

          {website && (
            <a href={website} target="_blank" className="text-teal-700">
              Website
            </a>
          )}

          {linkedin && (
            <a href={linkedin} target="_blank" className="text-teal-700">
              LinkedIn
            </a>
          )}

        </div>

      </div>
    </div>
  );
}