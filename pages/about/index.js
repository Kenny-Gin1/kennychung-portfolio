import Head from 'next/head'
import Layout from '../../components/Layout'
import utilStyles from '../../components/styles/utils.module.css'
import AboutCard from '../../components/AboutCard'

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
      </section>
      <section>
        <AboutCard />
      </section>
    </Layout>
  )
}
