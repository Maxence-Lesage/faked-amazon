import styled from "@emotion/styled";
import Link from "next/link";

const Separator = styled('div')({
    marginTop: '40px',
    width: '100%',
    height: '44px',
    background: 'linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent)',
    "&::after": {
        content: '""',
        display: 'block',
        height: '44px',
        background: 'linear-gradient(to right,#fff,rgba(255,255,255,0),#fff)',
    }
})

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0px 10%',
})

const List = styled('ul')({
    listStyleType: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    "& li": {
        color: 'var(--color-hypertext)',
        fontSize: '12px',
        marginRight: '25px',
        lineHeight: '1.5',
        "&:hover": {
            color: 'var(--color-href-hover)',
            textDecoration: 'underline',
        }
    }
})

const Copyright = styled('p')({
    marginTop: '15px',
    color: 'var(--color-background-nav-light)',
    fontSize: '11px',
})

export default function SignInFooter() {
    return (
        <>
            <Separator />
            <Container>
                <List>
                    <li>
                        <Link href={"/"}>
                            Conditions d'utilisation
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            Protection de vos informations personnelles
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            Aide
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            Cookies
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"}>
                            Annonces basées sur vos centres d'intérêt
                        </Link>
                    </li>
                </List>
                <Copyright>
                    © 1996-2023, Amazon.com Inc. ou ses affiliés
                </Copyright>
            </Container>
        </>
    )
}