

import Style from './Footer.module.css';

export const Footer = () => {
    return(
        <footer className={Style.footer}>
          <div>
            <ul className={Style.ul}>
              <li className={Style.li}><a href="https://github.com/Felnando2112" className={Style.a}>Github</a></li>
              <li className={Style.li}><a href="https://felnando2112.github.io/Portafolio/" className={Style.a}>Portfolio</a></li>
              <li className={Style.li}><a href="https://www.linkedin.com/in/fernando-avenda%C3%B1o-540152260/" className={Style.a}>LinkedIn</a></li>
              <li className={Style.li}><a href="https://wa.me/584242111400" className={Style.a}>Whatsapp</a></li>
            </ul>
          </div>
          <div>
            <ul className={Style.ul}>
              <li className={Style.li}><a href="/" className={Style.a}>Privacy Policy</a></li>
              <li className={Style.li}><a href="/" className={Style.a}>Terms of Service</a></li>
              <li className={Style.li}><a href="/" className={Style.a}>Cookies Settings</a></li>
            </ul>
          </div>
      </footer>
    )
}