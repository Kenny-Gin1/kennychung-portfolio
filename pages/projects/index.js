import Link from 'next/link'
import Layout from '../../components/Layout'
import utilStyles from '../../components/styles/utils.module.css'
import styles from '../../components/styles/layout.module.css'
import Head from 'next/head'
import ProjectCard from '../../components/ProjectCard'
import { makeStyles } from '@material-ui/core/styles'
import fetch from 'node-fetch'
import Grow from '@material-ui/core/Grow'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '55vw',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  description: {
    marginBottom: '5rem',
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
        <h2 className={`${utilStyles.headingLg} ${utilStyles.textCenter} `}>
          Projects
        </h2>
        <p className={`${utilStyles.textCenter} ${classes.description}`}>
          These are the projects I have been working on.
        </p>
        <div className={classes.root}>
          {data.map(({ description, name, created_at, id, html_url }) => (
            <ProjectCard
              body={description}
              heading={name}
              subheader={created_at}
              key={id}
              url={html_url}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/users/Kenny-Gin1/repos', {
    headers: { Accept: 'application/vnd.github.mercy-preview+jso' },
  })
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}
