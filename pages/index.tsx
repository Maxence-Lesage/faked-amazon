import Head from "next/head";
import PrimaryNavbar from "@/components/navigation/primary/primary_navbar";
import SecondaryNavbar from "@/components/navigation/secondary/secondary_navbar";
import { useStore, dispatch, getStore } from "../store/store";
import { apiGetAllCategories } from "../api/ressources";

export default function Home() {

    // apiGetAllCategories()

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