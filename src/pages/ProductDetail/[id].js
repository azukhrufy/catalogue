import React from 'react'
import Details from "../../common/elements/components/detalis/Details";


export default function ProductDetail({data}) {
    return (
        <>
            <div>
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
