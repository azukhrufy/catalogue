import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";
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
    const res = await fetch(`http://my-json-server.typicode.com/azukhrufy/cataloguedb/products/${id}`)
    const data = await res.json()
    
    return { props: { data } }
}
