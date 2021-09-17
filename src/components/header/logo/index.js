import Link from 'next/link'
import mimLogoImg from '../../../public/Logo/logo.svg'
import styled from '../../../styles/components/header/logo/hlogo.module.scss'

export default function HLogo() {
  return (
    <>
      <div className={styled.ly_headerConts_logo}>
        <Link title="index" href="/">
          <a className={styled.bl_headerConts_link}><img className={styled.bl_headerConts_logo} src={mimLogoImg.src} alt=""/></a>
        </Link>
        <h2 className={styled.bl_headerConts_txt}>mim</h2>
      </div>
    </>
  ) 
}