// import tag
import Link from 'next/link'

// import library
import dayjs from 'dayjs'
import { client } from '../../libs/contentful'

// import components
import Layout from '../../components/layout'
import styled from '../../styles/pages/[slug].module.scss'


export default function Blog({ post, category, slug }) {
  const day = dayjs(post.sys.createdAt);

  return (
    <>
      <Layout category={category}>
        <div className={styled.wrap}>
            <p className={styled.date}>{day.format("YYYY.MM.DD")}</p>
            <div className={styled.main}>
                <h1 className={styled.heading}>{post.fields.title}</h1>
                <p className={styled.category}>{'{'} category: {`"${post.fields.category.fields.name}"`} {'}'}</p>
                <div className={styled.share}>
                </div>
                <div className={styled.body} dangerouslySetInnerHTML={{ __html: post.fields.body}} />
                <div className={styled.back}><Link href="/"><a className={styled.backlink}>BackToIndex</a></Link></div>
            </div>
        </div>
      </Layout>
    </>
  )
}

export const getStaticPaths = async () => {
  const posts = await client.getEntries({content_type: "blogPost"})

  const paths = posts.items.map((post) => ({
    params: {
      slug: post.fields.slug.toString(),
    },
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const post = await client.getEntries({content_type: "blog", "fields.slug": params.slug})
  const category = await client.getEntries({content_type: "category"})

  return {
    props: {
      post: post.items[0],
      category: category.items,
      slug: params.slug
    },
  }
}
