"use client"

import { useState } from "react"

export default function PublicationsPage() {

    const [sort, setSort] = useState("topic")

    const base =
        "w-full md:flex-1 rounded-full border-2 py-2.5 sm:py-2.5 md:py-3 text-[16px] sm:text-[17px] md:text-[18px] font-medium transition-all duration-200"

    const active =
        "bg-[#B8E1E4] text-teal-700 border-teal-600"

    const inactive =
        "bg-transparent text-teal-700 border-teal-600"

    const publicationsByTopic = [
        {
            topic: "Punishment and Cooperation",
            papers: [
                {
                    title: "Children as assessors and agents of third-party punishment.",
                    authors: "Marshall, J. & McAuliffe, K.",
                    year: 2022,
                    journal: "Nature Reviews Psychology, 1, 1783–1792.",
                    link: "https://www.nature.com/articles/s44159-022-00046-y.epdf?sharing_token=DAhItx0-2uWDMI4BDvypLNRgN0jAjWel9jnR3ZoTv0M7mkAiylYwppAF8CkeTpesk3LVrscVXkurgNkJoM3HnzFub4wxHp3sFg_xDQTatX81MaWQbfvlY9hjczVKv1P83VHc7oRl4kDD9pOEexe2zO_Ck2Vxj6JC03GK-2b2zaI%3D",
                    featured: true,
                },
                {
                    title: "Children punish third parties to satisfy both consequentialist and retributive motives.",
                    authors: "Marshall, J., Yudkin, D., & Crockett, M.",
                    year: 2021,
                    journal: "Nature Human Behaviour, 5, 361–368.",
                    link: "https://www.nature.com/articles/s41562-020-00975-9",
                    featured: true,
                },
                {
                    title: "Older but younger children’s third-party punishment decisions are sensitive to severity.",
                    authors: "Marshall, J., Horsey, C., Chang, L., McAuliffe, K.",
                    year: 2025,
                    journal: "Developmental Psychology.",
                    link: "",
                    featured: false,
                },
                {
                    title: "Beyond punishment: Psychological foundations of restorative interventions.",
                    authors: "McAuliffe, K., Marshall, J., & McLaughlin, A.",
                    year: 2024,
                    journal: "Trends in Cognitive Sciences.",
                    link: "https://www.sciencedirect.com/science/article/pii/S1364661324003206?via%3Dihub",
                    featured: false,
                },
                {
                    title: "Cross-cultural conceptions of third-party intervention across childhood.",
                    authors: "Marshall, J., Mermin-Bunnell, K., Gollwitzer, A., Retelsdorf, J., & Bloom, P.",
                    year: 2024,
                    journal: "Journal of Experimental Psychology: General, 153(9), 2216–2229.",
                    link: "https://psycnet.apa.org/doiLanding?doi=10.1037/xge0001617",
                    featured: false,
                },
                {
                    title: "Children’s judgments of interventions against norm violations: COVID-19 as a naturalistic case study.",
                    authors: "Lee, Y., Marshall, J., Deutchman, P., McAuliffe, K., & Warneken, F.",
                    year: 2022,
                    journal: "Journal of Experimental Child Psychology, 221, 105452.",
                    link: "https://www.sciencedirect.com/science/article/pii/S0022096522000819?casa_token=N6iZozvJLwgAAAAA:jdnUVHC-qEmoM-jB11LPxN9PabjEGlCGP90kE0hjPgJB59VPe_ed-l5dwS9hcwUvNcde27fj59U",
                    featured: false,
                },
                {
                    title: "Why do children and adults think other people punish?",
                    authors: "Marshall, J., Gollwitzer, A., & Bloom, P.",
                    year: 2022,
                    journal: "Developmental Psychology, 58, 1783–1792.",
                    link: "https://osf.io/preprints/psyarxiv/sy4q9_v1",
                    featured: false,
                },
                {
                    title: "The development of third-party corporal punishment.",
                    authors: "Marshall, J., Gollwitzer, A., Wynn, K., & Bloom, P.",
                    year: 2019,
                    journal: "Cognition, 190, 221–229.",
                    link: "https://www.sciencedirect.com/science/article/pii/S0010027719301131?casa_token=T-T1lq2aH6cAAAAA:_KsyzItwCiV3MOQNAlRKzkl8iqbZFjycGBNynsixqU4I2opD4pD5l-l-DEnDrtgjwNCt0vS_yA",
                    featured: false,
                },
            ],
        },
        {
            topic: "Obligations and Social Relationships",
            papers: [
                {
                    title: "When development constricts our moral circle.",
                    authors: "Marshall, J., Wilks, M., Caviola, L., & Neldner, K.",
                    year: 2025,
                    journal: "Nature Human Behaviour.",
                    link: "https://www.nature.com/articles/s41562-025-02212-7",
                    featured: true,
                },
                {
                    title: "How development and culture shape intuitions about prosocial obligations.",
                    authors: "Marshall, J., Gollwitzer, A., Mermin-Bunnell, N., Shinomiya, M., Retelsdorf, J., & Bloom, P.",
                    year: 2022,
                    journal: "Journal of Experimental Psychology: General, 151, 1866–1882.",
                    link: "https://osf.io/preprints/psyarxiv/mct4v_v1",
                    featured: true,
                },
                {
                    title: "How physical and social distance shape our perceived obligations to others.",
                    authors: "Marshall, J., & Wilks, M.",
                    year: 2024,
                    journal: "Open Mind, 8, 511–534.",
                    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11093409/",
                    featured: false,
                },
                {
                    title: "When not helping is nice: Children’s changing evaluations of helping during COVID-19.",
                    authors: "Marshall, J., Lee, Y., Deutchman, P., Warneken, F., & McAuliffe, K.",
                    year: 2023,
                    journal: "Developmental Psychology, 59, 953–962.",
                    link: "https://pubmed.ncbi.nlm.nih.gov/36634003/",
                    featured: false,
                },
                {
                    title: "Developing judgments about peers’ obligation to intervene.",
                    authors: "Marshall, J., Mermin-Bunnell, K., & Bloom, P.",
                    year: 2020,
                    journal: "Cognition, 201, 103215.",
                    link: "https://www.sciencedirect.com/science/article/pii/S0010027720300342?casa_token=dtEQEQyB44EAAAAA:BlfvKn1fPdq7SbakG-WL1wsknvaQyw60J5gkFUlySnOn7qYhHrqzLs_VQLQEn3DgPzcFfob8rQ",
                    featured: false,
                },
                {
                    title: "Do children and adults take social relationship into account when evaluating other peoples’ actions?",
                    authors: "Marshall, J., Wynn, K., & Bloom, P.",
                    year: 2020,
                    journal: "Child Development, 91, 1395–1835.",
                    link: "https://onlinelibrary.wiley.com/doi/full/10.1111/cdev.13390",
                    featured: false,
                },
                {
                    title: "Obligations without cooperation.",
                    authors: "Marshall, J.",
                    year: 2019,
                    journal: "Behavioral and Brain Sciences, 43.",
                    link: "https://www.proquest.com/docview/2396104103?sourcetype=Scholarly%20Journals",
                    featured: false,
                },
                {
                    title: "Not noble savages after all: Limits to early altruism.",
                    authors: "Wynn, K., Bloom, P., Jordan, A., Marshall, J., & Sheskin, M.",
                    year: 2017,
                    journal: "Current Directions in Psychological Science, 27, 3–8.",
                    link: "https://journals.sagepub.com/doi/full/10.1177/0963721417734875?casa_token=XyehOjeVbKIAAAAA:lN2w0YS3Q_H7BjotvBmBC1jUzOeOmTOvpWK-hxgyksgtgmA6_6CBGzCvFWQN-Sdwqof-Hqx4AY4J",
                    featured: false,
                },
            ],
        },
        {
            topic: "Social Groups and Moral Decision-Making",
            papers: [
                {
                    title: "The role of status in the emergence of pro-white bias in rural Uganda.",
                    authors: "Marshall, J.*., Gollwitzer, A.*., Mermin-Bunnell, N., & Mandalaywala, T.",
                    year: 2022,
                    journal: "Developmental Science, e13240. *joint first authorship.",
                    link: "https://onlinelibrary.wiley.com/doi/full/10.1111/desc.13240",
                    featured: true,
                },
                {
                    title: "How retributive motives shape the emergence of third-party punishment across intergroup contexts.",
                    authors: "Marshall, J. & McAuliffe, K.",
                    year: 2024,
                    journal: "Child Development.",
                    link: "https://onlinelibrary.wiley.com/doi/10.1111/cdev.14097",
                    featured: false,
                },
                {
                    title: "Pattern deviancy aversion predicts prejudice via a dislike of statistical minorities.",
                    authors: "Gollwitzer, A. & Marshall, J., & Bargh, J.",
                    year: 2019,
                    journal: "Journal of Experimental Psychology: General, 149, 828–854.",
                    link: "https://acmelab.yale.edu/sites/default/files/jepg_gollwitzer.pdf",
                    featured: false,
                },
                {
                    title: "Relating pattern deviancy aversion to stigma and prejudice.",
                    authors: "Gollwitzer, A., Marshall, J., Wang, Y., & Bargh, J.",
                    year: 2017,
                    journal: "Nature Human Behaviour, 1, 920–927.",
                    link: "https://www.nature.com/articles/s41562-017-0243-x",
                    featured: false,
                },
            ],
        },
        {
            topic: "Moral Judgment",
            papers: [
                {
                    title: "Do psychopathic individuals possess a misaligned moral compass? A meta-analytic examination of psychopathy’s relations with moral judgment.",
                    authors: "Marshall, J., Watts, A., & Lilienfeld, S.O.",
                    year: 2016,
                    journal: "Personality Disorders: Theory, Research, and Treatment, 9, 40–50.",
                    link: "https://psycnet.apa.org/doiLanding?doi=10.1037/per0000226",
                    featured: true,
                },
                {
                    title: "Rational, emotional, or both? Subcomponents of psychopathy predict opposing moral decisions.",
                    authors: "Hauser, N., Felthous, A., Hsass, H., Neumann, C., Marshall, J., & Mokros, A.",
                    year: 2022,
                    journal: "Behavioral Sciences and the Law, 39, 541–566.",
                    link: "https://onlinelibrary.wiley.com/doi/full/10.1002/bsl.2547",
                    featured: false,
                },
                {
                    title: "An examination of psychopathy’s relationship with two indices of moral judgment.",
                    authors: "Marshall, J., Watts, A.L., Frankel, E., Lilienfeld, S.O.",
                    year: 2017,
                    journal: "Personality and Individual Differences, 113, 240–245.",
                    link: "https://www.sciencedirect.com/science/article/pii/S0191886917302040?casa_token=wWMGeMgcEK8AAAAA:Z8ZvLPXzcgcX-r5J_nCuFZIP7H8HfQDyu39ljkBPpVcQ-9eRBe2VCgUl_fFatOTOs9MZek7_uw",
                    featured: false,
                },
                {
                    title: "The mixed effects of neurological information and brain images on perceptions of psychopathic wrongdoers.",
                    authors: "Marshall, J., Lilienfeld, S.O., Mayberg, H., & Clark, S.",
                    year: 2017,
                    journal: "Journal of Forensic Psychiatry and Psychology, 28, 212–436.",
                    link: "https://www.tandfonline.com/doi/full/10.1080/14789949.2017.1291706",
                    featured: false,
                },
            ],
        },
        {
            topic: "Other",
            papers: [
                {
                    title: "Developing conceptions of forgiveness across the lifespan.",
                    authors: "McLaughlin, A., Marshall, J., & McAuliffe, K.",
                    year: 2024,
                    journal: "Child Development, 95(6), 1915–1933.",
                    link: "https://doi.org/10.1111/cdev.14122",
                    featured: false,
                },
                {
                    title: "Parental and community political orientation predicts children’s health behaviors.",
                    authors: "Gollwitzer, A., Marshall, J., Lee, Y., Deutchman, P., Warneken, F., & McAuliffe, K.",
                    year: 2024,
                    journal: "British Journal of Social Psychology.",
                    link: "https://onlinelibrary.wiley.com/doi/full/10.1002/ejsp.3055",
                    featured: false,
                },
                {
                    title: "Linking self-reported social distancing to real-world behavior during the COVID-19 pandemic.",
                    authors: "Gollwitzer, A., McLoughlin, K., Martel, C., Marshall, J., Hohs, J., & Bargh, J.",
                    year: 2021,
                    journal: "Social Psychological and Personality Science, 13, 656–668.",
                    link: "https://journals.sagepub.com/doi/full/10.1177/19485506211018132?casa_token=arrNiDEVx9sAAAAA%3AJnv_iKhJMQJnbvc8o7_VTeINla2zqoLwp3wVEEyZCuHLaMuLUQL9bD24QDcmr-zd3qVdBgoWjldV",
                    featured: false,
                },
                {
                    title: "Two tests of an implicit mentalizing system: Evidence for the submentalizing position.",
                    authors: "Marshall, J., Gollwitzer, A., Santos, L.",
                    year: 2018,
                    journal: "PLoS One, 13, e0194101.",
                    link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0194101",
                    featured: false,
                },
                {
                    title: "The persistence of fad interventions in the face of negative scientific evidence: Facilitated communication for autism as a case example.",
                    authors: "Lilienfeld, S.O., Marshall, J., Todd, J. T., & Shane, H. C.",
                    year: 2015,
                    journal: "Evidence-Based Communication Assessment and Intervention, 8, 1–40.",
                    link: "https://www.tandfonline.com/doi/abs/10.1080/17489539.2014.976332",
                    featured: false,
                },
            ],
        },
    ]

    let displayedSections = publicationsByTopic

    if (sort === "alpha") {
        const allPapers = publicationsByTopic
            .flatMap((section) =>
                section.papers.map((paper) => ({
                    ...paper,
                    topic: section.topic,
                }))
            )
            .sort((a, b) => a.title.localeCompare(b.title))

        displayedSections = [
            {
                topic: "Alphabetical",
                papers: allPapers,
            },
        ]
    }

    if (sort === "recent") {
        const allPapers = publicationsByTopic
            .flatMap((section) =>
                section.papers.map((paper) => ({
                    ...paper,
                    topic: section.topic,
                }))
            )
            .sort((a, b) => b.year - a.year)

        displayedSections = [
            {
                topic: "Most Recent",
                papers: allPapers,
            },
        ]
    }

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
                    {displayedSections.map((section) => (
                        <section key={section.topic}>
                            <h2 className="text-teal-700 font-semibold text-[24px] sm:text-[28px] md:text-[30px] mb-4 sm:mb-5 md:mb-8">
                                {section.topic}
                            </h2>

                            <div className="space-y-2 text-teal-700 text-[16px] leading-[1.7] sm:text-[18px]">
                                {section.papers.map((paper, index) => (
                                    <p key={`${paper.title}-${index}`}>
                                        {paper.featured && <span className="text-[#E79121]">☆ </span>}
                                        <span className="font-semibold">
                            {paper.authors} ({paper.year}).
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