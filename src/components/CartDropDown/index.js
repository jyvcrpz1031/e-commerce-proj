import { useContext } from 'react';
import Button from '../Button';
import CartItem from '../CartItem';
import './index.scss';
import { CartContext } from '../../contexts/cart';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => (<CartItem cartItem={item}/>))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;