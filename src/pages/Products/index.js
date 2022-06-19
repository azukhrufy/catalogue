import React from 'react'

import styles from '../../styles/Home.module.css'
import {products} from '../../constant/constant'
import ProductCard from '../../common/elements/components/cards/ProductCard/ProductCard'

export default function index() {
    return (
        <>
            <div className={styles.container}>
                <main className={styles.main}>
                <h1 className={styles.title}>
                    Our Products
                </h1>
                <p className={styles.description}>
                    Nikmati pilihan produk terbaik kami hanya di Azukhrufy Store
                </p>
                    <ProductCard
                        data = {products}            
                    />
                </main>
            </div>
        </>
    )
}
