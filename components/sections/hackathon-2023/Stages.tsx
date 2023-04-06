export default function Stages() {
    const aboutData = [
        { title: "Stage 1", subTitle: "Participants much register within the given time period  for one of more of the following topics, Fintech, Civic-tech, Ed-tech, Healthcare" },
        {
            title: "Stage 2",
            subTitle:
                "Idea stage (Virtual presentation) ideas are presented virtually, using a 5 minutes long video explaining the idea and explaining the concept, stating what they want to do and why"
        },
        { title: "Stage 3", subTitle: "Pitch Deck (this is for the proposal) and submission of mock-up and prototypes." },
        { title: "Stage 4", subTitle: "Onsite Presentation of the mvp of the ideas and talks" }
    ];

    return (
        <div className="mt-16 mx-12">
            <div className="text-center">
                <h1 className="font-bold font-Sora text-2xl md:text-3xl lg:text-4xl tracking-wider">Road to Finals</h1>
                <p className="mt-2 text-lg">Below are the stages in which the hackathon will take place </p>
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
