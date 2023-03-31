import { BsTelephoneFill } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";

// this is for the hero section on the home page
export default function HeroSection() {
    return (
        <div className="flex justify-center items-center min-h-[450px] w-full bg-heroBg bg-black/60 bg-blend-overlay">
            <div className="text-white text-center">
                <h1 className="font-Sora font-bold text-3xl text-black md:text-4xl lg:text-5xl">Code Traven Hackathon </h1>
                <h1 className="font-Sora font-bold text-3xl md:text-4xl lg:text-4xl">THEME: Local Problems Global Solutiions</h1>
                <p className="mt-3 font-semibold text-black tracking-wide text-xl">Date: July 2023</p>

                <div className="flex justify-center items-center space-x-4 px-4 py-2 text-white mt-4">
                    <button className="font-semibold tracking-wider font-Sora bg-primary px-6 py-4 text-xl rounded-sm" onClick={() => window.open("https://example.com", "_blank")}>
                        Register For Hackathon
                    </button>
                    <button className="font-semibold tracking-wider font-Sora bg-primary px-6 py-4 text-xl rounded-sm" onClick={() => window.open("https://docs.google.com/document/d/10k7nM2Gyi3A2YkdniUHYjGWKycFy74W_bPSDAv3KwPI/edit?usp=sharing", "_blank")}>
                        Hackathon Schedule
                    </button>
                </div>
            </div>
        </div>
    );
}
