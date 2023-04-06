export default function About() {
    const aboutData = [
        { title: "What", subTitle: "A hybrid hackathon for invited NACOS schools competing in various categories related to the theme." },
        { title: "When", subTitle: "To be taken place from April with the finals in July." },
        { title: "Who", subTitle: "All students from the invited school can participate under their  respective NACOS Chapter  " },
        { title: "Why", subTitle: "Hackathon can be a great way for people to learn new skills, collaborate with others, and build something creative in a short period of time." },
        { title: "Where", subTitle: "This inaugural event will be taken place at Mountain Top University University, Prayer City, Ogun State, Nigeria" }
    ];

    return (
        <div className="mt-16 mx-12">
            <div className="text-center">
                <h1 className="font-bold font-Sora text-2xl md:text-3xl lg:text-4xl tracking-wider">About</h1>
                <p className="mt-2 text-lg">
                    NACOS (Mountain Top University Chapter) will be having their inaugural hackathon named Code Traven Hackathon. Aimed at finding Local solutions to various problems around the World
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
                {aboutData.map((about, index) => (
                    <div key={index} className="break-words bg-primary/50 p-4">
                        <div className="font-Sora font-bold text-2xl">{about.title}</div>
                        <div className="font-semibold text-gray-800 text-justify mt-3">{about.subTitle}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
