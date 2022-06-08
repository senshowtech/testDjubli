import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  data: {
    data: [
      {
        id: 1,
        merk: "Toyota",
        group_model: "Kijang Inova",
        model: "2.0 E MT",
        tahun: "2016",
      },
      {
        id: 2,
        merk: "Toyota",
        group_model: "Kijang Inova",
        model: "2.0 G AT",
        tahun: "2015",
      },
      {
        id: 3,
        merk: "Toyota",
        group_model: "Kijang Inova",
        model: "2.7 V AT",
        tahun: "2016",
      },
      {
        id: 4,
        merk: "Honda",
        group_model: "CR-V",
        model: "ALL NEW 2.4 AT",
        tahun: "2016",
      },
      {
        id: 5,
        merk: "Honda",
        group_model: "CR-V",
        model: "ALL NEW 2.0 AT",
        tahun: "2017",
      },
      {
        id: 6,
        merk: "Honda",
        group_model: "CR-V",
        model: "ALL NEW 1.5 AT TURBO",
        tahun: "2018",
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
