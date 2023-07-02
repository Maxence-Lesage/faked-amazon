import Box from "../../utils/box";
import PrimaryLinks from "../primary_links";
import ShoppingCart from "../shopping_cart";

export default function Basket({ isScreenSmall }: { isScreenSmall: boolean }) {

    return (
        <Box>
            <PrimaryLinks text1="" text2={isScreenSmall ? "" : "Panier"} special={<ShoppingCart />} />
        </Box>
    )
}