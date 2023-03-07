import { AiOutlineMail } from "react-icons/ai";

export default function HAbout() {
    return (
        <>
            <div className="p-10 relative">
                <div className="text-green-800 font-semibold">ABOUT US</div>

                <div className="text-black font-extrabold text-3xl ">
                    NACOS (MTU CHAPTER)
                    <p className="h-1 w-12 rounded-md  bg-green-800" />
                </div>

                <div className="pt-5">
                    <div className="grid grid-cols-2">
                        <div className=" lg:col-span-1 col-span-2">
                            Nigerian Association of computing Students (Nacos) is the umbrella body for students studying computer science , computing engineering, information systems, cyber security,
                            software engineering, telecommunications engineerign and all IT-related courses in Nigeria and have been in existence for over two decades and Nacos can boast of its
                            presence in almost all tertiary institution in Nigeria(including privately owned ones).
                            <p className="pt-3">
                                With a memrbership strength of about Three Hundred and Fifty Thousand(350,00) members in over two hundred and fifty(250) local chapters in different tertiary instutions
                                (Universities, Polytechnics and College of Education) across the six(6) geo-political zones of the federation, thus making the Association the largest and most
                                organized students board in Africa
                            </p>
                        </div>

                        <img src="/w-logo.jpg" className="hidden lg:block absolute right-10 bottom-20 z-10 h-[400px]" />
                    </div>
                </div>

                <div className=" pb-5 pt-5 ">
                  
                    <div className="flex space-x-4  text-black">
                       
                        <div className="flex items-center space-x-2">
                            <AiOutlineMail />
                            <p>info@nacos.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
