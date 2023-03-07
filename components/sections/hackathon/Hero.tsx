import { BsTelephoneFill } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";

// this is for the hero section on the home page
export default function HeroSection() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen w-full bg-heroBg bg-black/60 bg-blend-overlay">
                <div className="text-white text-center">
                    <h1 className="font-Sora font-bold text-3xl md:text-4xl lg:text-5xl">Local Problems Global Solutions</h1>
                    <p className="mt-3 font-semibold text-primary tracking-wide text-xl">July 2023</p>

                    <div className="flex justify-center items-center space-x-4 px-4 py-2 text-white mt-4">
                        <button className="font-semibold tracking-wider font-Sora bg-primary px-6 py-4 text-xl rounded-sm" onClick={() => window.open("https://example.com", "_blank")}>
                            Register For Hackathon
                        </button>
                        <button className="font-semibold tracking-wider font-Sora bg-primary px-6 py-4 text-xl rounded-sm" onClick={() => window.open("https://example.com", "_blank")}>
                            Hackathon Schedule
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
