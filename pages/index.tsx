import Head from "next/head";
import PrimaryNavbar from "@/components/navigation/primary/primary_navbar";
import SecondaryNavbar from "@/components/navigation/secondary/secondary_navbar";
import { StoreContext } from '../store/store';
import { useContext } from 'react';
import { apiLogin } from "../api/authentification";

export default function Home() {
    const { state, dispatch } = useContext(StoreContext);

    async function handleClick() {
        const token = await apiLogin("marklyan@gmail.com", "simple_password");
        console.log(token);
        // setTimeout(() => {
        //     console.log(token);
        //     dispatch({ type: 'SET_TOKEN', payload: token });
        //     console.log(state.token);
        // }, 2000);
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