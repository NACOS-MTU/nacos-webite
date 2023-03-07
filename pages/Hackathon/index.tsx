import DefaultLayout from "../../components/layouts/DefaultLayout";
import About from "../../components/sections/hackathon/About";
import HeroSection from "../../components/sections/hackathon/Hero";
import Prizes from "../../components/sections/hackathon/Prizes";
import Spons from "../../components/sections/hackathon/Spons";










export default function Hackathon() {
    return (
        <DefaultLayout>
            <>
                <HeroSection />

                <div
                    className="mt-5"
                >
                    <About />
                </div>

                <div
                    className="mt-5"
                >
                    <Prizes />
                </div>

                <div
                    className="mt-5"
                >
                    <Spons />
                </div>


            </>
        </DefaultLayout>
    )
}