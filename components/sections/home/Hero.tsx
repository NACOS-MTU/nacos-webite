import { BsTelephoneFill } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import NavBar from "../../navigations/NavBar";

// this is for the hero section on the home page
export default function HeroSection() {
    return (
        <div>
            <div className="flex justify-center items-center min-h-[450px] w-full bg-heroBg bg-black/60 bg-blend-overlay">
                <div className="text-white text-center">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Nigerian Association of Computing Students</h1>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl"> (Mountain Top University Chapter)</h1>
                    <p className="mt-3 text-lg">Computing Students of Mountain Top University</p>
                </div>
            </div>

            <div className="bg-black">
                <div className="flex space-x-4 px-4 py-2 text-white">
                    <div className="flex items-center space-x-2">
                        {/* <BsTelephoneFill /> */}
                        {/* <p>+234 703 380 0000</p> */}
                    </div>
                    <div className="flex items-center space-x-2">
                        <HiMailOpen />
                        <p>nacosmtu@mtu.edu.ng</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
