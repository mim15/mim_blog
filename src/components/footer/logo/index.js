import Footerimage from '../../../public/Logo/logo.svg'
import styled from '../../../styles/components/footer/logo/flogo.module.scss'

export default function Flogo() {
  return (
    <>
      <div className={styled.ly_footerConts_logo}>
        <img className={styled.bl_footerConts_logo} src={Footerimage.src} alt=""/>
      </div>
    </>
  ) 
}