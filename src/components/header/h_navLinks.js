import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { useState } from 'react'

import Hamburger from './menuToggle'

import styled from '../../styles/components/header/h_navlinks.module.scss'

export default function HnavLinks() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }
  return (
    <>
      <div className={styled.ly_menuToggle} onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
      <ul className={styled.ly_headerNav_wrapper} >
        <li className={styled.bl_headerNav_item}>
          <Link title="about" href="/about">
            <a className={styled.bl_headerNav_txt}>About</a>
          </Link>
        </li>
        <li className={styled.bl_headerNav_item}>
          <Link title="portfolio" href="/portfolio">
            <a className={styled.bl_headerNav_txt}>Portfolio</a>
          </Link>
        </li>
        <li className={styled.bl_headerNav_item}>
          <Link title="blog" href="/blog">
            <a className={styled.bl_headerNav_txt}>Blog</a>
          </Link>
        </li>
        <li className={styled.bl_headerNav_item}>
          <Link title="webapp" href="/webapp">
            <a className={styled.bl_headerNav_txt}>Webapp</a>
          </Link>
        </li>
        <li className={styled.ly_headerNav_sns}>
          <div className={styled.ly_headerNav_insta}>
            <FontAwesomeIcon className={styled.bl_headerNav_insta} icon={faInstagram} />
            <a className={styled.bl_headerNav_snsTxt} href="https://www.instagram.com/mim01_ins/">mim01_ins</a>
          </div>
          <div className={styled.ly_headerNav_twitter}>
            <FontAwesomeIcon className={styled.bl_headerNav_twitter} icon={faTwitter} />
            <a className={styled.bl_headerNav_snsTxt} href="https://twitter.com/mim01_tweet/">mim01_tweet</a>
          </div>
        </li>
      </ul>
      <style jsx>
      {`
        @media (max-width: 767px){
          .ly_menuToggle {
            display: fixed;
          }
          ul {
            display: ${hamburgerOpen ? 'block' : 'none'};
            position: fixed;
            left: 0; top: 0;
            width: 100%; height: 100%;
            background-color: #EEF0F4;
            z-index: 5;
            overflow: hidden;
          }
        }
      `}
      </style>
    </>
  )
}