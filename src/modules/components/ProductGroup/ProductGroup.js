import React from 'react';
import Link from "next/link";
import ProductCard from '../../../common/elements/components/cards/ProductCard/ProductCard';
import { categories } from '../../../constant/constant';
import CategoryCard from '../../../common/elements/components/cards/CategoryCard/CategoryCard';
import styles from '../../../styles/Home.module.css'


function ProductGroup ({data}) {
    return(
        <div style={{marginBottom: "4rem"}}>
            <div className={styles.textdivider}>
                <h3>Categories</h3>
            </div>
            <hr />
            <br />
            <CategoryCard 
                data = {categories}
            />
            <div className={styles.textdivider}>
                <h3>Our Products</h3>
                <Link
                    href="/Products"
                >
                    <a style={{marginTop:"1.5rem"}}>See More</a>
                </Link>
            </div>
            <hr />
            <ProductCard
                data = {data}            
            />
        </div>
    )
}


export default ProductGroup


