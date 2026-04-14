import NewsItem from "../components/NewsItem";

const news = [
  {
    id: 1,
    title: "Title Title Title",
    date: "Date",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    title: "Title Title Title",
    date: "Date",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "Title Title Title",
    date: "Date",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    title: "Title Title Title",
    date: "Date",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function NewsPage() {
  return (
    <main className="mx-auto max-w-[1214px] px-6 pb-20">
      <h1 className="mt-10 mb-8 text-center text-3xl font-bold text-[#3F97A4]">
        News & Announcements
      </h1>

      <div className="space-y-12">
        {news.map((item) => (
          <NewsItem key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
}
