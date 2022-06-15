import React from 'react';
import { Section } from '../../../styles/GlobalComponents';
import styles from '../../../styles/Home.module.css';
import ProductCard from '../../../common/elements/components/cards/ProductCard/ProductCard';
import Banner from '../../../common/elements/components/banner/ProductBanner';
import { products,banner, categories } from '../../../constant/constant';
import CategoryCard from '../../../common/elements/components/cards/CategoryCard/CategoryCard';



export default function ProductGroup () {
    return(
        <div>
            <Banner 
                data = {banner}
            />
            <CategoryCard 
                data = {categories}
            />
            <ProductCard
                data = {products}            
            />
        </div>
    )
}



