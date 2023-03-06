import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import DefaultLayout from "../components/layouts/DefaultLayout";
import styles from "../styles/Home.module.css";
import HAbout from "../components/sections/HAbout";
import HEvents from "../components/sections/HEvents";
import Hero from "../components/sections/Hero";

const Home: NextPage = () => {
    return (
        <DefaultLayout>
            <>
                <Hero />

                <div>
                    <HEvents />
                </div>

                <div>
                    <HAbout />
                </div>
            </>
        </DefaultLayout>
    );
};

export default Home;
