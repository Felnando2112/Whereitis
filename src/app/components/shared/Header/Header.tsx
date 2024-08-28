import Link from 'next/link';
import Style from './Header.module.css';



export const Header = () => {
    return(
   <header>
        <nav className={Style.nav}>
        <img  alt="LOGO" className={Style.img}/>
        <ul className={Style.ul}>
          <li className={Style.li}><Link  href="/" className={Style.Link2}>Home</Link></li>
        </ul>
        </nav>
   </header>
    )
}