import Layout from '../../components/Layout'
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import Head from 'next/head'
import { DateMonth } from '../../components/Date'
import utilStyles from '../../components/styles/utils.module.css'

export default function Project({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
        <div className={utilStyles.lightText}>
          <b>
            <DateMonth dateString={projectData.date} />
          </b>
        </div>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id)
  return {
    props: {
      postData,
    },
  }
}
