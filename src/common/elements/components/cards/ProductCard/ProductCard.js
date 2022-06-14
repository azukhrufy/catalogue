import React from 'react';

import styles from '../../../../../styles/Home.module.css';
import Image from 'next/image'

export default function Product({data}) {
    return(
    <div className={styles.grid}>
        {data.map(({id,title,description,price,image}) => (
            <div key={id} className={styles.card}>
                <Image 
                    src={image}
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
        ))}
    </div>
    )
}