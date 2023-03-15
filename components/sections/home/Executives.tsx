import Image from "next/image";
import user from "../../../public/user.png";

export default function Executives() {
    const executives = [
        { name: "Benjamin Ajibade", position: "President", image: user, link: "https://example.com" },
        { name: "Olatubusun John", position: "Vice-President", image: user, link: "https://example.com" },
        { name: "Babalola Damisi", position: "Financial Secretary", image: user, link: "https://example.com" },
        { name: "Ajayi Israel", position: "General Secretary", image: user, link: "https://example.com" },
        { name: "Merit Mohammed", position: "Assistant General Secretary", image: user, link: "https://example.com" },
        { name: "Chineye ", position: "Librarian", image: user, link: "https://example.com" },
        { name: "??", position: "Assistant Librarian", image: user, link: "https://example.com" },
        { name: "Kuboye Katete", position: "Public Relations Officer", image: user, link: "https://example.com" },
        { name: "Julo", position: "Director of Socials", image: user, link: "https://example.com" },
        { name: "Kemi Sarah", position: "Director of Sports", image: user, link: "https://example.com" }
    ];

    return (
        <div className="mt-16 mx-12 mb-10">
            <div className="text-center">
                <h1 className="font-bold font-Sora text-2xl md:text-3xl lg:text-4xl tracking-wider">Executive Members</h1>
                <p className="mt-2 text-lg">NACOS (MTU chapter) Executives for 2022/23 session</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-6">
                {executives.map((executive, index) => (
                    <div key={index} className="bg-white rounded-sm shadow-lg p-3 hover:bg-primary/50">
                        <div className="flex items-end space-x-3">
                            <div className="w-1/2 overflow-hidden">
                                <Image className="rounded-sm" src={executive.image} alt={executive.name} />
                            </div>
                            <div className="w-1/2 break-words text-left">
                                <a href={executive.link} target="_blank" rel="noopener noreferrer" className="underline font-Sora font-bold text-lg">
                                    {executive.name}
                                </a>
                                <p>{executive.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
