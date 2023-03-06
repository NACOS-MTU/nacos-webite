import Link from "next/link";
import { BsAwardFill } from "react-icons/bs";
import HEventCard from "../cards/HEventCard";
import { MdOutlineComputer } from "react-icons/md";
import { AiFillBook } from "react-icons/ai";

// this is for the events section on the hoempage
export default function HEvents() {
    return (
        <>
            <div className="flex justify-center ">
                <div className=" justify-center text-center text-2xl text-green-900 font-bold">
                    EVENTS
                    <div className=" text-black font-extrabold text-3xl">We help Computing Students to Grow Exponentially</div>
                </div>
            </div>

            {/* this is the cards section  */}
            <div className="p-3 flex items-center  pt-16 mx-auto">
                <HEventCard subTitle="we organise seminars on physical ans theoretical aspects of computing " title="Seminars / BootCamps" uLink="/" icon=<AiFillBook color="white" /> />

                <HEventCard subTitle="We organise hackathons and competitions for computing students  " title="Hackathons" uLink="/" icon=<BsAwardFill color="white" /> />

                <HEventCard subTitle="A full Week dedicated for computing students in Mountain Top University" title="Nacos Week" uLink="/" icon=<MdOutlineComputer color="white" /> />
            </div>
        </>
    );
}
