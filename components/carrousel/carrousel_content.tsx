import styled from "@emotion/styled";
import Image from "next/image";

const Content = styled('div')({
    top: '0',
    left: '0',
    width: '120%',
    height: '200%',

    '& img': {
        transform: 'translateX(-10%)',
        objectFit: 'cover',
        objectPosition: "center top",
    }
})

export default function CarrouselContent() {

    return (
        <Content>
            <Image src="/images/placeholder.jpg" alt="test" fill={true} />
        </Content>
    )
}