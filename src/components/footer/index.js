import Flogo from './logo'
import FnavLinks from './f_navLinks'
import Copyright from './copyright'

import styled from '../../styles/components/footer/footer.module.scss'

export default function Footer() {
  return (
    <>
      <footer className={styled.ly_footer}>
        <div className={styled.ly_footer_inner}>
          <div className={styled.ly_footercont_l}>
            <Flogo />
            <Copyright />
          </div>
          <div className={styled.ly_footercont_r}>
            <FnavLinks />
            <div className={styled.ly_footercont_form}>
              <div className={styled.bl_footer_social}>
                <a className={styled.bl_footer_snsTxt} href="https://www.instagram.com/mim01_ins/">mim01_ins</a>
                <a className={styled.bl_footer_snsTxt} href="https://twitter.com/mim01_tweet/">mim01_tweet</a>
              </div>
              <div>
                <label>Send Message for me</label>
                <input type="email" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
