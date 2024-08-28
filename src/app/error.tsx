"use client"




export default function GlobalError(props: ErrorPageProps){
return(
    <main>
        <h1>Se ha producido un Error!!!</h1>
        <button onClick={props.reset}>Volver a intentar</button>
    </main>
)
}