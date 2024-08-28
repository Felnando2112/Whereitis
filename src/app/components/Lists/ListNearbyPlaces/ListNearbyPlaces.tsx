import { ListItem } from "../ListItem/ListItem";
import Style from './ListNearbyPlaces.module.css';


interface PlaceListProps {
   places: PlaceType[]
}

export const ListNearbyPlaces = async ({places}: PlaceListProps) => {
  


   return(
   <section>
      {places ? 
        <div className={Style.div}>
         {places.map((place) => {
           return <ListItem key={place.id} place={place}/>
         })}
        </div>
    : null}
   </section>
   )
}