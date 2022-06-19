import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProductGroup from '../modules/components/ProductGroup/ProductGroup'
import Banner from '../common/elements/components/banner/ProductBanner'
import RightTextBanner from '../common/elements/components/banner/RightTextBanner'
import LeftTextBanner from '../common/elements/components/banner/LeftTextBanner'
import {banner} from '../constant/constant'
import ProductCard from '../common/elements/components/cards/ProductCard/ProductCard'

export default function Home({data}) {
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
          <RightTextBanner />
          <LeftTextBanner />
          <ProductGroup data = {data} />
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`http://my-json-server.typicode.com/azukhrufy/prodcatalogue/products/`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
  }

