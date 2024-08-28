interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

type PlaceType = {
    id: string;
    rating: number;
    googleMapsUri: string;
    displayName: {
        text: string
    },
    primaryType?: string ;
    reviews: any;
    photos: any;
  };
