import Head from "next/head";
import PrimaryNavbar from "@/components/navigation/primary/primary_navbar";
import SecondaryNavbar from "@/components/navigation/secondary/secondary_navbar";

import { useStore, dispatch, getStore } from "../store/store";

export default function Home() {

    dispatch("SET_TOKEN", "XyZ123");
    console.log(getStore("token"));
    console.log(getStore());
    console.log(getStore("profile"));

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <PrimaryNavbar />
            <SecondaryNavbar />
        </>
    );
}