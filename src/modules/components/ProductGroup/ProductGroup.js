import React from 'react';
import { Section } from '../../../styles/GlobalComponents';
import styles from '../../../styles/Home.module.css';
import Product from '../../../common/elements/components/cards/ProductCard/ProductCard';
import Banner from '../../../common/elements/components/banner/ProductBanner';
import { products,banner } from '../../../constant/constant';



export default function ProductGroup () {
    return(
        <div>
            <Banner 
                data = {banner}
            />
            <Product
                data = {products}            
            />
        </div>
    )
}



