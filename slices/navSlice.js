import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, { payload }) => {
      state.origin = payload
    },
    setDestination: (state, { payload }) => {
      state.destination = payload
    },
    setTravelTimeInformation: (state, { payload }) => {
      state.travelTimeInformation = payload
    },
  },
})

export const {
  setOrigin,
  setDestination,
  setTravelTimeInformation
} = navSlice.actions

export default navSlice.reducer
