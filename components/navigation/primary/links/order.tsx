import styled from "@emotion/styled";
import Box from "../../utils/box";

const PrimaryLinksContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    color: 'var(--color-light)',
})

const Text1 = styled('p')({
    fontSize: '12px',
})

const Text2 = styled('p')({
    fontWeight: '600',
    fontSize: '14px',
    letterSpacing: '.2px',
})

export default function Order() {

    return (
        <Box>
            <PrimaryLinksContainer>
                <Text1>Retours</Text1>
                <Text2>et commandes</Text2>
            </PrimaryLinksContainer>
        </Box >
    )
}