import Link from 'next/link'
import Date from '../../components/Date'
import utilStyles from '../../components/styles/utils.module.css'
import styles from '../../components/styles/layout.module.css'
import Layout from '../../components/Layout'
import Head from 'next/head'
import { getSortedPostsData } from '../../lib/posts'

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
        <div className={styles.descriptionBox}>
          <p className={utilStyles.textCenter}>
            Here are articles written by me.
          </p>
        </div>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/blog/[id]" as={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  console.log(allPostsData)
  return {
    props: {
      allPostsData,
    },
  }
}
