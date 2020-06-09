import Head from 'next/head'
import styles from './styles/layout.module.css'
import Link from 'next/link'
import Footer from './Footer'
import Sidebar from './SideBar'

const name = 'Kenny Chung'
export const siteTitle = "Kenny's Portfolio"

export default function Layout({ children, home }) {
  return (
    <div className={styles.fullContainer}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portfolio" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Sidebar />
      <div>
        <main>{children} </main>

        {/*!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )*/}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
