import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { HomePage } from "./pages/HomePage";
import "../src/assets/css/App.css";

export default function App() {
  document.body.style.backgroundColor = "#eeeeee";
  return (
    <Box>
      <CssBaseline />
      <HomePage />
    </Box>
  );
}
