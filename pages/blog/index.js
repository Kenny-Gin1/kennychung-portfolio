import Link from 'next/link'
import { DateDay } from '../../components/Date'
import utilStyles from '../../components/styles/utils.module.css'
import styles from '../../components/styles/layout.module.css'
import Layout from '../../components/Layout'
import Head from 'next/head'
//import { getSortedPostsData } from '../../lib/posts'
import BlogCard from '../../components/BlogCard'
import fetch from 'node-fetch'

export default function Blog({ posts }) {
  console.log(posts)
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
          {posts.map(({ id, pubDate, title, link, description }) => (
            <li className={`${utilStyles.listItem} `} key={id}>
              <BlogCard
                id={id}
                date={pubDate}
                title={title}
                body={description}
              />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

/*
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
*/

export async function getStaticProps() {
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kenny.chung',
    {
      headers: { Accept: 'application/json' },
    },
  )
  const data = await res.json()
  const posts = data.items.filter((item) => item.categories.length > 0)
  return {
    props: {
      posts,
    },
  }
}
