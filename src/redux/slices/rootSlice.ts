import { createSlice } from "@reduxjs/toolkit";

interface CarState {
  make: string;
  model: string;
  year: string;
  color: string;
  price: number;
  is_new: boolean;
  vehicle_type: string;
  fuel_type: string;
  image: string;
}

const initialState: CarState = {
  make: "",
  model: "",
  year: "",
  color: "",
  price: 0,
  is_new: false,
  vehicle_type: "",
  fuel_type: "",
  image: "",
};

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    getMake: (state, action) => {
      state.make = action.payload;
    },
    getModel: (state, action) => {
      state.model = action.payload;
    },
    getYear: (state, action) => {
      state.year = action.payload;
    },
    getColor: (state, action) => {
      state.color = action.payload;
    },
    getPrice: (state, action) => {
      state.price = action.payload;
    },
    getIsNew: (state, action) => {
      state.is_new = action.payload;
    },
    getVehicleType: (state, action) => {
      state.vehicle_type = action.payload;
    },
    getFuelType: (state, action) => {
      state.fuel_type = action.payload;
    },
    getImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;
export const {
  getMake,
  getModel,
  getYear,
  getColor,
  getPrice,
  getIsNew,
  getVehicleType,
  getFuelType,
  getImage,
} = rootSlice.actions;
