import Link from 'next/link'
import dayjs from 'dayjs'

import styled from '../styles/components/post.module.scss'

export default function Post({ title, slug, category, createdAt }) {
  const day = dayjs(createdAt)

  return (
    <div className={styled.item}>
      <p className={styled.date}>{day.format("YYYY.MM.DD")}</p>
      <div className={styled.main}>
        <Link href={`/blog/${encodeURIComponent(slug)}`}>
          <a className={styled.link}>
            <h2 className={styled.heading}>{title}</h2>
            <p className={styled.category}>{'{'} category: {`"${category}"`} {'}'}</p>
          </a>
        </Link>
      </div>
    </div>
  )
}