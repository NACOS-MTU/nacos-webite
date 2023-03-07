import Link from "next/link";
import { BsAwardFill } from "react-icons/bs";
import HEventCard from "../../cards/HEventCard";
import { MdOutlineComputer } from "react-icons/md";
import { AiFillBook } from "react-icons/ai";

export default function HEvents() {
    const events = [
        { title: "Seminars / BootCamps", subTitle: "we organize seminars on physical ans theoretical aspects of computing", uLink: "/", icon: "AiFillBook" },
        { title: "Hackathon", subTitle: "We organize hackathon and competitions for computing students", uLink: "/Hackathon", icon: "BsAwardFill" },
        { title: "Nacos Week", subTitle: "A full Week dedicated for computing students in Mountain Top University", uLink: "/", icon: "MdOutlineComputer" }
    ];

    return (
        <div className="mt-16 mx-12">
            <div className="text-center">
                <h1 className="font-bold font-Sora text-2xl md:text-3xl lg:text-4xl tracking-wider">Events</h1>
                <p className="mt-2 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
            </div>

            {/* this is the cards section  */}
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center mt-10 lg:space-x-10">
                <HEventCard subTitle="we organize seminars on physical ans theoretical aspects of computing" title="Seminars / BootCamps" uLink="/" icon={<AiFillBook color="white" />} />

                <HEventCard subTitle="We organize hackathon and competitions for computing students" title="Hackathon" uLink="/Hackathon" icon={<BsAwardFill color="white" />} />

                <HEventCard subTitle="A full Week dedicated for computing students in Mountain Top University" title="Nacos Week" uLink="/" icon={<MdOutlineComputer color="white" />} />
            </div>
        </div>
    );
}
