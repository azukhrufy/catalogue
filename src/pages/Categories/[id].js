import React from 'react'

import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import ProductCard from '../../common/elements/components/cards/ProductCard/ProductCard'

export default function index({data}) {
    return (
        <>
            <Head>
                    <title>{data.name}</title>
                    <meta name="description" content="Catalogue" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            <div className={styles.container}>
                <main className={styles.main}>
                <h1 className={styles.title}>
                    {data.name}
                </h1>
                <p className={styles.description}>
                    Nikmati pilihan produk {data.name} terbaik kami hanya di Azukhrufy Store
                </p>
                    <ProductCard
                        data = {data.products}            
                    />
                </main>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    const { id } = context.query
    const res = await fetch(`http://my-json-server.typicode.com/azukhrufy/cataloguecateg/categories/${id}`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}
