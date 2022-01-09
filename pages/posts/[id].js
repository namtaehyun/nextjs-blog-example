import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import Head from 'next/head';

export default function Post({ postData }) {
  const { title, id, date } = postData;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      {title}
      <br />
      {id}
      <br />
      {<Date dateString={date}></Date>}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
