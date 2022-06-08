import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import AppBarUser from "../component/AppBarUser";
import CardDetail from "../component/CardDetail";
import { useLocation } from "react-router-dom";

export default function DetailPage() {
  const { state } = useLocation();
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
          <Grid item xs={4}>
            <Box>
              <CardDetail />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <CardDetail />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <CardDetail />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
