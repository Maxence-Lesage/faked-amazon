import styled from '@emotion/styled'
import Link from 'next/link'

const Container = styled('div')({
    backgroundColor: 'var(--color-background-nav-dark)',
    padding: '30px 20px 50px 20px',
    width: '100%',
})

const List = styled('ul')({
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1000px',
    gap: '15px',
    lineHeight: '.7',
    justifyContent: 'center',
    margin: '0 auto',

    "& li": {
        listStyle: 'none',
        color: 'var(--color-light-medium)',
        fontSize: '15px',
    },

    "& li a:hover": {
        textDecoration: 'underline',
    },

    "& li:last-of-type": {
        flex: '1 1 100%',
        textAlign: 'center',
        "@media (max-width: 875px)": {
            paddingTop: '20px',
        }
    },

    "& li:nth-of-type(2)": {
        display: 'none',
        "@media (max-width: 875px)": {
            display: 'block',
        }
    }
})

const CopyRightSpan = styled('span')({
    "@media (max-width: 875px)": {
        display: 'none',
    }
})

export default function LegalNotice() {
    return (
        <Container>
            <List>
                <li>
                    <Link href={"/"}>
                        <p>Conditions générales de vente</p>
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        <p>Conditions de participation au programme Marketplace</p>
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        <p>Vos informations personnelles</p>
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        <p>Cookies</p>
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        <p>Annonces basées sur vos centres d&apos;'intérêt</p>
                    </Link>
                </li>
                <li>
                    <p>© 1996-2023, Amazon.com Inc. <CopyRightSpan>ou ses affiliés</CopyRightSpan></p>
                </li>
            </List>
        </Container>
    )
}