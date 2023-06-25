import Head from "next/head";
import PrimaryNavbar from "@/components/navigation/primary/primary_navbar";
import SecondaryNavbar from "@/components/navigation/secondary/secondary_navbar";
import { useStore, dispatch, getStore } from "../store/store";

export default function Home() {

    setTimeout(() => {
        console.log(getStore());
    }, 3000);

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