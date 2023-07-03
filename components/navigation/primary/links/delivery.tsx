import styled from "@emotion/styled";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "../../utils/box";

const DeliveryContainer = styled('div')({
    display: 'flex',
    alignItems: 'flex-end',
    gap: '6px',
    color: 'var(--color-light)',
    '@media (max-width: 1080px)': {
        alignItems: 'center',
        width: '100%',
        padding: '0 15px',
        height: '45px',
        backgroundColor: 'var(--color-background-nav-light)',
    }
})

const TextContainer = styled('div')({
    width: '94%',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 1080px)': {
        flexDirection: 'row',
    }
})

const FirstText = styled('p')({
    color: 'var(--color-light-secondary)',
    fontSize: '12px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',

    '@media (max-width: 1080px)': {
        fontSize: '14px',
        color: 'var(--color-light)',
    }
})

const SecondText = styled('p')({
    fontWeight: '600',
    fontSize: '14px',
    letterSpacing: '.2px',

    '@media (max-width: 1080px)': {
        fontSize: '14px',
        fontWeight: '500',
    }
})

export default function Delivery({ isScreenSmall, profile }: { isScreenSmall: boolean, profile: any }) {

    const text = ["Bonjour", "Entrez votre adresse"];

    if (isScreenSmall) {
        text[0] = "Sélectionnez votre adresse de livraison"
        text[1] = ""
    }
    if (profile.surname) {
        text[0] = "Livrer à " + profile.surname
        text[1] = profile.address.city + " " + profile.address.zip
    }

    return (
        <>
            {!isScreenSmall ? (
                <Box>
                    <DeliveryContainer>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <TextContainer>
                            <FirstText>
                                {text[0]}
                            </FirstText>
                            <SecondText>{text[1]}</SecondText>
                        </TextContainer>
                    </DeliveryContainer>
                </Box>)
                :
                (<DeliveryContainer>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <TextContainer>
                        <FirstText>
                            {text[0]}
                        </FirstText>
                        <SecondText>
                            {profile.surname ? <span>&nbsp;-&nbsp;</span> : null}
                            {text[1]}
                        </SecondText>
                    </TextContainer>
                </DeliveryContainer>)
            }
        </>
    )
}