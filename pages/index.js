import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../components/styles/utils.module.css'
import styles from '../components/styles/layout.module.css'
import HomeCard from '../components/HomeCard'
import ContactMeCard from '../components/ContactMeCard'
import HeaderImage from '../components/HeaderImage'
//import { getSortedPostsData } from '../lib/posts'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={`${utilStyles.headingLg} ${utilStyles.textCenter}`}>
          Home
        </h2>

        <div className={styles.boxCenter}>
          <HomeCard />
        </div>
      </section>
      <section>
        <div className={styles.boxCenter}>
          <ContactMeCard />
        </div>
      </section>
    </Layout>
  )
}
