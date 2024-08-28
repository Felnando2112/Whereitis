import { Map } from "app/app/components/findit/Map/Map";


interface CategoryProps {
    params: {
        Categories: string[]
    }
}


export default function Findit(props: CategoryProps){
    const {Categories} = props.params;
    return(
    <>
    <Map/>
    </>
    )
}