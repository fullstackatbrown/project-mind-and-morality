type Props = {
  imageUrl?: string;
  username?: string;
  caption?: string;
  date?: string;
  postUrl?: string;
};

export default function InstagramPostCard({
  imageUrl,
  username = "mindmoralitylab",
  caption = "",
  date,
  postUrl = "#",
}: Props) {
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden flex flex-col">
      {/* Image */}
      <div className="w-full aspect-square bg-zinc-100 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Instagram post"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12 text-zinc-300">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
          </div>
        )}
      </div>

      {/* User + date row */}
      <div className="flex items-center gap-3 px-4 pt-4">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#E79121] to-[#459A9F] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">M</span>
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-sm font-semibold text-zinc-800 truncate">{username}</span>
          {date && <span className="text-xs text-zinc-500">{date}</span>}
        </div>
        <a
          href={postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
          aria-label="View on Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-zinc-400 hover:text-[#459A9F] transition-colors">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
      </div>

      {/* Caption */}
      {caption && (
        <p className="px-4 pt-3 pb-4 text-sm text-zinc-700 line-clamp-3">
          {caption}
        </p>
      )}
    </div>
  );
}
