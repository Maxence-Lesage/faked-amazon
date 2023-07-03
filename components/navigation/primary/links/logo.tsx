import styled from "@emotion/styled";
import Box from "../../utils/box";
import Image from "next/image";

const StyledImage = styled(Image)({
    height: '100%',
    width: 'auto',
})

export default function Logo() {
    return (
        <Box>
            <StyledImage src="/images/amazon.png" alt="amazon.fr" width={170} height={45} />
        </Box>
    )
}