import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  data: {
    data: [
      {
        merk: "Toyota",
        group_model: "Kijang Inova",
        model: "2.0 E MT",
        year: "2016",
        status: "Bekas",
        KM: "41.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
      },
      {
        merk: "Toyota",
        group_model: "Kijang Inova",
        model: "2.0 G AT",
        year: "2015",
        status: "Bekas",
        KM: "42.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
      },
      {
        merk: "Toyota",
        group_model: "Kijang Inova",
        model: "2.7 V AT",
        year: "2016",
        status: "Bekas",
        KM: "43.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
      },
      {
        merk: "Toyota",
        group_model: "Avanza",
        model: "1.3 E MT",
        year: "2014",
        status: "Bekas",
        KM: "44.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
      },
      {
        merk: "Toyota",
        group_model: "Avanza",
        model: "1.3 G AT",
        year: "2015",
        status: "Bekas",
        KM: "45.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
      },
      {
        merk: "Toyota",
        group_model: "Avanza",
        model: "ALL NEW VELOZ 1.5 AT",
        year: "2018",
        status: "Bekas",
        KM: "46.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
      },
    ],
  },
};

export const carSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Add_Car: (state) => {
      console.log(current(state));
    },
  },
});

export const { Add_Car } = carSlice.actions;

export const selectCar = (state) => state.user;

export default carSlice.reducer;
