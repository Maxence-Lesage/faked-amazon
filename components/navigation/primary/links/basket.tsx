import styled from "@emotion/styled";
import Box from "../../utils/box";
import ShoppingCart from "../shopping_cart";

const PrimaryLinksContainer = styled('div')({
    display: 'flex',
    alignItems: 'flex-end',
    gap: '5px',
    whiteSpace: 'nowrap',
    color: 'var(--color-light)',
})

const Text1 = styled('p')({
    color: 'var(--color-light-secondary)',
    fontSize: '12px',
})

const Text2 = styled('p')({
    fontWeight: '600',
    fontSize: '14px',
    letterSpacing: '.2px',
})

export default function Basket({ isScreenSmall }: { isScreenSmall: boolean }) {

    return (
        <Box>
            <PrimaryLinksContainer>
                <div>
                    <ShoppingCart />
                </div>
                <div>
                    <Text1></Text1>
                    <Text2>{isScreenSmall ? "" : "Panier"}</Text2>
                </div>
            </PrimaryLinksContainer>
        </Box>
    )
}