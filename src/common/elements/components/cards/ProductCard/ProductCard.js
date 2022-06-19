import React from 'react';

import styles from '../../../../../styles/Home.module.css';
import Image from 'next/image'
import Link from "next/link";
import { useState } from "react";

export default function Product({data}) {
    return(
    <div className={styles.grid}>
        {data.map(({id,title,price,images}) => (
            <Link 
                key={id} 
                href={{
                    pathname:"/ProductDetail/[id]",
                    query: {
                        id : id
                    }
                }}
                as={`/ProductDetail/${id}`}
            >
                <div className={styles.card}>
                    <Image 
                        src={images[0]}
                        width="100%"
                        height="100%"
                        layout="responsive"
                        objectFit="cover"
                        style={{
                            overflow: 'hidden',
                        }}
                        />
                    <h4>{title}</h4>
                    <p>{price}</p>
                </div>
            </Link>
        ))}
    </div>
    )
}