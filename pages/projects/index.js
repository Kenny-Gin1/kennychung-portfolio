import Link from 'next/link'
import Layout from '../../components/Layout'
import utilStyles from '../../components/styles/utils.module.css'
import Head from 'next/head'
import ProjectCard from './projectCard'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
}))

export default function Projects({ data }) {
  const classes = useStyles()
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <div className={classes.root}>
          <ProjectCard />
          <ProjectCard />
        </div>
        {/*<ul className={utilStyles.list}>
          {data.map(({ id, date, title }) => (
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
          </ul>*/}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/Kenny-Gin1/repos')
  const data = await res.json()
  console.log(data)

  return {
    props: {
      data,
    },
  }
}
