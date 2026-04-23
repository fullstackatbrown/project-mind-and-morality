import Image from "next/image"

export default function ResearchTopicsPage() {
    return (
        <main className="min-h-screen w-full bg-[#FFFFFF] flex flex-col items-center">
            <style>{`
                .orange-text {
                    color: #E79121;
                }
                
                .teal-text {
                    color: #459A9F;
                }
                
            `}</style>

            <section className="max-w-6xl w-full px-6 pt-10 pb-14 sm:px-8 sm:pt-12 sm:pb-16 md:px-10 md:pt-14 md:pb-20 lg:px-8 lg:pt-20 lg:pb-24">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold teal-text text-center mb-10 md:mb-16">
                    Research Topics
                </h1>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold orange-text text-center mb-6 md:mb-8 leading-snug">
                    Understanding Social and Moral Development
                </h2>

                <div className="max-w-4xl mx-auto mb-10 md:mb-14">
                    <p className="text-base sm:text-lg md:text-xl teal-text leading-8 sm:leading-9 md:leading-10">
                        Research in the Mind &amp; Morality Lab focuses on the foundations of human moral and
                        social cognition, with a particular emphasis on how these processes develop in
                        childhood. Our work explores questions such as:{" "}
                        <span className="font-semibold">
                            Do children have an early-emerging sense of morality, fairness, and justice? How do
                            these moral concepts develop and evolve across different cultures and social contexts?
                        </span>{" "}
                        To address these questions, we conduct experimental research with children aged 4 to
                        12, employing a cross-cultural lens to examine both universal patterns and cultural
                        variations. In addition to our work with children, we also extend our research to adult
                        populations to trace the developmental trajectory of moral and social understanding.
                    </p>
                </div>

                <div className="flex justify-center mb-12 md:mb-20">
                    <Image
                        src="/researchtopic1.png"
                        alt="Mind & Morality Illustration 1"
                        width={1000}
                        height={350}
                        className="w-full max-w-5xl h-auto"
                        priority
                    />
                </div>

                <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12 md:space-y-16">
                    <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold teal-text mb-4 md:mb-6 leading-snug">
                            1. How do children respond to wrongdoing?
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl teal-text leading-8 sm:leading-9 md:leading-10">
                            Children encounter moral transgressions from an early age, whether through personal
                            experiences or by observing others. We investigate how children react to different
                            forms of wrongdoing, including norm violations, harm, and unfairness. Do they prefer
                            punishment, reconciliation, or other forms of justice? How do these responses change
                            across development and cultural contexts?
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold teal-text mb-4 md:mb-6 leading-snug">
                            2. To whom do children extend moral concern?
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl teal-text leading-8 sm:leading-9 md:leading-10">
                            From family and friends to strangers, animals, and even abstract entities,
                            children&apos;s moral circles evolve as they grow. Our research examines the
                            boundaries of children&apos;s moral concern—who they care about, who they believe
                            deserves protection, and how these beliefs develop across cultures and contexts.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold teal-text mb-4 md:mb-6 leading-snug">
                            3. What cognitive mechanisms support the development of prosocial behavior?
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl teal-text leading-8 sm:leading-9 md:leading-10">
                            Helping, sharing, and cooperation require a complex interplay of cognitive processes.
                            We investigate how foundational abilities—such as theory of mind, executive function,
                            memory, and causal reasoning—contribute to prosocial decision-making. By
                            understanding these underlying mechanisms, we gain insight into how and why
                            prosociality emerges and varies across individuals and cultures.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold teal-text mb-4 md:mb-6 leading-snug">
                            4. How do social factors shape children&apos;s cooperative behavior?
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl teal-text leading-8 sm:leading-9 md:leading-10">
                            Cooperation is essential for navigating social life, but not all interactions are the
                            same. We study how factors like social group membership, kinship, and social
                            hierarchy influence children&apos;s willingness to share, help, and collaborate. Are
                            children more likely to cooperate with those they perceive as similar or close to
                            them? How do these biases emerge and shift over time?
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold teal-text mb-4 md:mb-6 leading-snug">
                            5. How can we use citizen science to better characterize social behavior?
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl teal-text leading-8 sm:leading-9 md:leading-10 mb-4 md:mb-6">
                            Traditional lab studies offer deep insights into social development, but they often
                            rely on small, WEIRD (Western, Educated, Industrialized, Rich, and Democratic)
                            samples. We explore how large-scale, citizen science approaches—such as online
                            games, interactive experiments, and community-based research—can provide a broader,
                            more ecologically valid understanding of social behavior in children and adults.
                        </p>

                        <p className="text-base sm:text-lg md:text-xl teal-text leading-8 sm:leading-9 md:leading-10">
                            Traditional lab studies offer deep insights into social development, but they often
                            rely on small, WEIRD (Western, Educated, Industrialized, Rich, and Democratic)
                            samples. We explore how large-scale, citizen science approaches—such as online
                            games, interactive experiments, and community-based research—can provide a broader,
                            more ecologically valid understanding of social behavior in children and adults.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center mt-12 md:mt-20">
                    <Image
                        src="/researchtopic2.png"
                        alt="Mind and Morality Lab logo graphic"
                        width={520}
                        height={320}
                        className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[520px] h-auto"
                    />
                </div>
            </section>
        </main>
    )
}