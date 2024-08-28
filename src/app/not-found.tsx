import Link from "next/link";
import Style from './not-found.module.css'


export default function NotFound(){
    return(
        <main className={Style.main}>
            <h1 className={Style.h1}>No se ha conseguido la pagina que busca</h1>
            <Link href="/" className={Style.Link}>Vuelve al Home Page</Link>
        </main>
    )
    }