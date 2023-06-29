import styled from "@emotion/styled";
import image from "../../../public/images/cart.png";
import Image from "next/image";
import { StoreContext } from '../../../store/store';
import { useContext } from 'react';

const ShoppingCartContainer = styled('div')({
    position: 'relative',
})

const Number = styled('p')({
    position: 'absolute',
    left: '60%',
    top: '-20%',
    color: '#f08804',
    fontWeight: '600',
    fontSize: '18px',
})

const Cart = styled(Image)({
    margin: '0 -8px 0 0',
})

export default function ShoppingCart() {

    const { state, } = useContext(StoreContext);
    const value = Object.keys(state.basket).length || 0;

    return (
        <ShoppingCartContainer>
            <Number className="number">{value}</Number>
            <Cart className="image" src={image} alt="shopping cart" width={45} height={27} />
        </ShoppingCartContainer>
    );
}