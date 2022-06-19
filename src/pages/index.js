import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProductGroup from '../modules/components/ProductGroup/ProductGroup'
import Banner from '../common/elements/components/banner/ProductBanner'
import RightTextBanner from '../common/elements/components/banner/RightTextBanner'
import LeftTextBanner from '../common/elements/components/banner/LeftTextBanner'
import {banner} from '../constant/constant'

export default function Home({data}) {
  return (
    <>
    <Head>
      <title>Catalogue</title>
      <meta name="description" content="Catalogue" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <Banner 
            data = {banner}
          />
          <RightTextBanner />
          <div className={styles.divider} />
          <LeftTextBanner />
          <ProductGroup data = {data} />
        </div>
      </main>
    </div>
    </>
  )
}

export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`http://my-json-server.typicode.com/azukhrufy/prodcatalogue/products/`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
  }

