import Head from "next/head";
import PrimaryNavbar from "@/components/navigation/primary/primary_navbar";
import SecondaryNavbar from "@/components/navigation/secondary/secondary_navbar";
import { StoreContext } from '../store/store';
import { useContext } from 'react';
import { apiLogin } from "../api/authentification";
import { apiGetAllCategories } from "@/api/ressources";

export default function Home() {
    const { state, dispatch } = useContext(StoreContext);
    console.log(state.basket);

    async function handleClick() {
        const categories = await apiGetAllCategories();
        dispatch({ type: 'SET_CATEGORIES', payload: categories });
    }

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <PrimaryNavbar />
            <SecondaryNavbar />
            <input type="button" value="CLICK ON ME" onClick={handleClick} />
        </>
    );
}