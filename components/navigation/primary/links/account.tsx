import styled from "@emotion/styled";
import { useContext } from "react";
import Box from "../../utils/box";
import { StoreContext } from "@/store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faChevronRight, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const LinkContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    whiteSpace: 'nowrap',
    color: 'var(--color-light)',
})

const Text1 = styled('p')({
    fontSize: '12px',
    '@media (max-width: 1080px)': {
        fontSize: '13px',
        fontWeight: '600',
        alignSelf: 'center',
    }
})

const TextContainer = styled('div')({
    display: 'flex',
})

const Text2 = styled('p')({
    fontWeight: '600',
    fontSize: '14px',
    letterSpacing: '.2px',
})

const CaretDown = styled(FontAwesomeIcon)({
    height: '11px',
    color: 'var(--color-light-secondary)',
    marginLeft: '5px',
    alignSelf: 'center',
})

const ChevronLeft = styled(FontAwesomeIcon)({
    height: '8px',
    marginLeft: '3px',
    alignSelf: 'center',
})

const UserIcon = styled(FontAwesomeIcon)({
    height: '24px',
    marginLeft: '5px',
})

const Text1Wrapper = styled('div')({
    display: 'flex',
    '@media (max-width: 400px)': {
        display: 'none',
    }
})

export default function Account({ isScreenSmall }: { isScreenSmall: boolean }) {

    const { state, } = useContext(StoreContext);

    const text1 = state.token ?
        (isScreenSmall ? state.profile.surname : ("Bonjour " + state.profile.surname))
        :
        (isScreenSmall ? "Se connecter" : "Bonjour, Identifiez-vous");

    return (
        <Link href={state.token ? "/account" : "/user/sign-in"}>
            <Box>
                <LinkContainer>
                    <TextContainer>
                        <Text1Wrapper>
                            <Text1>{text1}</Text1>
                            {isScreenSmall && <ChevronLeft icon={faChevronRight} />}
                        </Text1Wrapper>
                        {isScreenSmall && <UserIcon icon={faUser} />}
                    </TextContainer>
                    <TextContainer>
                        <Text2>{isScreenSmall ? "" : "Compte et listes"}</Text2>
                        {!isScreenSmall && <CaretDown icon={faCaretDown} />}
                    </TextContainer>
                </LinkContainer>
            </Box>
        </Link>
    )
}