import Head from 'next/head'
import { client } from '../../libs/contentful'

import Layout from '../../components/Layout'
import Pagination from '../../components/Pagination'
import Post from '../../components/post'

import styled from '../../styles/pages/blog/blog.module.scss'

export default function Blog({ posts, category }) {
  return (
    <>
        <div>
          {posts.length > 0
            ? posts.map((p, index) => (
                index < 10 && <Post
                  key={p.fields.slug}
                  title={p.fields.title}
                  category={p.fields.category.fields.name}
                  slug={p.fields.slug}
                  createdAt={p.sys.createdAt}
                />
              ))
            : null}
          </div>
          <Pagination posts={posts} currentNum={1} />
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const entries = await client.getEntries({content_type: 'blog', order: '-sys.createdAt'})
  const category = await client.getEntries({content_type: "category"});

  return {
    props: {
      posts: entries.items,
      category: category.items
    },
  }
}