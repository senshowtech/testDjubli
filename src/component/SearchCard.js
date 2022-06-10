import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TabSearch from "./TabSearch";

export default function SearchCard() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "36px" }}>
      <Card
        sx={{
          mb: 8,
          width: "1150px",
          height: "580px",
          ml: { xs: 2, sm: 2, md: 2, lg: 0 },
          mr: { xs: 2, sm: 2, md: 2, lg: 0 },
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 24 }}
            className="font-link"
            color="green"
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
