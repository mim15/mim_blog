import Link from 'next/link'

import styled from '../styles/components/pagination.module.scss'

export default function Pagination({posts, currentNum, category = null}) {
  const getLists = (posts, currentNum) => {
    const list = []
    for (let i = 0; i < Math.ceil(posts.length / 10); i++) {
      list.push(
        <li key={i + 1}
          className={[styled.item, currentNum === i + 1 && styled.is_active].join(' ')}
        >
          {currentNum === i + 1 ? i + 1 :
            <Link href={category ? `/category/${category}/page/${i + 1}` : `/blog/page/${i + 1}`}>
              <a className={styled.link}>{i + 1}</a>
            </Link>
          }
        </li>
      )
    }
    return list
  }

  const lists = getLists(posts, currentNum)

  return (
    <div className={styled.pagination}>
      <ul className={styled.list}>
        {lists}
      </ul>
    </div>
  )
}

