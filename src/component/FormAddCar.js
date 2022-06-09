import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Alert from "@mui/material/Alert";
import { useDispatch } from "react-redux";
import { Add_Car } from "../redux/carSlice";
import { styled } from "@mui/material/styles";

export default function FormAddCar() {
  const dispatch = useDispatch();
  const [image, setImage] = React.useState("");
  const [alert, setAlert] = React.useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "djubli");
    data.append("cloud_name", "dumbmerch");
    fetch("https://api.cloudinary.com/v1_1/dumbmerch/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
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
          img: data.url,
        };
        dispatch(Add_Car(data_final));
        setTimeout(() => setAlert("add"), 2000);
      })
      .catch((err) => console.log(err));
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <form onSubmit={HandleSubmit}>
      {alert === "add" ? (
        <Alert severity="success">Data Telah Di Tambahkan</Alert>
      ) : null}
      <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <TextField
            required
            sx={{ width: "50%", mr: 2 }}
            id="outlined-basic"
            label="Merk"
            name="merk"
            variant="outlined"
          />
          <TextField
            required
            sx={{ width: "50%" }}
            id="outlined-basic"
            label="Group Model"
            name="group"
            variant="outlined"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
          <TextField
            required
            sx={{ width: "50%", mr: 2 }}
            id="outlined-basic"
            label="Model"
            name="model"
            variant="outlined"
          />
          <TextField
            required
            sx={{ width: "50%" }}
            id="outlined-basic"
            name="year"
            label="Year"
            variant="outlined"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
          <TextField
            required
            sx={{ width: "50%", mr: 2 }}
            id="outlined-basic"
            name="status"
            label="Status"
            variant="outlined"
          />
          <TextField
            required
            sx={{ width: "50%" }}
            id="outlined-basic"
            name="km"
            label="Km"
            variant="outlined"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
          <TextField
            required
            sx={{ width: "50%", mr: 2 }}
            id="outlined-basic"
            name="location"
            label="Location"
            variant="outlined"
          />
          <TextField
            required
            sx={{ width: "50%" }}
            id="outlined-basic"
            name="price"
            label="Price"
            variant="outlined"
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "start", mt: 2 }}>
          <label htmlFor="icon-button-file">
            <Input
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/*"
              id="icon-button-file"
              type="file"
            />
            <IconButton
              sx={{ mr: 2 }}
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
          <p>{image.name}</p>
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
