import styled from "@emotion/styled";
import Link from "next/link";

const LargeScreen = styled("div")({
    display: "flex",
    justifyContent: "center",
    padding: "60px 80px",
    backgroundColor: "var(--color-background-nav-medium)",
    width: "100%",
    "@media (max-width: 1400px)": {
        padding: "40px 25px",
    },
    "@media (max-width: 875px)": {
        display: "none",
    }
})

const Section = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    color: "var(--color-light-secondary)",
    fontSize: "18px",
    wordWrap: "break-word",
    "& a:hover": {
        textDecoration: "underline",
    },
    "@media (max-width: 1400px)": {
        fontSize: "14px",
    }
})

const SectionTitle = styled("h2")({
    fontSize: "20px",
    color: "var(--color-light)",
    whiteSpace: "nowrap",
    "@media (max-width: 1400px)": {
        fontSize: "16px",
    }
})

const UnorderedList = styled("ul")({
    listStyleType: "none",
    "& li": {
        lineHeight: "1.2",
        marginBottom: "15px",
        maxWidth: "300px",
    }
})

const Separator = styled("div")({
    width: "10%",
})

const SmallScreen = styled("div")({
    padding: "20px 35px",
    backgroundColor: "var(--color-background-nav-medium)",
    "@media (min-width: 875px)": {
        display: "none",
    }
})

const SmallScreenLink = styled("div")({
    display: "inline-block",
    color: "var(--color-light)",
    fontSize: "15px",
    fontWeight: "500",
    width: "calc(50% - 50px)",
    marginBottom: "25px",
    marginRight: "50px",

    "@media (max-width: 420px)": {
        display: "block",
        width: "fit-content",
        margin: "0 auto 25px auto",
        textAlign: "center",
    }
})

export default function Presentation() {
    return (
        <>
            <LargeScreen>
                <Section>
                    <SectionTitle>Pour mieux nous connaître</SectionTitle>
                    <UnorderedList>
                        <li><Link href={"/"}>À propos d&apos;'Amazon</Link></li>
                        <li><Link href={"/"}>Carrières</Link></li>
                        <li><Link href={"/"}>Durabilité</Link></li>
                        <li><Link href={"/"}>Amazon Science</Link></li>
                    </UnorderedList>
                </Section>
                <Separator />
                <Section>
                    <SectionTitle>Gagnez de l&apos;'argent</SectionTitle>
                    <UnorderedList>
                        <li><Link href={"/"}>Vendez sur Amazon</Link></li>
                        <li><Link href={"/"}>Vendez sur Amazon Business</Link></li>
                        <li><Link href={"/"}>Vendez sur Amazon Handmade</Link></li>
                        <li><Link href={"/"}>Devenez Partenaire</Link></li>
                        <li><Link href={"/"}>Expédié par Amazon</Link></li>
                        <li><Link href={"/"}>Faites la promotion de vos produits</Link></li>
                        <li><Link href={"/"}>Auto-publiez votre livre</Link></li>
                        <li><Link href={"/"}>Amazon Pay</Link></li>
                        <li><Link href={"/"}>Voir plus : Gagner de l&apos;'argent avec nous</Link></li>
                    </UnorderedList>
                </Section>
                <Separator />
                <Section>
                    <SectionTitle>Moyens de paiement Amazon</SectionTitle>
                    <UnorderedList>
                        <li><Link href={"/"}>Carte Amazon Business Amex</Link></li>
                        <li><Link href={"/"}>Cartes de paiement</Link></li>
                        <li><Link href={"/"}>Paiement en plusieurs fois</Link></li>
                        <li><Link href={"/"}>Convertisseur de devises Amazon</Link></li>
                        <li><Link href={"/"}>Cartes cadeaux</Link></li>
                        <li><Link href={"/"}>Recharge en ligne</Link></li>
                        <li><Link href={"/"}>Recharche en point de vente</Link></li>
                    </UnorderedList>
                </Section>
                <Separator />
                <Section>
                    <SectionTitle>Besoin d&apos;'aide ?</SectionTitle>
                    <UnorderedList>
                        <li><Link href={"/"}>Voir ou suivre vos commandes</Link></li>
                        <li><Link href={"/"}>Tarifs et options de livraison</Link></li>
                        <li><Link href={"/"}>Amazon Prime</Link></li>
                        <li><Link href={"/"}>Retours et remplacements</Link></li>
                        <li><Link href={"/"}>Recyclage {'('}y compris les équipements électriques et électroniques{')'}</Link></li>
                        <li><Link href={"/"}>Infos sur notre Marketplace</Link></li>
                        <li><Link href={"/"}>Application Amazon Mobile</Link></li>
                        <li><Link href={"/"}>Service Client</Link></li>
                        <li><Link href={"/"}>Accessibilité</Link></li>
                    </UnorderedList>
                </Section>
            </LargeScreen>

            <SmallScreen>
                <SmallScreenLink>
                    <Link href={"/"}>Retours</Link>
                </SmallScreenLink>
                <SmallScreenLink>
                    <Link href={"/"}>Chez vous</Link>
                </SmallScreenLink>
                <SmallScreenLink>
                    <Link href={"/"}>Service Client</Link>
                </SmallScreenLink>
                <SmallScreenLink>
                    <Link href={"/"}>Vos commandes</Link>
                </SmallScreenLink>
                <SmallScreenLink>
                    <Link href={"/"}>Votre Compte</Link>
                </SmallScreenLink>
                <SmallScreenLink>
                    <Link href={"/"}>Vendre sur Amazon</Link>
                </SmallScreenLink>
                <SmallScreenLink>
                    <Link href={"/"}>Vos listes</Link>
                </SmallScreenLink>
                <SmallScreenLink>
                    <Link href={"/"}>Créer un compte professionnel gratuit</Link>
                </SmallScreenLink>
                <SmallScreenLink>
                    <Link href={"/"}>Trouver une liste</Link>
                </SmallScreenLink>
                <SmallScreenLink>
                    <Link href={"/"}>Vendez sur Amazon Business</Link>
                </SmallScreenLink>
                <SmallScreenLink>
                    <Link href={"/"}>Trouver un cadeau</Link>
                </SmallScreenLink>
                <SmallScreenLink>
                    <Link href={"/"}>Informations sur notre Marketplace</Link>
                </SmallScreenLink>
                <SmallScreenLink>
                    <Link href={"/"}>Articles que vous avez consultés récemments</Link>
                </SmallScreenLink>
                <SmallScreenLink>
                    <Link href={"/"}>Gérer vos abonnements</Link>
                </SmallScreenLink>
                <SmallScreenLink>
                    <Link href={"/"}>Télécharger l&apos;'application Amazon</Link>
                </SmallScreenLink>
                <SmallScreenLink>
                    <Link href={"/"}>Coordonnées 1-Click</Link>
                </SmallScreenLink>
                <SmallScreenLink>
                    <Link href={"/"}>Recyclage {'('}y compris les équipements électriques et électroniques{')'}</Link>
                </SmallScreenLink>
                <SmallScreenLink>
                    <Link href={"/"}>Accessibilité</Link>
                </SmallScreenLink>
            </SmallScreen>
        </>
    )
}