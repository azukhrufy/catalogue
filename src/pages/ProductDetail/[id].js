import React, { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import Details from "../../common/elements/components/detalis/Details";


export default function ProductDetail(props) {

    return (
        <>
            <div>
                <Details data = {props}/>
            </div>
        </>
    )
}

export const getServerSideProps = (context) => {
    const { id } = context.query
    console.log(context.query)

    return {
        props:{
            id: id,
        }
    }
}
