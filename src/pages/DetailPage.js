import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBarUser from "../component/AppBarUser";
import CardDetail from "../component/CardDetail";
import { useLocation } from "react-router-dom";

export default function DetailPage() {
  const { state } = useLocation();
  let data_detail = state;
  const pages = ["Login", "Register"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box>
      <CssBaseline />
      <AppBarUser
        anchorElNav={anchorElNav}
        handleOpenNavMenu={handleOpenNavMenu}
        handleCloseNavMenu={handleCloseNavMenu}
        pages={pages}
      />
      <Box sx={{ display: "flex", justifyContent: "center", mt: "36px" }}>
        <Grid container spacing={2}>
          {data_detail.data.map((value) => {
            return (
              <Grid item xs={4} key={value.model}>
                <Box>
                  <CardDetail
                    merk={value.merk}
                    group_model={value.group_model}
                    year={value.year}
                    model={value.model}
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
