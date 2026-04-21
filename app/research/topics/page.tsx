import Image from "next/image";
import CosmicServices from "@/services/CosmicServices";

export default async function ResearchTopicsPage() {
  const cosmic = new CosmicServices();
  const data = await cosmic.getResearchTopicsPage();
  if (!data) {
    return (
      <main className="min-h-screen w-full bg-[#F5F5F5] flex flex-col items-center justify-center">
        <div className="text-2xl text-red-600">
          Failed to load research topics.
        </div>
      </main>
    );
  }
  const [topicsPage, questions] = data;
  return (
    <main className="min-h-screen w-full bg-[#F5F5F5] flex flex-col items-center">
      <style>{`
                .orange-text {
                    color: #E79121;
                }
            `}</style>

      <section className="max-w-6xl w-full px-6 pt-10 pb-14 sm:px-8 sm:pt-12 sm:pb-16 md:px-10 md:pt-14 md:pb-20 lg:px-8 lg:pt-20 lg:pb-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-teal-800 text-center mb-10 md:mb-16">
          {topicsPage.title || "Research Topics"}
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold orange-text text-center mb-6 md:mb-8 leading-snug">
          {topicsPage.metadata.page_description_heading}
        </h2>

        <div className="max-w-4xl mx-auto mb-10 md:mb-14">
          <p className="text-base sm:text-lg md:text-xl text-teal-800 leading-8 sm:leading-9 md:leading-10">
            {topicsPage.metadata.page_description}
          </p>
        </div>

        <div className="flex justify-center mb-12 md:mb-20">
          <Image
            src={
              topicsPage.metadata.graphic1?.imgix_url ||
              topicsPage.metadata.graphic1?.url ||
              "/researchtopic1.png"
            }
            alt="Mind & Morality Illustration 1"
            width={1000}
            height={350}
            className="w-full max-w-5xl h-auto"
            priority
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12 md:space-y-16">
          {questions.map((q, idx) => (
            <div key={q.id}>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-800 mb-4 md:mb-6 leading-snug">
                {idx + 1}. {q.metadata.question}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-teal-800 leading-8 sm:leading-9 md:leading-10">
                {q.metadata.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 md:mt-20">
          <Image
            src={
              topicsPage.metadata.graphic2?.imgix_url ||
              topicsPage.metadata.graphic2?.url ||
              "/researchtopic2.png"
            }
            alt="Mind and Morality Lab logo graphic"
            width={520}
            height={320}
            className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[520px] h-auto"
          />
        </div>
      </section>
    </main>
  );
}
