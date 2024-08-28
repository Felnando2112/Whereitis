import { googleMapsUrls } from "./urls";
import { Loader } from "@googlemaps/js-api-loader";
import { env } from "app/app/config/env";


export const getNearbyPlaces = async (lat:number,lon:number) => {
    const response = await fetch(googleMapsUrls.nearbyPlaces.all,{
        method: 'POST',
        headers: new Headers({
            'X-Goog-FieldMask': 'places.displayName.text,places.id,places.rating,places.reviews.text.text,places.photos.name,places.primaryType,places.googleMapsUri',
            'X-Goog-Api-Key': env.NEXT_MAPS_API_KEY || ''
        }),
        cache: 'no-cache',
        body: JSON.stringify({
            "locationRestriction": {
              "circle": {
                "center": {
                  "latitude": lat,
                  "longitude": lon},
                "radius": 1000.0
              }
            }
          })
    });
    const result = await response.json();
    return result.places;
}


export const getNearbyPlacesAutomotive = async (lat:number,lon:number) => {
  const response = await fetch(googleMapsUrls.nearbyPlaces.all,{
      method: 'POST',
      headers: new Headers({
          'X-Goog-FieldMask': 'places.displayName.text,places.id,places.rating,places.reviews.text.text,places.photos.name,places.primaryType,places.googleMapsUri',
          'X-Goog-Api-Key': env.NEXT_MAPS_API_KEY || ''
      }),
      cache: 'no-cache',
      body: JSON.stringify({
        "includedTypes": ["car_dealer","car_rental","car_repair","car_wash","electric_vehicle_charging_station","gas_station","parking","rest_stop"],
          "locationRestriction": {
            "circle": {
              "center": {
                "latitude": lat,
                "longitude": lon},
              "radius": 1000.0
            }
          }
        })
  });
  const result = await response.json();
  return result.places;
}

export const getNearbyPlacesBusiness = async (lat:number,lon:number) => {
  const response = await fetch(googleMapsUrls.nearbyPlaces.all,{
      method: 'POST',
      headers: new Headers({
          'X-Goog-FieldMask': 'places.displayName.text,places.id,places.rating,places.reviews.text.text,places.photos.name,places.primaryType,places.googleMapsUri',
          'X-Goog-Api-Key': env.NEXT_MAPS_API_KEY || ''
      }),
      cache: 'no-cache',
      body: JSON.stringify({
        "includedTypes": ["Farm"],
          "locationRestriction": {
            "circle": {
              "center": {
                "latitude": lat,
                "longitude": lon},
              "radius": 1000.0
            }
          }
        })
  });
  const result = await response.json();
  return result.places;
}

export const getNearbyPlacesCulture = async (lat:number,lon:number) => {
  const response = await fetch(googleMapsUrls.nearbyPlaces.all,{
      method: 'POST',
      headers: new Headers({
          'X-Goog-FieldMask': 'places.displayName.text,places.id,places.rating,places.reviews.text.text,places.photos.name,places.primaryType,places.googleMapsUri',
          'X-Goog-Api-Key': env.NEXT_MAPS_API_KEY || ''
      }),
      cache: 'no-cache',
      body: JSON.stringify({
        "includedTypes": ["art_gallery","museum","performing_arts_theater"],
          "locationRestriction": {
            "circle": {
              "center": {
                "latitude": lat,
                "longitude": lon},
              "radius": 1000.0
            }
          }
        })
  });
  const result = await response.json();
  return result.places;
}

export const getNearbyPlacesEducation = async (lat:number,lon:number) => {
  const response = await fetch(googleMapsUrls.nearbyPlaces.all,{
      method: 'POST',
      headers: new Headers({
          'X-Goog-FieldMask': 'places.displayName.text,places.id,places.rating,places.reviews.text.text,places.photos.name,places.primaryType,places.googleMapsUri',
          'X-Goog-Api-Key': env.NEXT_MAPS_API_KEY || ''
      }),
      cache: 'no-cache',
      body: JSON.stringify({
        "includedTypes": ["library","preschool","primary_school",	"school","secondary_school","university"],
          "locationRestriction": {
            "circle": {
              "center": {
                "latitude": lat,
                "longitude": lon},
              "radius": 1000.0
            }
          }
        })
  });
  const result = await response.json();
  return result.places;
}

export const getNearbyPlacesEntertainment = async (lat:number,lon:number) => {
  const response = await fetch(googleMapsUrls.nearbyPlaces.all,{
      method: 'POST',
      headers: new Headers({
          'X-Goog-FieldMask': 'places.displayName.text,places.id,places.rating,places.reviews.text.text,places.photos.name,places.primaryType,places.googleMapsUri',
          'X-Goog-Api-Key': env.NEXT_MAPS_API_KEY || ''
      }),
      cache: 'no-cache',
      body: JSON.stringify({
        "includedTypes": ["amusement_center","amusement_park","aquarium","banquet_hall","bowling_alley","casino","community_center","convention_center","cultural_center","dog_park","event_venue",
          "hiking_area",
          "historical_landmark",
          "marina",
          "movie_rental",
          "movie_theater",
          "national_park",
          "night_club",
          "park",
          "tourist_attraction",
          "visitor_center",
          "wedding_venue",
          "zoo"],
          "locationRestriction": {
            "circle": {
              "center": {
                "latitude": lat,
                "longitude": lon},
              "radius": 1000.0
            }
          }
        })
  });
  const result = await response.json();
  return result.places;
}

export const getNearbyPlacesFinance = async (lat:number,lon:number) => {
  const response = await fetch(googleMapsUrls.nearbyPlaces.all,{
      method: 'POST',
      headers: new Headers({
          'X-Goog-FieldMask': 'places.displayName.text,places.id,places.rating,places.reviews.text.text,places.photos.name,places.primaryType,places.googleMapsUri',
          'X-Goog-Api-Key': env.NEXT_MAPS_API_KEY || ''
      }),
      cache: 'no-cache',
      body: JSON.stringify({
        "includedTypes": ["bank","atm"],
          "locationRestriction": {
            "circle": {
              "center": {
                "latitude": lat,
                "longitude": lon},
              "radius": 1000.0
            }
          }
        })
  });
  const result = await response.json();
  return result.places;
}

export const getNearbyPlacesFood = async (lat:number,lon:number) => {
  const response = await fetch(googleMapsUrls.nearbyPlaces.all,{
      method: 'POST',
      headers: new Headers({
          'X-Goog-FieldMask': 'places.displayName.text,places.id,places.rating,places.reviews.text.text,places.photos.name,places.primaryType,places.googleMapsUri',
          'X-Goog-Api-Key': env.NEXT_MAPS_API_KEY || ''
      }),
      cache: 'no-cache',
      body: JSON.stringify({
        "includedTypes": ["american_restaurant",
          "bakery",
          "bar",
          "barbecue_restaurant",
          "brazilian_restaurant",
          "breakfast_restaurant",
          "brunch_restaurant",
          "cafe",
          "chinese_restaurant",
          "coffee_shop",
          "fast_food_restaurant",
          "french_restaurant",
          "greek_restaurant",
          "hamburger_restaurant",
          "ice_cream_shop",
          "indian_restaurant",
          "indonesian_restaurant",
          "italian_restaurant",
          "japanese_restaurant",
          "korean_restaurant",	
          "lebanese_restaurant",
          "meal_delivery",
          "meal_takeaway",
          "mediterranean_restaurant",
          "mexican_restaurant",
          "middle_eastern_restaurant",
          "pizza_restaurant",
          "ramen_restaurant",
          "restaurant",
          "sandwich_shop",
          "seafood_restaurant",
          "spanish_restaurant",
          "steak_house",
          "sushi_restaurant",
          "thai_restaurant",
          "turkish_restaurant",
          "vegan_restaurant",
          "vegetarian_restaurant",
          "vietnamese_restaurant"],
          "locationRestriction": {
            "circle": {
              "center": {
                "latitude": lat,
                "longitude": lon},
              "radius": 1000.0
            }
          }
        })
  });
  const result = await response.json();
  return result.places;
}

export const getNearbyPlacesGovernment = async (lat:number,lon:number) => {
  const response = await fetch(googleMapsUrls.nearbyPlaces.all,{
      method: 'POST',
      headers: new Headers({
          'X-Goog-FieldMask': 'places.displayName.text,places.id,places.rating,places.reviews.text.text,places.photos.name,places.primaryType,places.googleMapsUri',
          'X-Goog-Api-Key': env.NEXT_MAPS_API_KEY || ''
      }),
      cache: 'no-cache',
      body: JSON.stringify({
        "includedTypes": ["city_hall",
          "courthouse",
          "embassy",
          "fire_station",	
          "local_government_office",
          "police",
          "post_office"],
          "locationRestriction": {
            "circle": {
              "center": {
                "latitude": lat,
                "longitude": lon},
              "radius": 1000.0
            }
          }
        })
  });
  const result = await response.json();
  return result.places;
}

export const getNearbyPlacesHealth = async (lat:number,lon:number) => {
  const response = await fetch(googleMapsUrls.nearbyPlaces.all,{
      method: 'POST',
      headers: new Headers({
          'X-Goog-FieldMask': 'places.displayName.text,places.id,places.rating,places.reviews.text.text,places.photos.name,places.primaryType,places.googleMapsUri',
          'X-Goog-Api-Key': env.NEXT_MAPS_API_KEY || ''
      }),
      cache: 'no-cache',
      body: JSON.stringify({
        "includedTypes": ["dental_clinic",
          "dentist",
          "doctor",
          "drugstore",
          "hospital",	
          "medical_lab",
          "pharmacy",
          "physiotherapist",
          "spa"],
          "locationRestriction": {
            "circle": {
              "center": {
                "latitude": lat,
                "longitude": lon},
              "radius": 1000.0
            }
          }
        })
  });
  const result = await response.json();
  return result.places;
}

export const getNearbyPlacesLodging = async (lat:number,lon:number) => {
  const response = await fetch(googleMapsUrls.nearbyPlaces.all,{
      method: 'POST',
      headers: new Headers({
          'X-Goog-FieldMask': 'places.displayName.text,places.id,places.rating,places.reviews.text.text,places.photos.name,places.primaryType,places.googleMapsUri',
          'X-Goog-Api-Key': env.NEXT_MAPS_API_KEY || ''
      }),
      cache: 'no-cache',
      body: JSON.stringify({
        "includedTypes": ["bed_and_breakfast",
          "campground",
          "camping_cabin",
          "cottage",
          "extended_stay_hotel",
          "farmstay",
          "guest_house",	
          "hostel",
          "hotel",
          "lodging",
          "motel",
          "private_guest_room",
          "resort_hotel",
          "rv_park"],
          "locationRestriction": {
            "circle": {
              "center": {
                "latitude": lat,
                "longitude": lon},
              "radius": 1000.0
            }
          }
        })
  });
  const result = await response.json();
  return result.places;
}

export const getNearbyPlacesWorship = async (lat:number,lon:number) => {
  const response = await fetch(googleMapsUrls.nearbyPlaces.all,{
      method: 'POST',
      headers: new Headers({
          'X-Goog-FieldMask': 'places.displayName.text,places.id,places.rating,places.reviews.text.text,places.photos.name,places.primaryType,places.googleMapsUri',
          'X-Goog-Api-Key': env.NEXT_MAPS_API_KEY || ''
      }),
      cache: 'no-cache',
      body: JSON.stringify({
        "includedTypes": ["church",
          "hindu_temple",
          "mosque",
          "synagogue"],
          "locationRestriction": {
            "circle": {
              "center": {
                "latitude": lat,
                "longitude": lon},
              "radius": 1000.0
            }
          }
        })
  });
  const result = await response.json();
  return result.places;
}

export const getNearbyPlacesServices = async (lat:number,lon:number) => {
  const response = await fetch(googleMapsUrls.nearbyPlaces.all,{
      method: 'POST',
      headers: new Headers({
          'X-Goog-FieldMask': 'places.displayName.text,places.id,places.rating,places.reviews.text.text,places.photos.name,places.primaryType,places.googleMapsUri',
          'X-Goog-Api-Key': env.NEXT_MAPS_API_KEY || ''
      }),
      cache: 'no-cache',
      body: JSON.stringify({
        "includedTypes": ["barber_shop",
          "beauty_salon",
          "cemetery",
          "child_care_agency",
          "consultant",
          "courier_service",
          "electrician",
          "florist",
          "funeral_home",
          "hair_care",
          "hair_salon",
          "insurance_agency",	
          "laundry",
          "lawyer",
          "locksmith",
          "moving_company",
          "painter",
          "plumber",
          "real_estate_agency",
          "roofing_contractor",
          "storage",
          "tailor",
          "telecommunications_service_provider",
          "travel_agency",
          "veterinary_care"],
          "locationRestriction": {
            "circle": {
              "center": {
                "latitude": lat,
                "longitude": lon},
              "radius": 1000.0
            }
          }
        })
  });
  const result = await response.json();
  return result.places;
}

export const getNearbyPlacesShopping = async (lat:number,lon:number) => {
  const response = await fetch(googleMapsUrls.nearbyPlaces.all,{
      method: 'POST',
      headers: new Headers({
          'X-Goog-FieldMask': 'places.displayName.text,places.id,places.rating,places.reviews.text.text,places.photos.name,places.primaryType,places.googleMapsUri',
          'X-Goog-Api-Key': env.NEXT_MAPS_API_KEY || ''
      }),
      cache: 'no-cache',
      body: JSON.stringify({
        "includedTypes": ["book_store","cell_phone_store","clothing_store","convenience_store","department_store","discount_store","electronics_store","furniture_store","gift_shop","grocery_store","hardware_store","home_goods_store","home_improvement_store","jewelry_store","liquor_store","market","pet_store","shoe_store","shopping_mall","sporting_goods_store","store","supermarket","wholesaler"],
          "locationRestriction": {
            "circle": {
              "center": {
                "latitude": lat,
                "longitude": lon},
              "radius": 1000.0
            }
          }
        })
  });
  const result = await response.json();
  return result.places;
}

export const getNearbyPlacesSports = async (lat:number,lon:number) => {
  const response = await fetch(googleMapsUrls.nearbyPlaces.all,{
      method: 'POST',
      headers: new Headers({
          'X-Goog-FieldMask': 'places.displayName.text,places.id,places.rating,places.reviews.text.text,places.photos.name,places.primaryType,places.googleMapsUri',
          'X-Goog-Api-Key': env.NEXT_MAPS_API_KEY || ''
      }),
      cache: 'no-cache',
      body: JSON.stringify({
        "includedTypes": ["athletic_field","fitness_center","golf_course","gym","playground","ski_resort","sports_club","sports_complex","stadium","swimming_pool"],
          "locationRestriction": {
            "circle": {
              "center": {
                "latitude": lat,
                "longitude": lon},
              "radius": 1000.0
            }
          }
        })
  });
  const result = await response.json();
  return result.places;
}

export const getNearbyPlacesTransportation = async (lat:number,lon:number) => {
  const response = await fetch(googleMapsUrls.nearbyPlaces.all,{
      method: 'POST',
      headers: new Headers({
          'X-Goog-FieldMask': 'places.displayName.text,places.id,places.rating,places.reviews.text.text,places.photos.name,places.primaryType,places.googleMapsUri',
          'X-Goog-Api-Key': env.NEXT_MAPS_API_KEY || ''
      }),
      cache: 'no-cache',
      body: JSON.stringify({
        "includedTypes": ["airport","bus_station","bus_stop","ferry_terminal","heliport","light_rail_station","park_and_ride","subway_station","taxi_stand","train_station","transit_depot","transit_station","truck_stop"],
          "locationRestriction": {
            "circle": {
              "center": {
                "latitude": lat,
                "longitude": lon},
              "radius": 1000.0
            }
          }
        })
  });
  const result = await response.json();
  return result.places;
}

export const getNearbyPlacesIndividual = async (id: string) => {
  const url = googleMapsUrls.nearbyPlaces.individual(id);
  const response = await fetch(url,{
    cache: 'no-cache'
  })
  const result = await response.json();
  return result;
}



export const getPlacePhoto = async (name : string,maxWidth : number,maxHeight : number) => {
  const response = await fetch(googleMapsUrls.photos.individual(name,maxWidth,maxHeight),{
      method: 'GET',
      cache: 'no-cache'
  });
  const result = await response.json();
  return result.photoUri;
}




export const initMap = async () => {
    const loader = new Loader({
        apiKey: env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'weekly'
    });

    return loader;

}