import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../components/styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.textCenter}>
          Hello, I'm Kenny! I'm a Full Stack Software Developer and a former
          lawyer. Welcome to my site!
        </p>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
