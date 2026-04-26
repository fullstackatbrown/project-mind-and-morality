import { TeamMember } from "@/services/CosmicServices";

type Props = {
  member: TeamMember;
};

export default function UndergradCard({ member }: Props) {
  const {
    name,
    role,
    description,
    linkedin,
    website,
    email,
    profilePhoto,
  } = member.metadata;

  return (
    <div className="flex flex-col items-center text-center bg-white p-6 gap-4">

      {/* Profile Image */}
      <div className="flex-shrink-0">
        {profilePhoto ? (
          <img
            src={profilePhoto.url}
            alt={name}
            className="w-36 h-36 rounded-md object-cover"
          />
        ) : (
          <div className="w-36 h-36 rounded-md bg-zinc-200 flex items-center justify-center">
            <span className="text-4xl font-bold text-zinc-400">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold text-[#E79121] leading-tight">
        {name}
      </h3>

      {/* Role */}
      {role && (
        <p className="text-sm font-bold text-[#459A9F] -mt-2">{role}</p>
      )}

      {/* Description */}
      <p className="text-sm text-[#459A9F] text-left leading-relaxed">
        {description}
      </p>

      {/* Links */}
      {(email || website || linkedin) && (
        <div className="flex items-center justify-center gap-4 mt-auto pt-2">

          {email && (
            <a
              href={`mailto:${email}`}
              className="text-[#459A9F] text-xs font-medium hover:underline"
            >
              Email
            </a>
          )}

          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#459A9F] text-xs font-medium hover:underline"
            >
              Website
            </a>
          )}

          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#459A9F] text-xs font-medium hover:underline"
            >
              LinkedIn
            </a>
          )}

        </div>
      )}

    </div>
  );
}
