import { useContext } from 'react';
import Button from '../Button';
import CartItem from '../CartItem';
import './index.scss';
import { CartContext } from '../../contexts/cart';
import { useNavigate } from 'react-router-dom';

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => (<CartItem cartItem={item}/>))}
            </div>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown;