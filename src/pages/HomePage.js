import React from "react";
import AppBarUser from "../component/AppBarUser";
import SearchCard from "../component/SearchCard";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { selectCar } from "../redux/carSlice";

export function HomePage() {
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
        <AppBarUser
          anchorElNav={anchorElNav}
          handleOpenNavMenu={handleOpenNavMenu}
          handleCloseNavMenu={handleCloseNavMenu}
          pages={pages}
        />
        <SearchCard />
      </Box>
    </Box>
  );
}
