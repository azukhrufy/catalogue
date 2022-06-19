import React from 'react'

import Image from 'next/image'
import Link from "next/link"
import sty from '../../../../styles/BannerText.module.scss'

export default function LeftTextBanner(){
    return (
        <div className={sty.bannerTextContainer}>
            <div className={sty.banner30Container}>
                <div className={sty.textBannerContainer}>
                    <h1>Tetap Stylish</h1>
                    <p>Dengan ribuan Pilihan produk terbaik kami</p>
                    <Link href="/Products">
                        <button className={sty.btn}>
                            See All Product
                        </button>
                    </Link>
                </div>
            </div>
            <div className={sty.banner70Container}>
                <div className={sty.imageBannerContainer}>
                    <Image 
                        src="https://images.unsplash.com/photo-1617968763460-48f12e7351d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDk1fFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
                        width="100%"
                        height="50%"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    )
}
