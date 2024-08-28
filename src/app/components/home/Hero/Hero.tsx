import Style from './Hero.module.css';
import Link from 'next/link';


export const Hero = () => {
    return(
    <section className={Style.section}>
        <h1 className={Style.h1}>Tell me what you wanna do, and i lead you to the best places</h1> 
        <Link href='/findit' className={Style.Link}>Get Started</Link>
    </section>
    )
}