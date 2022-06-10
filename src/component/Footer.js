import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function Footer() {
  return (
    <Box sx={{ height: { xs: 550, sm: 550, md: 300 }, bgcolor: "green" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
            <img
              style={{ marginRight: 10, width: "180px", height: "70px" }}
              src={require("../assets/img/footerlogo.png")}
              alt="..."
            />
            <p style={{ color: "white" }}>
              DjuBli adalah platform jual beli mobil baru dan bekas berbasis
              aplikasi digital, mulai beroperasi sejak juni 2021, berkantor
              pusat di Jakarta yang sampai saat ini sudah mencapai ribuan unit
              listing mencakup area di kota-kota besar Indonesia.
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
            <Box>
              <h2 style={{ color: "white" }}>Lainnya</h2>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", mt: -2 }}>
              <a href="/" style={{ color: "white", textDecoration: "none" }}>
                Tentang DjuBli
              </a>
              <a href="/" style={{ color: "white", textDecoration: "none" }}>
                Hubungi DjuBli
              </a>
              <a href="/" style={{ color: "white", textDecoration: "none" }}>
                Kebijakan Privasi
              </a>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
            <Box>
              <h2 style={{ color: "white" }}>Unduh Aplikasi</h2>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box>
                <img
                  style={{ marginRight: 10, width: "180px", height: "60px" }}
                  src={require("../assets/img/play-store-logo.png")}
                  alt="..."
                />
              </Box>
              <Box>
                <img
                  style={{ marginRight: 10, width: "180px", height: "60px" }}
                  src={require("../assets/img/app-store-logo.png")}
                  alt="..."
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
