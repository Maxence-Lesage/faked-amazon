import Head from "next/head";
import PrimaryNavbar from "@/components/navigation/primary/primary_navbar";
import SecondaryNavbar from "@/components/navigation/secondary/secondary_navbar";
import { StoreContext } from '../store/store';
import { useContext } from 'react';

export default function Home() {
    const { state, dispatch } = useContext(StoreContext);
    console.log(state.token);

    function handleClick() {
        dispatch({ type: 'SET_TOKEN', payload: 'XymA' });
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