type Props = {
  imageUrl?: string;
  username?: string;
  caption?: string;
  likes?: number;
  postUrl?: string;
};

export default function InstagramPostCard({
  imageUrl,
  username = "mindmoralitylab",
  caption = "",
  likes = 0,
  postUrl = "#",
}: Props) {
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-100">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#E79121] to-[#459A9F] flex items-center justify-center">
          <span className="text-white text-xs font-bold">M</span>
        </div>
        <span className="text-sm font-semibold text-zinc-800">{username}</span>
        <a
          href={postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-5 h-5 text-zinc-400 hover:text-zinc-600 transition-colors"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
      </div>

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="w-12 h-12 text-zinc-300"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 px-4 pt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-6 h-6 text-zinc-600"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-6 h-6 text-zinc-600"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-6 h-6 text-zinc-600"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </div>

      {/* Likes */}
      {likes > 0 && (
        <p className="px-4 pt-1 text-sm font-semibold text-zinc-800">
          {likes.toLocaleString()} likes
        </p>
      )}

      {/* Caption */}
      {caption && (
        <p className="px-4 pt-1 pb-3 text-sm text-zinc-700 line-clamp-3">
          <span className="font-semibold text-zinc-800 mr-1">{username}</span>
          {caption}
        </p>
      )}

      {/* View on Instagram */}
      <a
        href={postUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-4 mb-4 mt-auto text-center text-xs text-zinc-400 hover:text-[#459A9F] transition-colors"
      >
        View on Instagram
      </a>
    </div>
  );
}
