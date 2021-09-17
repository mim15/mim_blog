import Link from 'next/link'

import styled from '../../styles/components/footer/f_navlinks.module.scss'

export default function FnavLinks() {
  return (
    <>
      <nav className={styled.bl_footerNav}>
        <p className={styled.bl_footerNav_ttl}>Footer Navigation</p>
        <ul className={styled.bl_footerNav_wrapper}>
          <li className={styled.bl_footerNav_item}>
            <Link title="about" href="/about">
              <a className={styled.bl_footerNav_txt}>About</a>
            </Link>
          </li>
          <li className={styled.bl_footerNav_item}>
            <Link title="portfolio" href="/portfolio">
              <a className={styled.bl_footerNav_txt}>Portfolio</a>
            </Link>
          </li>
          <li className={styled.bl_footerNav_item}>
            <Link title="blog" href="/blog">
              <a className={styled.bl_footerNav_txt}>Blog</a>
            </Link>
          </li>
          <li className={styled.bl_footerNav_item}>
            <Link title="webapp" href="/webapp">
              <a className={styled.bl_footerNav_txt}>Webapp</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}