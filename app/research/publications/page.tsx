"use client";

import { useEffect, useMemo, useState } from "react";
import type {
    ResearchPublication,
    ResearchPublicationsPage,
    ResearchTopicsAndPublications,
} from "@/services/CosmicTypes";

type SortKey = "topic" | "alpha" | "recent";

type Paper = {
    title: string;
    prefix: string;
    year: number;
    journal: string;
    topic: string;
    featured: boolean;
    link?: string;
};

type Section = {
    topic: string;
    papers: Paper[];
};

const base =
    "w-full md:w-auto px-5 py-3 rounded-xl border-2 text-[16px] sm:text-[17px] font-semibold";
const active = "bg-teal-700 text-white border-teal-700";
const inactive = "bg-white text-teal-700 border-teal-700 hover:bg-teal-50";

const normalizeSuffix = (suffix?: string) => {
    const trimmed = (suffix ?? "").trim();
    if (!trimmed) return "";
    return trimmed.endsWith(".") ? trimmed : `${trimmed}.`;
};

const publicationToPaper = (publication: ResearchPublication): Paper => ({
    title: publication.title,
    prefix: publication.metadata.citation_prefix,
    year: publication.metadata.year_published,
    journal: normalizeSuffix(publication.metadata.citation_suffix),
    topic: publication.metadata.topic,
    featured: publication.metadata.starred,
    link: publication.metadata.link,
});

const groupToSection = (group: ResearchTopicsAndPublications): Section => {
    const papers = [
        ...group.starred_publications,
        ...group.unstarred_publications,
    ].map(publicationToPaper);

    return {
        topic: group.topic.title,
        papers,
    };
};

export default function PublicationsPage() {

    const [sort, setSort] = useState<SortKey>("topic");
    const [loading, setLoading] = useState(true);
    const [publicationsPage, setPublicationsPage] = useState<ResearchPublicationsPage | null>(null);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchPublications() {
            setLoading(true);
            setError("");
            try {
                const res = await fetch(`/api/research/publications`);
                if (!res.ok) throw new Error("Failed to fetch");

                const json = (await res.json()) as
                    | { data: ResearchPublicationsPage }
                    | { error: string };

                if ("data" in json) {
                    setPublicationsPage(json.data);
                } else {
                    throw new Error(json.error || "Failed to fetch");
                }
            } catch {
                setError("Failed to load publications");
                setPublicationsPage(null);
            } finally {
                setLoading(false);
            }
        }

        fetchPublications();

    }, []);

    const displayedSections: Section[] = useMemo(() => {
        if (!publicationsPage) return [];

        if (sort === "topic") {
            return (publicationsPage.sorted_by_topic ?? [])
                .map(groupToSection)
                .filter((section) => section.papers.length > 0);
        }

        if (sort === "alpha") {
            const papers = (publicationsPage.sorted_alphabetically ?? []).map(publicationToPaper);
            return papers.length > 0 ? [{ topic: "All Publications", papers }] : [];
        }

        const papers = (publicationsPage.sorted_by_date ?? []).map(publicationToPaper);
        return papers.length > 0 ? [{ topic: "Recent Publications", papers }] : [];
    }, [publicationsPage, sort]);


    return (
        <main className="min-h-screen bg-[#F5F5F5] w-full px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-16">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-center text-teal-700 font-semibold text-[32px] leading-tight sm:text-[38px] md:text-[42px] mb-6 md:mb-7">
                    Research Publications
                </h1>

                <p className="max-w-4xl mx-auto text-center text-[#E79121] font-semibold text-[18px] leading-[1.35] sm:text-[20px] md:text-[22px] mb-10 sm:mb-12 md:mb-14">
                    Papers are separated by topic. Representative publications are marked with a ☆
                </p>

                <div className="max-w-5xl mx-auto mb-10 sm:mb-12 md:mb-14">
                    <p className="text-teal-700 font-semibold text-[18px] sm:text-[19px] md:text-[20px] mb-3 md:mb-4">
                        Sort:
                    </p>

                    <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                        <button
                            onClick={() => setSort("topic")}
                            className={`${base} ${sort === "topic" ? active : inactive}`}
                        >
                            By Topic
                        </button>

                        <button
                            onClick={() => setSort("alpha")}
                            className={`${base} ${sort === "alpha" ? active : inactive}`}
                        >
                            Alphabetically
                        </button>

                        <button
                            onClick={() => setSort("recent")}
                            className={`${base} ${sort === "recent" ? active : inactive}`}
                        >
                            Recent
                        </button>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20">
                    {loading && (
                        <p className="text-center text-teal-700 font-semibold text-[18px] sm:text-[19px] md:text-[20px]">
                            Loading publications…
                        </p>
                    )}

                    {!loading && error && (
                        <p className="text-center text-[#E79121] font-semibold text-[18px] sm:text-[19px] md:text-[20px]">
                            {error}
                        </p>
                    )}

                    {!loading && !error && displayedSections.length === 0 && (
                        <p className="text-center text-teal-700 font-semibold text-[18px] sm:text-[19px] md:text-[20px]">
                            No publications found.
                        </p>
                    )}

                    {!loading && !error && displayedSections.map((section) => (
                        <section key={section.topic}>
                            <h2 className="text-teal-700 font-semibold text-[24px] sm:text-[28px] md:text-[30px] mb-4 sm:mb-5 md:mb-8">
                                {section.topic}
                            </h2>

                            <div className="space-y-2 text-teal-700 text-[16px] leading-[1.7] sm:text-[18px]">
                                {section.papers.map((paper, index) => (
                                    <p key={`${paper.title}-${index}`}>
                                        {paper.featured && <span className="text-[#E79121]">☆ </span>}
                                        <span className="font-semibold">
                            {paper.prefix}
                        </span>{" "}
                                        {paper.link ? (
                                            <a
                                                href={paper.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="underline"
                                            >
                                                {paper.title}
                                            </a>
                                        ) : (
                                            paper.title
                                        )}{" "}
                                        {paper.journal}
                                        {(sort === "alpha" || sort === "recent") && (
                                            <span className="italic"> [{paper.topic}]</span>
                                        )}
                                    </p>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    )
}