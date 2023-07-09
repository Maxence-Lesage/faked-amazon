import styled from '@emotion/styled'
import BackToTop from './backToTop'
import Presentation from './presentation'
import Countries from './countries'
import MoreOnAmazon from './moreOnAmazon'
import Account from './account'
import LegalNotice from './legalNotice'

const FooterContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
})

const Separator = styled('div')({
    width: '100%',
    height: '1px',
    backgroundColor: 'var(--color-background-nav-light)',
    "@media (max-width: 875px)": {
        display: 'none',
    }
})

export default function Footer() {
    return (
        <FooterContainer>
            <BackToTop />
            <Presentation />
            <Separator />
            <Countries />
            <MoreOnAmazon />
            <Account />
            <LegalNotice />
        </FooterContainer>
    )
}