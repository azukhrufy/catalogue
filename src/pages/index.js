import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProductGroup from '../modules/components/ProductGroup/ProductGroup'
import Banner from '../common/elements/components/banner/ProductBanner'
import {banner} from '../constant/constant'
import ProductCard from '../common/elements/components/cards/ProductCard/ProductCard'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Catalogue</title>
        <meta name="description" content="Catalogue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <Banner 
            data = {banner}
          />
          <ProductGroup />
        </div>
      </main>
    </div>
  )
}
