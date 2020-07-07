import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../components/styles/utils.module.css'
import styles from '../components/styles/layout.module.css'
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
        <div className={styles.descriptionBox}>
          <p className={utilStyles.textCenter}>
            Hello, I'm Kenny! I'm a Full Stack Software Developer and a former
            lawyer. Welcome to my site!
          </p>
        </div>
      </section>
    </Layout>
  )
}
