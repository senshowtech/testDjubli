import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Alert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { useDispatch } from "react-redux";
import { Add_Car } from "../redux/carSlice";
import { styled } from "@mui/material/styles";

export default function FormAddCar() {
  const dispatch = useDispatch();
  const [image, setImage] = React.useState("");
  const [alert, setAlert] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    if (image === "") {
      setAlert("image");
    } else {
      setLoading(true);
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
            Km: String(km),
            location: location,
            price: String(price),
            img: data.url,
          };
          dispatch(Add_Car(data_final));
          setAlert("add");
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const Input = styled("input")({
    display: "none",
  });

  return (
    <form onSubmit={HandleSubmit}>
      {alert === "add" ? (
        <Alert severity="success">Data Telah Di Tambahkan</Alert>
      ) : alert === "image" ? (
        <Alert severity="error">Silahkan Pilih gambar</Alert>
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
            type="number"
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
            type="number"
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
            type="number"
            label="Price"
            variant="outlined"
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "start", mt: 2 }}>
          <label htmlFor="icon-button-file" style={{ display: "flex" }}>
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
            {image === "" ? (
              <p style={{ marginTop: "10px" }}>Pilih Gambar</p>
            ) : null}
          </label>
          <p>{image.name}</p>
        </Box>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <LoadingButton
              loading
              fullWidth
              sx={{ bgcolor: "green", ml: 20, mr: 20 }}
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="outlined"
            >
              Save
            </LoadingButton>
          </Box>
        ) : (
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
        )}
      </Box>
    </form>
  );
}
