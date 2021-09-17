import HLogo from './logo'
import HnavLinks from './h_navLinks'

import styled from '../../styles/components/header/header.module.scss'

export default function Header() {

  return (
    <>
      <header className={styled.ly_header}>
        <div className={styled.ly_header_inner}>
            <HLogo />
            <HnavLinks />
        </div>
      </header>
    </>
  )
}