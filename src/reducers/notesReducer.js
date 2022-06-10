/*
    {
        notes: [],
        active: null,
        active: {
            id: 'VA3I74OSLQ31K3O0948',
            title: '',
            body: '',
            imageUrl: '',
            date: 12312412312312
        },
    }
*/

import { types } from "../types/types";


const initialState = {
    notes: [],
    active: null
}
export const notesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.notesActive:
            return{
                ...state,
                active: {
                    ...action.payload
                }
            }
            
        case types.notesLoad:
            return{
                ...state,
                notes: [...action.payload.notes]
            }
    
        default:
            return state;
    }

}