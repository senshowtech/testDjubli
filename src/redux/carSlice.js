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
        Km: "41.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758688/djubeli/inova_gpnrb6.jpg",
      },
      {
        merk: "Toyota",
        group_model: "Kijang Inova",
        model: "2.0 G AT",
        year: "2015",
        status: "Bekas",
        Km: "42.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758688/djubeli/inova_gpnrb6.jpg",
      },
      {
        merk: "Toyota",
        group_model: "Kijang Inova",
        model: "2.7 V AT",
        year: "2016",
        status: "Bekas",
        Km: "43.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758688/djubeli/inova_gpnrb6.jpg",
      },
      {
        merk: "Toyota",
        group_model: "Avanza",
        model: "1.3 E MT",
        year: "2014",
        status: "Bekas",
        Km: "44.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758829/djubeli/avanza_fismny.jpg",
      },
      {
        merk: "Toyota",
        group_model: "Avanza",
        model: "1.3 G AT",
        year: "2015",
        status: "Bekas",
        Km: "45.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758829/djubeli/avanza_fismny.jpg",
      },
      {
        merk: "Toyota",
        group_model: "Avanza",
        model: "ALL NEW VELOZ 1.5 AT",
        year: "2018",
        status: "Bekas",
        Km: "46.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758829/djubeli/avanza_fismny.jpg",
      },
      {
        merk: "Toyota",
        group_model: "Camry",
        model: "2.2 MT",
        year: "2014",
        status: "Bekas",
        Km: "47.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758830/djubeli/camry_zjbq9k.jpg",
      },
      {
        merk: "Toyota",
        group_model: "Camry",
        model: "NEW 2.4 G MT",
        year: "2017",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758830/djubeli/camry_zjbq9k.jpg",
      },
      {
        merk: "Honda",
        group_model: "CR-V",
        model: "ALL NEW 2.4 AT",
        year: "2016",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758688/djubeli/crv_aslx9d.jpg",
      },
      {
        merk: "Honda",
        group_model: "CR-V",
        model: "ALL NEW 2.0 AT",
        year: "2017",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758688/djubeli/crv_aslx9d.jpg",
      },
      {
        merk: "Honda",
        group_model: "CR-V",
        model: "ALL NEW 1.5 AT TURBO",
        year: "2020",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758688/djubeli/crv_aslx9d.jpg",
      },
      {
        merk: "Honda",
        group_model: "BR-V",
        model: "1.5 E AT PRESTIGE",
        year: "2017",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758688/djubeli/brv_p3h42c.jpg",
      },
      {
        merk: "Honda",
        group_model: "BR-V",
        model: "1.5 E AT",
        year: "2016",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758688/djubeli/brv_p3h42c.jpg",
      },
      {
        merk: "Honda",
        group_model: "BR-V",
        model: "1.5 S MT",
        year: "2018",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758688/djubeli/brv_p3h42c.jpg",
      },
      {
        merk: "Honda",
        group_model: "Accord",
        model: "ALL NEW 1.5 TURBO",
        year: "2019",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758875/djubeli/accord_wsopuj.jpg",
      },
      {
        merk: "Honda",
        group_model: "Accord",
        model: "ALL NEW 2.4 VTI AT",
        year: "2016",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758875/djubeli/accord_wsopuj.jpg",
      },
      {
        merk: "Honda",
        group_model: "Accord",
        model: "ALL NEW 2.4 VTI-L AT",
        year: "2017",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758875/djubeli/accord_wsopuj.jpg",
      },
      {
        merk: "BMW",
        group_model: "5 Series",
        model: "520i 2.0 AT",
        year: "2014",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758971/djubeli/bmw_hf1viv.jpg",
      },
      {
        merk: "BMW",
        group_model: "5 Series",
        model: "520i 2.0 AT LUXURY",
        year: "2018",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758971/djubeli/bmw_hf1viv.jpg",
      },
      {
        merk: "BMW",
        group_model: "5 Series",
        model: "530i G30",
        year: "2021",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758971/djubeli/bmw_hf1viv.jpg",
      },
      {
        merk: "BMW",
        group_model: "3 Series",
        model: "320i Luxury",
        year: "2015",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758971/djubeli/bmw_hf1viv.jpg",
      },
      {
        merk: "BMW",
        group_model: "3 Series",
        model: "320i Sport",
        year: "2017",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758971/djubeli/bmw_hf1viv.jpg",
      },
      {
        merk: "BMW",
        group_model: "3 Series",
        model: "330i M Sport",
        year: "2017",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758971/djubeli/bmw_hf1viv.jpg",
      },
      {
        merk: "BMW",
        group_model: "7 Series",
        model: "730li 2.0",
        year: "2017",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758971/djubeli/bmw_hf1viv.jpg",
      },
      {
        merk: "BMW",
        group_model: "7 Series",
        model: "750li F02",
        year: "2010",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758971/djubeli/bmw_hf1viv.jpg",
      },
      {
        merk: "BMW",
        group_model: "7 Series",
        model: "740li Executive RSE",
        year: "2012",
        status: "Bekas",
        Km: "48.000",
        location: "Tambora,Jakarta Pusat",
        price: "Rp.250.000.000",
        img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758971/djubeli/bmw_hf1viv.jpg",
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
