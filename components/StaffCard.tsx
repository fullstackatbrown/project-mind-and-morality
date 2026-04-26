import { TeamMember } from "@/services/CosmicServices";

type Props = {
  member: TeamMember;
};

export default function StaffCard({ member }: Props) {
  const {
    name,
    description,
    linkedin,
    website,
    email,
    cv,
    profilePhoto,
  } = member.metadata;

  return (
    <div className="flex flex-col md:flex-row gap-12 items-center py-8">

      {/* Profile Image */}
      <div className="flex-shrink-0">
        {profilePhoto ? (
          <img
            src={profilePhoto.url}
            alt={name}
            className="w-[280px] h-[280px] rounded-full border-[4px] border-[#E79121] object-cover"
          />
        ) : (
          <div className="w-[280px] h-[280px] rounded-full border-[4px] border-[#E79121] bg-zinc-200 flex items-center justify-center">
            <span className="text-6xl font-bold text-zinc-400">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div>

        <h2 className="text-3xl font-bold text-[#E79121]">
          {name}
        </h2>

        <p className="mt-6 text-[#459A9F] leading-relaxed">
          {description}
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4 mt-6">

          {cv && (
            <a
              href={cv.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-200 text-[#459A9F] px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-300 transition-colors"
            >
              Download CV
            </a>
          )}

          {email && (
            <a
              href={`mailto:${email}`}
              className="text-[#459A9F] text-sm font-medium hover:underline"
            >
              Email
            </a>
          )}

          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#459A9F] text-sm font-medium hover:underline"
            >
              Website
            </a>
          )}

          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#459A9F] text-sm font-medium hover:underline"
            >
              LinkedIn
            </a>
          )}

        </div>

      </div>
    </div>
  );
}
