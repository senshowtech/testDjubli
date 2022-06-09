import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { Add_Car } from "../redux/carSlice";

export default function FormAddCar() {
  const dispatch = useDispatch();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    let merk = e.target.merk.value;
    let group_model = e.target.group.value;
    let model = e.target.model.value;
    let year = e.target.year.value;
    let status = e.target.status.value;
    let km = e.target.km.value;
    let location = e.target.location.value;
    let price = e.target.price.value;
    let data_final = {
      merk: merk,
      group_model: group_model,
      model: model,
      year: year,
      status: status,
      Km: km,
      location: location,
      price: price,
      img: "https://res.cloudinary.com/dumbmerch/image/upload/v1654758971/djubeli/bmw_hf1viv.jpg",
    };
    dispatch(Add_Car(data_final));
  };
  return (
    <form onSubmit={HandleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <TextField
            sx={{ width: "50%", mr: 2 }}
            id="outlined-basic"
            label="Merk"
            name="merk"
            variant="outlined"
          />
          <TextField
            sx={{ width: "50%" }}
            id="outlined-basic"
            label="Group Model"
            name="group"
            variant="outlined"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
          <TextField
            sx={{ width: "50%", mr: 2 }}
            id="outlined-basic"
            label="Model"
            name="model"
            variant="outlined"
          />
          <TextField
            sx={{ width: "50%" }}
            id="outlined-basic"
            name="year"
            label="Year"
            variant="outlined"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
          <TextField
            sx={{ width: "50%", mr: 2 }}
            id="outlined-basic"
            name="status"
            label="Status"
            variant="outlined"
          />
          <TextField
            sx={{ width: "50%" }}
            id="outlined-basic"
            name="km"
            label="Km"
            variant="outlined"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
          <TextField
            sx={{ width: "50%", mr: 2 }}
            id="outlined-basic"
            name="location"
            label="Location"
            variant="outlined"
          />
          <TextField
            sx={{ width: "50%" }}
            id="outlined-basic"
            name="price"
            label="Price"
            variant="outlined"
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            type="submit"
            fullWidth
            sx={{ bgcolor: "green", ml: 20, mr: 20 }}
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </Box>
    </form>
  );
}
