import React from 'react'
import Head from 'next/head'
import Details from "../../common/elements/components/detalis/Details";


export default function ProductDetail({data}) {
    return (
        <>
            <div>
                <Head>
                    <title>{data.title}</title>
                    <meta name="description" content="Catalogue" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Details data = {data}/>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query
    const res = await fetch(`http://my-json-server.typicode.com/azukhrufy/prodcatalogue/products/${id}`)
    const data = await res.json()
    
    return { props: { data } }
}
