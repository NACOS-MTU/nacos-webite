import type { NextPage } from "next";
import DefaultLayout from "../components/layouts/DefaultLayout";
import HAbout from "../components/sections/home/About";
import HEvents from "../components/sections/home/Events";
import Hero from "../components/sections/home/Hero";
import Executives from "../components/sections/home/Executives";

const Home: NextPage = () => {
    return (
        <DefaultLayout>
            <>
                <Hero />
                <HEvents />
                <HAbout />
                <Executives />
            </>
        </DefaultLayout>
    );
};

export default Home;
