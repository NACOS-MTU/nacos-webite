import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../../components/layouts/DefaultLayout";
import Hero from "../../components/sections/hackathon-2023/Hero";
import Faq from "../../components/sections/hackathon-2023/Faq";
import About from "../../components/sections/hackathon-2023/About";
import Prizes from "../../components/sections/hackathon-2023/Prizes";
import Sponsors from "../../components/sections/hackathon-2023/Sponsors";

const Hackathon: NextPage = () => {
    return (
        <DefaultLayout>
            <>
                <Hero />
                <About />
                <Sponsors />
                <Prizes />
                <Faq />
            </>
        </DefaultLayout>
    );
};

export default Hackathon;
