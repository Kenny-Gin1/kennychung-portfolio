import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import { DateDay } from '../../components/Date'
import utilStyles from '../../components/styles/utils.module.css'
import styles from '../../components/styles/layout.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <b>
            <DateDay dateString={postData.date} />
          </b>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          className={styles.blogContainer}
        />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
