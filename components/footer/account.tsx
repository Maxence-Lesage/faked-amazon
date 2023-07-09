import { StoreContext } from '@/store/store';
import styled from '@emotion/styled'
import Link from 'next/link';
import { useContext } from 'react';

const Container = styled('div')({
    display: 'none',
    width: '100%',
    backgroundColor: 'var(--color-background-nav-dark)',

    "@media (max-width: 875px)": {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    "& p": {
        paddingTop: '30px',
        color: 'var(--color-light)',
        fontSize: '17px',
        fontWeight: 600,
    }
})

export default function Account() {

    const { state, dispatch } = useContext(StoreContext);

    async function handleDeconnection() {
        dispatch({ type: 'SET_TOKEN', payload: "" });
        dispatch({ type: 'SET_PROFILE', payload: {} });
    }

    return (
        <Container>
            {
                state.token ?
                    <>
                        <Link href="/">
                            <p>Utiliser un compte différent</p>
                        </Link>
                        <Link href="/" onClick={handleDeconnection}>
                            <p>Déconnectez-vous</p>
                        </Link>
                    </>
                    :
                    <Link href="/">
                        <p>Déjà client(e)? Se connecter</p>
                    </Link>
            }
        </Container>
    )
}
