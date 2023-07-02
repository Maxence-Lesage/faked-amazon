import Head from "next/head";
import PrimaryNavbar from "@/components/navigation/primary/primary_navbar";
import SecondaryNavbar from "@/components/navigation/secondary/secondary_navbar";
import { StoreContext } from '../store/store';
import { useContext } from 'react';
import { apiLogin } from "../api/authentification";
import { apiGetAllCategories } from "@/api/ressources";

export default function Home() {
    const { state, dispatch } = useContext(StoreContext);

    async function handleConnection() {
        dispatch({ type: 'SET_TOKEN', payload: "Xyxyx" });
        dispatch({ type: 'SET_PROFILE', payload: { name: 'Jhon', surname: 'Doe', email: 'doe@example.xyz', phone: '0125659876', address: { street: 'Main Street', number: '123', city: 'New York', zip: '10041', country: 'USA' } } });
    }

    async function handleDeconnection() {
        dispatch({ type: 'SET_TOKEN', payload: "" });
        dispatch({ type: 'SET_PROFILE', payload: {} });

    }

    async function handleAddItem() {
        dispatch({ type: 'SET_BASKET', payload: { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: "" } });
    }

    async function handleRemoveItem() {
        dispatch({ type: 'SET_BASKET', payload: {} });
    }

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <PrimaryNavbar />
            <input type="button" value="Connection" onClick={handleConnection} />
            <input type="button" value="Deconnection" onClick={handleDeconnection} />
            <input type="button" value="Add Item" onClick={handleAddItem} />
            <input type="button" value="Remove Item" onClick={handleRemoveItem} />
        </>
    );
}