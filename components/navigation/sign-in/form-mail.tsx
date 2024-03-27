import styled from "@emotion/styled";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const FormContainer = styled('div')({
    padding: '25px',
    border: '1px solid var(--color-border)',
    borderRadius: '8px',
    width: '350px',
})

const Title = styled('h1')({
    fontSize: '28px',
    fontWeight: 400,
})

const Form = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
})

const Label = styled('label')({
    fontWeight: 700,
    fontSize: '13px',
})

const Input = styled('input')({
    marginTop: '4px',
    height: '30px',
    borderRadius: '4px',
    padding: '0 7px',
    border: '1px solid var(--color-dark)',
    transition: 'all 0.2s ease-in-out',
    caretColor: 'var(--color-dark)',
    "&:focus": {
        outline: '3px solid var(--color-input-focus)',
        borderColor: 'var(--color-background-nav-light)',
    }
})

const Button = styled('button')({
    marginTop: '15px',
    height: '30px',
    borderRadius: '8px',
    backgroundColor: 'var(--color-button)',
    letterSpacing: '0.5px',
    fontSize: '13px',
    border: 'none',
    "&:hover": {
        cursor: 'pointer',
        backgroundColor: 'var(--color-button-hover)',
    },
    "&:focus": {
        outline: '3px solid var(--color-input-focus)',
        boxShadow: '0 0 0 2px var(--color-light), 0 0 0 1px var(--color-primary)',
        backgroundColor: 'var(--color-button-focus)',
    }
})

const Text = styled('p')({
    marginTop: '20px',
    fontSize: '12px',
    lineHeight: '1.5',
})

const SpanLink = styled(Link)({
    color: 'var(--color-hypertext)',
    "&:hover": {
        cursor: 'pointer',
        color: 'var(--color-href-hover)',
        textDecoration: 'underline',
    }
})

const Help = styled('div')({
    marginTop: '20px',
    display: 'flex',
    fontSize: '12px',
    color: 'var(--color-hypertext)',
    "& svg": {
        height: '11px',
        color: 'var(--color-dark)',
        alignSelf: 'center',
        marginRight: '5px',
    },
    "&:hover": {
        cursor: 'pointer',
        color: 'var(--color-href-hover)',
        textDecoration: 'underline',
    }
})

export default function FormMail() {
    return (
        <FormContainer>
            <Title>S identifier</Title>
            <Form>
                <Label htmlFor="email">Adresse e-mail ou numéro de téléphone portable</Label>
                <Input type="text" name="email" id="email" />
                <Button type="submit">Continuer</Button>
            </Form>
            <Text>
                En passant votre commande, vous acceptez les
                <SpanLink href={"/"}> Conditions générales de vente </SpanLink>d Amazon.
                Veuillez consulter notre <SpanLink href={"/"}> Notice Protection de vos informations personnelles</SpanLink>,
                notre <SpanLink href={"/"}>Notice Cookies</SpanLink> et notre <SpanLink href={"/"}>Notice Annonces publicitaires
                    basées sur vos centres d intérêt</SpanLink>.
            </Text>
            <Help>
                <FontAwesomeIcon icon={faCaretRight} />
                <p>Avez-vous besoin d aide ?</p>
            </Help>
        </FormContainer>
    )
}