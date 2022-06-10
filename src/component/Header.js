import React from "react";
import Box from "@mui/material/Box";

export default function Header() {
  return (
    <Box
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${require("../assets/img/banner.png")})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 420,
      }}
    >
      <Box
        sx={{
          width: "450px",
        }}
      >
        <h2
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "80px",
            marginTop: "-60px",
            textShadow: "0 0 3px black, 0 0 5px black",
          }}
        >
          Djubli
        </h2>
        <h4
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "-60px",
            textShadow: "0 0 3px black, 0 0 5px black",
          }}
        >
          Temukan Mobil Impianmu
        </h4>
      </Box>
    </Box>
  );
}
