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

export const uiStartLoading = () => ({
    type: types.uiStartLoading
});

export const uiFinishLoading = () => ({
    type: types.uiFinishLoading
})
