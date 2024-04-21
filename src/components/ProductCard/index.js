import { useContext } from 'react';
import Button from '../Button';
import './index.scss';
import { CartContext } from '../../contexts/cart';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl} = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => {
        addItemToCart(product);
    }  

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt='img' />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
        </div>
    )
};

export default ProductCard