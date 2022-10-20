import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    provider: '',
    currency: '',
    skip: 0
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setProviderSlice: (state = initialState, action) => {
            state.provider = action.payload
        },
        setCurrencySlice: (state = initialState, action) => {
            state.currency = action.payload
        },
        setSkip: (state = initialState, action) => {
            state.skip = action.payload
        }
    }
})

export const {setProviderSlice, setCurrencySlice, setSkip } = appSlice.actions



