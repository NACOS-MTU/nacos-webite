import Image from "next/image";
import speaker from "../../../public/user.png";

export default function SpeakersAndJudges() {
    const persons = [
        { name: "Logan Paul", role: "CEO", company: "Prime Hydration", image: speaker, link: "https://drinkprime.com/" },
        { name: "Logan Paul", role: "CEO", company: "Prime Hydration", image: speaker, link: "https://drinkprime.com/" },
        // { name: "Logan Paul", role: "CEO", company: "Prime Hydration", image: speaker, link: "https://drinkprime.com/" },
        // { name: "Logan Paul", role: "CEO", company: "Prime Hydration", image: speaker, link: "https://drinkprime.com/" },
        // { name: "Logan Paul", role: "CEO", company: "Prime Hydration", image: speaker, link: "https://drinkprime.com/" },
        // { name: "Logan Paul", role: "CEO", company: "Prime Hydration", image: speaker, link: "https://drinkprime.com/" },
        // { name: "Logan Paul", role: "CEO", company: "Prime Hydration", image: speaker, link: "https://drinkprime.com/" },
        // { name: "Logan Paul", role: "CEO", company: "Prime Hydration", image: speaker, link: "https://drinkprime.com/" }
    ];

    return (
        <div className="mt-16 mx-12">
            <div className="text-center">
                <h1 className="font-bold font-Sora text-2xl md:text-3xl lg:text-4xl tracking-wider">Speakers And Judges</h1>
                {/* <p className="mt-2 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-6">
                {persons.map((person, index) => (
                    <div key={index} className="bg-white rounded-sm shadow-lg p-3 hover:bg-primary/50">
                        <div className="overflow-hidden">
                            <Image className="rounded-sm" src={person.image} alt={person.name} />
                        </div>
                        <div className="break-words text-left mt-2">
                            <a href={person.link} target="_blank" rel="noopener noreferrer" className="underline font-Sora font-bold text-xl tracking-wide">
                                {person.name}
                            </a>
                            <p>{person.role}</p>
                            <p className="font-medium">{person.company}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
