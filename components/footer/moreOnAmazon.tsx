import styled from '@emotion/styled'
import Link from 'next/link'

const Container = styled('table')({
    width: '100%',
    padding: '20px 5%',
    backgroundColor: 'var(--color-background-nav-dark)',
    borderSpacing: '0 30px',

    "@media (max-width: 875px)": {
        display: 'none',
    },
})

const Item = styled('td')({
    verticalAlign: 'top',
    "& h2": {
        color: 'var(--color-light)',
        fontSize: '14px',
        fontWeight: 500,
        maxWidth: '150px',
    },
    "& p": {
        color: 'var(--color-dark)',
        fontSize: '14px',
        maxWidth: '150px',
    },
    "& :hover h2, & :hover p": {
        textDecoration: 'underline',
    }
})

const Separator = styled('td')({
    width: '5%',
})

export default function MoreOnAmazon() {
    return (
        <Container>
            <tbody>
                <tr>
                    <Item>
                        <Link href={"/"}>
                            <h2>Amazon Music</h2>
                            <p>Écoutez des millions de chansons</p>
                        </Link>
                    </Item>
                    <Separator />
                    <Item>
                        <Link href={"/"}>
                            <h2>AbeBooks</h2>
                            <p>Livres, arts & articles de collection</p>
                        </Link>
                    </Item>
                    <Separator />
                    <Item>
                        <Link href={"/"}>
                            <h2>Amazon Web Services</h2>
                            <p>Services de Cloud Computing Flexibles</p>
                        </Link>
                    </Item>
                    <Separator />
                    <Item>
                        <Link href={"/"}>
                            <h2>Audible</h2>
                            <p>Livres audio télécharger</p>
                        </Link>
                    </Item>
                    <Separator />
                    <Item>
                        <Link href={"/"}>
                            <h2>Book Depository</h2>
                            <p>Livres expédiés dans le monde entier</p>
                        </Link>
                    </Item>
                </tr>
                <tr>
                    <Item>
                        <Link href={"/"}>
                            <h2>Kindle Direct Publishing</h2>
                            <p>Auto-publiez facilement vos livres au format numérique</p>
                        </Link>
                    </Item>
                    <Separator />
                    <Item>
                        <Link href={"/"}>
                            <h2>Amazon Seconde main</h2>
                            <p>Produits d occasion ou emballage ouvert</p>
                        </Link>
                    </Item>
                    <Separator />
                    <Item>
                        <Link href={"/"}>
                            <h2>ShopBop</h2>
                            <p>Vêtements de Marque & Mode</p>
                        </Link>
                    </Item>
                    <Separator />
                    <Item>
                        <Link href={"/"}>
                            <h2>Amazon Advertising</h2>
                            <p>Ciblez, attirez et fidélisez vos clients</p>
                        </Link>
                    </Item>
                    <Separator />
                    <Item>
                        <Link href={"/"}>
                            <h2>Amazon Business</h2>
                            <p>Paiement 30 jours. Hors TVA. <br /> Pour les professionnels.</p>
                        </Link>
                    </Item>
                </tr>
            </tbody>
        </Container>
    )
}