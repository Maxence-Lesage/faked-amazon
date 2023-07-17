import Logo from '@/components/navigation/sign-in/logo'
import FormMail from '@/components/navigation/sign-in/form-mail'
import SignInFooter from '@/components/navigation/sign-in/sign-in-footer'
import styled from '@emotion/styled'
import Head from 'next/head'
import NewOnAmazon from '@/components/navigation/sign-in/new-on-amazon'

const Container = styled('div')({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    backgroundColor: 'var(--color-light)',
})

const LogoContainer = styled('div')({
    height: '55px',
    marginTop: '20px',
})

export default function SignIn() {
    return (
        <>
            <Head>
                <title>Connexion Amazon</title>
            </Head>
            <Container>
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <FormMail />
                <NewOnAmazon />
                <SignInFooter />
            </Container>
        </>
    )
}