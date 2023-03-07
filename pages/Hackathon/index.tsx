import Spons from "../../components/sections/hackathon/Spons";
import About from "../../components/sections/hackathon/About";
import Prizes from "../../components/sections/hackathon/Prizes";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import HeroSection from "../../components/sections/hackathon/Hero";

export default function Hackathon() {
    return (
        <DefaultLayout>
            <>
                <HeroSection />

                <div className="mt-5">
                    <About />
                </div>

                <div className="mt-5">
                    <Prizes />
                </div>

                <div className="mt-5">
                    <Spons />
                </div>
            </>
        </DefaultLayout>
    );
}
