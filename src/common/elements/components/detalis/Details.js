import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../../../../styles/Home.module.css';
import sty from '../../../../styles/Details.module.scss';

export default function Details({data}) {
    console.log(data.size[0])
    const [size,setSize] = useState(data.size[0].name)
    const [stock,setStock] = useState(data.size[0].stock)
    const [price,setPrice] = useState(data.size[0].price)
    const [image,setImage] = useState(data.images[0])
    const [imageActive, setImageActive] = useState(data.images[0])
    const toggleImageActive = (i) => {
        setImageActive(i);
    }
    const [isActive, setIsActive] = useState(data.size[0].name);
    const toggleSizeActive = (id) => {
        setIsActive(id);
    };
    return (
        <>
            <div className={styles.container}>
                <div className={sty.detailsTop}>
                    <div className={sty.flexItemLeft}>
                        <div className={sty.imageContainer}>
                            <Image 
                                width="100%"
                                height="100%"
                                layout="responsive"
                                objectFit="contain"
                                src={image}
                            />
                        </div>
                        <div className={sty.variantContainer}>
                            {data.images.map((img,i) => (
                                <div 
                                    key={i} 
                                    onClick={() => {
                                        setImage(data.images[i]);
                                        toggleImageActive(i);
                                    }}
                                    className={imageActive === i ? sty.miniImageContainerActive : sty.miniImageContainer}
                                    >
                                    <Image 
                                        width="100%"
                                        height="100%"
                                        layout="responsive"
                                        objectFit="contain"
                                        src={img}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={sty.flexItemRight}>
                        <h2 style={{margin: "0"}}>{data.title}</h2>
                        <div className={sty.rate}>
                            <input type="radio" id="star5" name="rate" value="5" />
                            <label htmlFor="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" value="4" />
                            <label htmlFor="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3" />
                            <label htmlFor="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2" />
                            <label htmlFor="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1" />
                            <label htmlFor="star1" title="text">1 star</label>
                        </div>
                        <br />
                        <br />
                        <h3 style={{margin: "0 2"}}>IDR {price}</h3>
                        <p>Stok : {stock} </p>
                        <p>Size : {size}</p>
                        <div className={sty.sizeContainer}>
                            {data.size.map(({id,name}) => (
                            <div 
                                key={id}
                                onClick={() => {
                                    setSize(data.size[id].name);
                                    setStock(data.size[id].stock);
                                    setPrice(data.size[id].price)
                                    toggleSizeActive(id);
                                }}
                                className={isActive === id ? sty.sizeCircleActive : sty.sizeCircle}
                            >
                                <label>{name}</label>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={sty.detailsBottom}>
                    <hr />
                    <div className={sty.descContainer}>
                        <h3>Details</h3>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
