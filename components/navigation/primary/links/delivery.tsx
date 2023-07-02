import styled from "@emotion/styled";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "../../utils/box";

const DeliveryContainer = styled('div')({
    display: 'flex',
    alignItems: 'flex-end',
    gap: '6px',
    color: 'white',
    '@media (max-width: 1080px)': {
        alignItems: 'center',
        padding: '0 15px',
        height: '45px',
        backgroundColor: '#37475A',
    }
})

const TextContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 1080px)': {
        flexDirection: 'row',
    }
})

const FirstText = styled('p')({
    color: '#ccc',
    fontSize: '12px',

    '@media (max-width: 1080px)': {
        fontSize: '14px',
        color: '#fff',
    }
})

const SecondText = styled('p')({
    color: '#fff',
    fontWeight: '600',
    fontSize: '14px',
    letterSpacing: '.2px',

    '@media (max-width: 1080px)': {
        fontSize: '14px',
        fontWeight: '500',
    }
})

export default function Delivery({ isScreenSmall, profile }: { isScreenSmall: boolean, profile: any }) {
    const text = profile.surname ?
        ["Livrer à " + profile.surname + (isScreenSmall ? " - " : ""), profile.address.city + " " + profile.address.zip] :
        ["Bonjour", "Entrez votre adresse"];

    return (
        <>
            {!isScreenSmall ? (
                <Box>
                    <DeliveryContainer>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <TextContainer>
                            <FirstText>{text[0]}</FirstText>
                            <SecondText>{text[1]}</SecondText>
                        </TextContainer>
                    </DeliveryContainer>
                </Box>)
                :
                (<DeliveryContainer>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <TextContainer>
                        <FirstText>{text[0]}</FirstText>
                        <SecondText>{text[1]}</SecondText>
                    </TextContainer>
                </DeliveryContainer>)
            }
        </>
    )
}