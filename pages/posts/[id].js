import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  const { title, id, date } = postData;

  return (
    <Layout>
      {title}
      <br />
      {id}
      <br />
      {date}
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}