import React from 'react'

import Image from 'next/image'
import styles from '../../../../../styles/Home.module.css';
import categorystyle from '../../../../../styles/Category.module.scss'

export default function CategoryCard({data}) {
    return (
        <div className={styles.grid} style={{marginBottom: "2rem"}}>
            {data.map(({id,title,code,image}) => (
                <div key={id} className={categorystyle.card}>
                    <Image 
                        src = {image}
                        width="100%"
                        height="100%"
                        layout="responsive"
                        objectFit="cover"
                        className={categorystyle.imageCategory}
                    />
                    <h3 
                        className={categorystyle.centered}
                        style={{
                            color: 'white'
                        }}
                    >
                        {title}
                    </h3>
                </div>
            ))}
        </div>
    )
}
