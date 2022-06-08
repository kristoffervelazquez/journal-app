import { types } from "../types/types"

export const uiSetError = (err) => {
    return {
        type: types.uiSetError,
        payload: err
    }
}

export const uiRemoveError = () => (

    {
        type: types.uiRemoveError
    }
)