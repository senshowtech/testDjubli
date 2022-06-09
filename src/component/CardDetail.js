import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";

export default function CardDetail({ merk, group_model, year, model }) {
  return (
    <Card sx={{ margin: "20px", borderRadius: "10px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title="user"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Box sx={{ display: "flex" }}>
          <h5 style={{ marginRight: "3px" }}>{merk}</h5>
          <h5 style={{ marginRight: "3px" }}>{group_model}</h5>
          <h5>{model}</h5>
        </Box>
        <h5 style={{ marginTop: "-10px" }}>{year}</h5>
        <Divider sx={{ mt: -1 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <h5>Bekas, KM 41.000</h5>
          <h5>Dealer</h5>
        </Box>
        <Box sx={{ display: "flex", mt: -4 }}>
          <h5 style={{ marginRight: "3px" }}>Tambora,</h5>
          <h5 style={{ marginRight: "100px" }}>Jakarta Pusat</h5>
        </Box>
        <h4 style={{ marginTop: "-15px" }}>Rp.250.000.000</h4>
      </CardContent>
    </Card>
  );
}
