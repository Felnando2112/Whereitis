
type PlaceAction = {type: 'setUserLocation',payload: [number,number]};
type PlaceState = {isLoading: boolean, userLocation?: [number,number]}

export const coordsReducer = (state: PlaceState, action: PlaceAction): PlaceState => {

    switch(action.type){
        case 'setUserLocation':
            return {
                ...state,
                isLoading: false,
                userLocation: action.payload
            }
        default:
            return state;
    }

}

