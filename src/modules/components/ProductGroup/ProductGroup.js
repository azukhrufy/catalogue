import React from 'react';
import ProductCard from '../../../common/elements/components/cards/ProductCard/ProductCard';
import { products,banner, categories } from '../../../constant/constant';
import CategoryCard from '../../../common/elements/components/cards/CategoryCard/CategoryCard';



export default function ProductGroup () {
    return(
        <div>
            <CategoryCard 
                data = {categories}
            />
            <h3>Our Products</h3>
            <hr />
            <ProductCard
                data = {products}            
            />
        </div>
    )
}



