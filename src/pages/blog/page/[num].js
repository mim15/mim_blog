import Head from 'next/head'

import { client } from '../../../libs/contentful'

import Layout from '../../../components/Layout'
import Post from '../../../components/post'
import Pagination from '../../../components/Pagination'

import styled from '../../../styles/pages/blog/page/[num].module.scss'

export default function Paged({ posts, num, allPosts, category }) {
  return (
    <>
      <Head>
      </Head>
      <Layout category={category}>
        <div>
          {posts.length > 0
            ? posts.map((p) => (
                <Post
                  key={p.fields.slug}
                  title={p.fields.title}
                  category={p.fields.category.fields.name}
                  slug={p.fields.slug}
                  createdAt={p.sys.createdAt}
              />
              ))
            : null}
          </div>
        <Pagination posts={allPosts} currentNum={Number(num)} />
      </Layout>
    </>
  )
}

export const getStaticPaths = async () => {
  const posts = await client.getEntries({content_type: "blog"})

  const paths = [];

  for (let i = 0; i <= Math.floor(posts.items.length / 10); i++) {
    paths.push({
      params: {
        num: (i + 1).toString(),
      }
    });
  }

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const posts = await client.getEntries({content_type: 'blog', order: '-sys.createdAt', limit: 10, skip: (params.num - 1) * 10 })
  const allPosts = await client.getEntries({content_type: 'blog'})
  const category = await client.getEntries({content_type: "category"})

  return {
    props: {
      posts: posts.items,
      num: params.num,
      allPosts: allPosts.items,
      category: category.items
    },
  }
}