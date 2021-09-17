import styled from '../../styles/components/header/menuToggle.module.scss'

export default function Hamburger({ isOpen }) {
  return (
    <>
      <div className={styled.ly_menuToggle_btn} >
        <div className={styled.bl_menuToggle_btn1} style={{transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'}} />
        <div className={styled.bl_menuToggle_btn2} style={{transform: isOpen ? 'translateX(-100%)' : 'translateX(0)', opacity: isOpen ? 0 : 1}} />
        <div className={styled.bl_menuToggle_btn3} style={{transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)'}} />
      </div>
    </>
  )
}