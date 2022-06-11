import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";

export default function CardDetail({
  merk,
  group_model,
  year,
  model,
  img,
  price,
  Km,
  status,
  location,
}) {
  let formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });
  return (
    <Card sx={{ margin: "20px", borderRadius: "10px" }}>
      <CardMedia component="img" height="194" src={img} alt="Paella dish" />
      <CardContent>
        <Box sx={{ display: "flex" }}>
          <h5 style={{ marginRight: "3px" }}>{merk}</h5>
          <h5 style={{ marginRight: "3px" }}>{group_model}</h5>
          <h5>{model}</h5>
        </Box>
        <h5 style={{ marginTop: "-10px" }}>{year}</h5>
        <Divider sx={{ mt: -1 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <h5>{`${status}, KM ${Km}`}</h5>
          <h5>Dealer</h5>
        </Box>
        <Box sx={{ display: "flex", mt: -4 }}>
          <h5 style={{ marginRight: "3px" }}>{location}</h5>
        </Box>
        <h4 style={{ marginTop: "-15px" }}>{formatter.format(price)}</h4>
      </CardContent>
    </Card>
  );
}
