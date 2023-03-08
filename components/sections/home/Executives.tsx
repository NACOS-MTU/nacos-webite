import Image from "next/image";
import user from "../../../public/user.png";

export default function Executives() {
    const executives = [
        { name: "Johnny Knoxville", position: "President", image: user },
        { name: "Johnny Knoxville", position: "President", image: user },
        { name: "Johnny Knoxville", position: "President", image: user },
        { name: "Johnny Knoxville", position: "President", image: user },
        { name: "Johnny Knoxville", position: "President", image: user },
        { name: "Johnny Knoxville", position: "President", image: user }
    ];

    return (
        <div className="mt-16 mx-12 mb-10">
            <div className="text-center">
                <h1 className="font-bold font-Sora text-2xl md:text-3xl lg:text-4xl tracking-wider">Executive Members</h1>
                <p className="mt-2 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-6">
                {executives.map((executive, index) => (
                    <div key={index} className="bg-white rounded-sm shadow-lg p-3 hover:bg-primary/50">
                        <div className="flex items-end space-x-3">
                            <div className="w-1/2 overflow-hidden">
                                <Image className="rounded-sm" src={executive.image} alt={executive.name} />
                            </div>
                            <div className="w-1/2 break-words">
                                <h1 className="font-Sora font-bold text-lg">{executive.name}</h1>
                                <p>{executive.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
