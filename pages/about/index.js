import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/Layout'
import utilStyles from '../../components/styles/utils.module.css'
import styles from '../../components/styles/layout.module.css'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={`${utilStyles.headingLg} ${utilStyles.textCenter}`}>
          About Me
        </h2>
        <div className={styles.descriptionBox}>
          <p className={utilStyles.textCenter}>
            I entered law school in 2011 thinking that I was going to pursue
            law. Fate could not have been stranger...
          </p>
        </div>
      </section>
    </Layout>
  )
}
