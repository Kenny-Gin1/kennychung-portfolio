import utilStyles from '../../components/styles/utils.module.css'
import styles from '../../components/styles/layout.module.css'
import Layout from '../../components/Layout'
import Head from 'next/head'
import { getSortedPostsData } from '../../lib/posts'
import BlogCard from '../../components/BlogCard'

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>{' '}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={`${utilStyles.headingLg} ${utilStyles.textCenter}`}>
          Blog
        </h2>
        <p className={utilStyles.textCenter}>
          Here are articles written by me.
        </p>
        <ul className={`${utilStyles.list} ${styles.blogContainer}`}>
          {allPostsData.map(({ id, date, title, body }) => (
            <li className={`${utilStyles.listItem} `} key={id}>
              <BlogCard id={id} date={date} title={title} body={body} />
              {/*<small className={utilStyles.lightText}>
                    <DateDay dateString={date} />
          </small>*/}
            </li>
          ))}
        </ul>
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
