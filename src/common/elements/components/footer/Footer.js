import React from 'react'
import styles from '../../../../styles/Home.module.css';
import Image from 'next/image'
import sty from '../../../../styles/BannerText.module.scss'


export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={sty.banner30Container}>
                <div style={{
                    paddingLeft: "15%"
                }}>
                    <h4>About Us</h4>
                    <a
                    href="https://azukhrufy-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Portfolio
                    </a>
                </div>
            </div>
            <div className={sty.banner30Container}>
            <div style={{
                    paddingLeft: "15%"
                }}>
                    <h4>More Info</h4>
                    <a
                    href="mailto:anandazukhruf@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    anandazukhruf@gmail.com
                    </a>
                </div>
            </div>
            <div className={sty.banner30Container}>
            <div style={{
                    paddingLeft: "15%"
                }}>
                    <h4>Social Media</h4>
                    <a
                    href="https://www.instagram.com/azukhrufy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Instagram
                    </a>
                </div>
            </div>
            {/* <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
            </a> */}
        </div>
    )
}
