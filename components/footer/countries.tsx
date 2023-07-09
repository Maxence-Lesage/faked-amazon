import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'var(--color-background-nav-medium)',
    padding: '50px 0px',
    width: '100%',

    "@media (max-width: 875px)": {
        display: 'none',
    }
})

const CountriesContainer = styled('ul')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    lineHeight: '1.8',
    color: 'var(--color-light-medium)',
    fontSize: '15px',
    maxWidth: '1200px',
    padding: '20px 60px',
    "& a:hover": {
        textDecoration: "underline",
    },
    "& li": {
        margin: "0px 17px 0px 0px",
        listStyleType: "none",
    }
})

export default function Countries() {
    return (
        <Container>
            <Link href={"/"}>
                <Image src="/images/amazon.png" alt='amazon logo' width={125} height={35} />
            </Link>
            <CountriesContainer>
                <li>
                    <Link href={"/"}>
                        Australie
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Allemagne
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Belgique
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Brésil
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Canada
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Chine
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Espagne
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        États-Unis
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Inde
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Italie
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Japon
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Mexique
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Pays-Bas
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Pologne
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Royaume-Uni
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Émirats arabes unis
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Singapour
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Turquie
                    </Link>
                </li>
            </CountriesContainer>
        </Container>
    )
}
