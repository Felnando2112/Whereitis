import { env } from "app/app/config/env";


export const googleMapsUrls = {
    nearbyPlaces: {
        'all': `https://places.googleapis.com/v1/places:searchNearby`,
        'individual': (id: string) => { return `https://places.googleapis.com/v1/places/${id}?fields=id,displayName,rating,reviews,photos,primaryType,googleMapsUri&key=${env.NEXT_MAPS_API_KEY}` }
    },
    photos:{
        'individual': (name : string,maxWidth : number,maxHeight : number) : string => { return `https://places.googleapis.com/v1/${name}/media?key=${env.NEXT_MAPS_API_KEY}&maxWidthPx=${maxWidth}&maxHeightPx=${maxHeight}&skipHttpRedirect=true`}
    }
}