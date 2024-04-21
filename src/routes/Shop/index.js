import { useContext } from "react";
import './index.scss';


import { ProductContext } from "../../contexts/products";
import ProductCard from "../../components/ProductCard";

const Shop = () => {
    const { products } = useContext(ProductContext);
    return (
        <div className="products-container">
            {products.map(data => {
                return (
                    <ProductCard product={data} />
                );
            })}
        </div>
    )
}

export default Shop;   