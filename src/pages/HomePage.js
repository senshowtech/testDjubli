import React from "react";
import AppBarUser from "../component/AppBarUser";
import Header from "../component/Header";
import SearchCard from "../component/SearchCard";
import Footer from "../component/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

export default function HomePage() {
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
      <Box>
        <CssBaseline />
        <AppBarUser
          anchorElNav={anchorElNav}
          handleOpenNavMenu={handleOpenNavMenu}
          handleCloseNavMenu={handleCloseNavMenu}
          pages={pages}
        />
        <Header />
        <SearchCard />
        <Footer />
      </Box>
    </Box>
  );
}
