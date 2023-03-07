import type { NextPage } from "next";
import DefaultLayout from "../components/layouts/DefaultLayout";
import HAbout from "../components/sections/home/About";
import HEvents from "../components/sections/home/Events";
import Hero from "../components/sections/home/Hero";

const Home: NextPage = () => {
    return (
        <DefaultLayout>
            <>
                <Hero />
                <HEvents />
                <HAbout />
            </>
        </DefaultLayout>
    );
};

export default Home;
