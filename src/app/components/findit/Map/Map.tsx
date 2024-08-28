'use client'

import Link from "next/link";
import {useEffect,useRef,useState} from "react";
import { initMap } from "app/app/services/google_maps_api";
import { getUserLocation } from "app/app/customHooks";
import Style from './Map.module.css'





export const Map = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [error,setError] = useState<boolean>(false);
    const [lat,setLat] = useState<number>();
    const [lon,setLon] = useState<number>();
    
    useEffect(  () =>  {


        getUserLocation().then(lnglat =>{
            setLat(lnglat[0]);
            setLon(lnglat[1]);
           setUpMap(lnglat);
        }).catch(error => {
            setError(error);
        })
         
        
    },[])
    

    

    const setUpMap = async (coords:number[]) => {
        
        
        const loader = await initMap();
       

       

            const position = {
                lat: coords[0],
                lng: coords[1]
            }

            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: 'MY_NEXTJS_MAPID'
            }

            const { Map } = await loader.importLibrary('maps');
            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            const marker = new AdvancedMarkerElement({
                map: map,
                position: position,
                title: `Your Position`,
                gmpClickable: true,
              });




        }
        

       

    return(
        <>
        { !error ? 
        <>
        <div style={{height: '900px'}} ref={mapRef}/>
        <Link href={`/nearbyPlaces?lat=${lat}&lon=${lon}`} className={Style.Link}>See the nearby places</Link> 
        </>
        : <div>
            <h1>No ha habilitado su geolocalizacion</h1>
            <Link href="/">Vuelve al Home Page</Link>
         </div>
        }
        </>
    )
}