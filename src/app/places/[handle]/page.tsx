import { PlacesView } from "app/app/components/places/placesView"
import { getNearbyPlacesIndividual } from "app/app/services/google_maps_api"

interface CategoryProps {
    params: {
        handle: string,
    },
    searchParams: {
        id: string
    }
}



export default async function Categories(props : CategoryProps){
    const {id} = props.searchParams

    const place = await getNearbyPlacesIndividual(id);


    return(
    <PlacesView place={place}/>
    )
}