import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TabSearch from "./TabSearch";

export default function SearchCard() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "36px" }}>
      <Card sx={{ width: "1250px", height: "350px", borderRadius: "20px" }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 24 }}
            className="font-link"
            color="text.secondary"
            gutterBottom
          >
            Cari Mobil
          </Typography>
          <TabSearch />
        </CardContent>
      </Card>
    </Box>
  );
}
