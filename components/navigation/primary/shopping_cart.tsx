import styled from "@emotion/styled";
import image from "../../../public/images/cart.png";
import Image from "next/image";
import { StoreContext } from '../../../store/store';
import { useContext } from 'react';

const ShoppingCartContainer = styled('div')({
    position: 'relative',
})

const Number = styled('div')({
    position: 'absolute',
    width: '20px',
    display: 'flex',
    justifyContent: 'center',
    left: '40%',
    top: '-3px',
    color: '#f08804',
    fontWeight: '600',
    fontSize: '16px',
})

const Cart = styled(Image)({
    margin: '0 -7px 0 0',
    transform: 'translateY(10%)',
})

export default function ShoppingCart() {

    const { state, } = useContext(StoreContext);
    const value = Object.keys(state.basket).length || 0;

    return (
        <ShoppingCartContainer>
            <Number className="number">{value}</Number>
            <Cart className="image" src={image} alt="shopping cart" width={40} height={27} />
        </ShoppingCartContainer>
    );
}