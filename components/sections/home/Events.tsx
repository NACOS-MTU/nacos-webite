import Link from "next/link";
import { BsAwardFill } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import { AiFillBook } from "react-icons/ai";

export default function Events() {
    const events = [
        // { title: "Seminars / BootCamps", subTitle: "We organize seminars on physical ans theoretical aspects of computing", uLink: "/", icon: "AiFillBook" },
        { title: "Hackathon", subTitle: "We organize hackathon and competitions for computing students", uLink: "/hackathon", icon: "BsAwardFill" },
        { title: "Nacos Week", subTitle: "A full Week dedicated for computing students in Mountain Top University", uLink: "/", icon: "MdOutlineComputer" }
    ];

    return (
        <div className="mt-16 mx-12">
            <div className="text-center">
                <h1 className="font-bold font-Sora text-2xl md:text-3xl lg:text-4xl tracking-wider">Events</h1>
                {/* <p className="mt-2 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p> */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 items-center mt-10 lg:space-x-10">
                {events.map((event, index) => (
                    <div key={index} className="text-justify hover:cursor-pointer ml-5 rounded-md hover:bg-primary/50 p-6">
                        <Link href={event.uLink}>
                            <div>
                                <div className="bg-primary rounded-sm w-16 h-16 flex items-center px-3 text-6xl">
                                    {event.icon === "AiFillBook" && <AiFillBook color="white" />}
                                    {event.icon === "BsAwardFill" && <BsAwardFill color="white" />}
                                    {event.icon === "MdOutlineComputer" && <MdOutlineComputer color="white" />}
                                </div>

                                <div className="font-bold font-Sora text-black text-xl mt-6 tracking-wider mb-1">{event.title}</div>

                                <div className="text-gray-600 text-justify">{event.subTitle}</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
