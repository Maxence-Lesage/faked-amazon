import styled from '@emotion/styled'
import BackToTop from './backToTop'
import Presentation from './presentation'

const FooterContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
})

export default function Footer() {
    return (
        <FooterContainer>
            <BackToTop />
            <Presentation />
        </FooterContainer>
    )
}