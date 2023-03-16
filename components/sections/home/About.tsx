import Image from "next/image";

import logo from "../../../public/logo.svg";
import { AiOutlineMail } from "react-icons/ai";

export default function About() {
    return (
        <div className="mx-12 mt-16">
            <div className="grid grid-cols-2 items-center">
                <div className="lg:col-span-1 col-span-2">
                    <p className="text-primary font-semibold">About Us</p>
                    <h1 className="text-black font-bold font-Sora text-2xl md:text-3xl lg:text-4xl my-2">NACOS (MTU Chapter)</h1>
                    <p className="h-1 w-28 rounded-md  bg-primary" />

                    <p className="pt-3 text-justify font-gray-700">
                        Nigerian Association of Computing Students (NACOS) is the umbrella body for students studying computer science , computing engineering, information systems, cyber security,
                        software engineering, telecommunications engineering and all IT-related courses in Nigeria and have been in existence for over two decades and Nacos can boast of its presence
                        in almost all tertiary institution in Nigeria(including privately owned ones).
                    </p>

                    <p className="pt-3 text-justify font-gray-700">
                        With a membership strength of about Three Hundred and Fifty Thousand(350,00) members in over two hundred and fifty(250) local chapters in different tertiary institutions
                        (Universities, Polytechnics and College of Education) across the six(6) geo-political zones of the federation, thus making the Association the largest and most organized
                        students board in Africa
                    </p>

                    <div className=" pb-5 pt-5 ">
                        <div className="flex space-x-4  text-black">
                            <div className="flex items-center space-x-2">
                                <AiOutlineMail />
                                <p>nacosmtu@mtu.edu.ng</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-1 col-span-2 hidden lg:block">
                    <div className="flex justify-center ">
                        <Image src={logo} />
                    </div>
                </div>
            </div>
        </div>
    );
}
