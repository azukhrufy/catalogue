import React from 'react'

import Image from 'next/image'
import Link from "next/link"
import sty from '../../../../styles/BannerText.module.scss'

export default function RightTextBanner(){
    // https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80
    // https://images.unsplash.com/photo-1533063257173-60b4cda53fad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHN0eWxlfGVufDB8MHwwfHdoaXRlfA%3D%3D&w=1000&q=80
    return (
        <div className={sty.bannerTextContainer}>
            <div className={sty.banner70Container}>
                <div className={sty.imageBannerContainer}>
                    <Image 
                        src="https://images.unsplash.com/photo-1533063257173-60b4cda53fad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHN0eWxlfGVufDB8MHwwfHdoaXRlfA%3D%3D&w=1000&q=80"
                        width="100%"
                        height="50%"
                        layout="responsive"
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className={sty.banner30Container}>
                <div className={sty.textBannerContainer}>
                    <h1>Keep #UpToDate</h1>
                    <p>Dapatkan pilihan terbaik dari produk kami</p>
                    <Link href="/Products">
                        <button className={sty.btn}>
                            See All Product
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
