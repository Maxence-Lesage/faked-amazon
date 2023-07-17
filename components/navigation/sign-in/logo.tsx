import styled from '@emotion/styled'
import amazonLogo from '@/public/images/amazon_black.png'
import Image from 'next/image'

const Container = styled('div')({
    position: 'relative',
    height: '40px',
    width: '130px',
})

export default function Logo() {
    return (
        <Container>
            <Image src={amazonLogo} alt="Amazon.fr" fill={true} />
        </Container>
    )
}