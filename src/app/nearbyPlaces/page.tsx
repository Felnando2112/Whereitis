
import Link from "next/link";
import { ListNearbyPlaces } from "app/app/components/Lists/ListNearbyPlaces/ListNearbyPlaces";
import { getNearbyPlaces, getNearbyPlacesAutomotive, getNearbyPlacesBusiness, getNearbyPlacesCulture, getNearbyPlacesEducation, getNearbyPlacesEntertainment, getNearbyPlacesFinance, getNearbyPlacesFood, getNearbyPlacesGovernment, getNearbyPlacesHealth, getNearbyPlacesLodging, getNearbyPlacesServices, getNearbyPlacesShopping, getNearbyPlacesSports, getNearbyPlacesTransportation, getNearbyPlacesWorship } from "app/app/services/google_maps_api";
import Style from './page.module.css';


interface CategoryProps {
    searchParams: {
        lat: number,
        lon: number
        type?: string
    }
}



export default async function Category(props : CategoryProps){

    const {type} = props.searchParams;
    var {lat} = props.searchParams;
    var {lon} = props.searchParams;

   var places: PlaceType[] = [];


   
        switch(type){
            case 'Automotive':
                places = await getNearbyPlacesAutomotive(lat,lon);
                break;
            case 'Business':
                places = await getNearbyPlacesBusiness(lat,lon);
                break;
            case 'Culture':
                places = await getNearbyPlacesCulture(lat,lon);
                break;
            case 'Education':
                places = await getNearbyPlacesEducation(lat,lon);
                break;
            case 'Entertaiment':
                places = await getNearbyPlacesEntertainment(lat,lon);
                break;
            case 'Finance':
                places = await getNearbyPlacesFinance(lat,lon);
                break;
            case 'Food':
                places = await getNearbyPlacesFood(lat,lon);
                break;
            case 'Government':
                places = await getNearbyPlacesGovernment(lat,lon);
                break;
            case 'Health':
                places = await getNearbyPlacesHealth(lat,lon);
                break;
            case 'Lodging':
                places = await getNearbyPlacesLodging(lat,lon);
                break;
            case 'Worship':
                places = await getNearbyPlacesWorship(lat,lon);
                break;
            case 'Services':
                places = await getNearbyPlacesServices(lat,lon);
                break;
            case 'Shopping':
                places = await getNearbyPlacesShopping(lat,lon);
                break;
            case 'Sports':
                places = await getNearbyPlacesSports(lat,lon);
                break;
            case 'Transportation':
                places = await getNearbyPlacesTransportation(lat,lon);
                break;
            default:
                places = await getNearbyPlaces(lat,lon);
                break;
        }
    
    

    return(
    <>
    <nav className={Style.Nav}>
    <Link href={`/nearbyPlaces?lat=${lat}&lon=${lon}`} className={Style.Link}>All</Link>
    <Link href={`/nearbyPlaces?type=Automotive&lat=${lat}&lon=${lon}`} className={Style.Link}>Automotive</Link>
    <Link href={`/nearbyPlaces?type=Business&lat=${lat}&lon=${lon}`} className={Style.Link}>Business</Link>
    <Link href={`/nearbyPlaces?type=Culture&lat=${lat}&lon=${lon}`} className={Style.Link}>Culture</Link>
    <Link href={`/nearbyPlaces?type=Education&lat=${lat}&lon=${lon}`} className={Style.Link}>Education</Link>
    <Link href={`/nearbyPlaces?type=Entertaiment&lat=${lat}&lon=${lon}`} className={Style.Link}>Entertainment and Recreation</Link>
    <Link href={`/nearbyPlaces?type=Finance&lat=${lat}&lon=${lon}`} className={Style.Link}>Finance</Link>
    <Link href={`/nearbyPlaces?type=Food&lat=${lat}&lon=${lon}`} className={Style.Link}>Food and Drink</Link>
    <Link href={`/nearbyPlaces?type=Government&lat=${lat}&lon=${lon}`} className={Style.Link}>Government</Link>
    <Link href={`/nearbyPlaces?type=Health&lat=${lat}&lon=${lon}`} className={Style.Link}>Health and Wellness</Link>
    <Link href={`/nearbyPlaces?type=Lodging&lat=${lat}&lon=${lon}`} className={Style.Link}>Lodging</Link>
    <Link href={`/nearbyPlaces?type=Worship&lat=${lat}&lon=${lon}`} className={Style.Link}>Places of Worship</Link>
    <Link href={`/nearbyPlaces?type=Services&lat=${lat}&lon=${lon}`} className={Style.Link}>Services</Link>
    <Link href={`/nearbyPlaces?type=Shopping&lat=${lat}&lon=${lon}`} className={Style.Link}>Shopping</Link>
    <Link href={`/nearbyPlaces?type=Sports&lat=${lat}&lon=${lon}`} className={Style.Link}>Sports</Link>
    <Link href={`/nearbyPlaces?type=Transportation&lat=${lat}&lon=${lon}`} className={Style.Link}>Transportation</Link>
    </nav>
    <ListNearbyPlaces places={places}/>
    </>
    )



}