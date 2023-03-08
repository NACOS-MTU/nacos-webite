export default function About() {
    const aboutData = [
        { title: "What", subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
        { title: "When", subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
        { title: "Who", subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
        { title: "Why", subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." },
        { title: "Where", subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod." }
    ];

    return (
        <div className="mt-16 mx-12">
            <div className="text-center">
                <h1 className="font-bold font-Sora text-2xl md:text-3xl lg:text-4xl tracking-wider">About</h1>
                <p className="mt-2 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
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
