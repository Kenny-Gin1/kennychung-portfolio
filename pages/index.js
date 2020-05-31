import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import utilStyles from '../components/styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export default function Home( {allPostsData}) {
  return (
    <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
        <section className={utilStyles.headingMd}>
        <p>Hello, I'm Kenny! I'm a Full Stack Software Developer and a former lawyer. Welcome to my site!</p>
        <p>
       Checkout my pages below!
        </p>
        <p>
        Go to<Link href="/blog"><a> Blog</a></Link><br/>
          Go to <Link href="/about"><a> About Me</a></Link><br/>
          Go to <Link href="/projects"><a> Projects</a></Link><br/>
          Go to <Link href="/contact"><a> Contact Me</a></Link><br/>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
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
      allPostsData
    }
  }
}