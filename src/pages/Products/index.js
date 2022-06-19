import React from 'react'

import styles from '../../styles/Home.module.css'
import ProductCard from '../../common/elements/components/cards/ProductCard/ProductCard'

export default function index({data}) {
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
                            data = {data}            
                        />
                </main>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    const res = await fetch(`http://my-json-server.typicode.com/azukhrufy/prodcatalogue/products/`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}
