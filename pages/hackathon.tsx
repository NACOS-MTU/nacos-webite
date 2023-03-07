import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../components/layouts/DefaultLayout";
import Hero from "../components/sections/hackathon/Hero";

const Hackathon: NextPage = () => {
    return (
        <DefaultLayout>
            <>
                <Hero />
            </>
        </DefaultLayout>
    );
};

export default Hackathon;
