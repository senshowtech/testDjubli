import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { selectCar } from "../redux/carSlice";
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabSearch() {
  const [value, setValue] = React.useState(0);
  const [valueMerk, setvalueMerk] = React.useState("");
  const [valueGroupModel, setvalueGroupModel] = React.useState("");
  const [valueModel, setvalueModel] = React.useState("");
  const [valueYear, setvalueYear] = React.useState("");
  const cars = useSelector(selectCar);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let merk = [];
  cars.data.data.forEach((value) => {
    if (!merk.includes(value.merk)) {
      merk.push(value.merk);
    }
  });

  let data_group_model = cars.data.data.filter((value) => {
    if (valueMerk !== "") {
      return value.merk
        .toLocaleLowerCase()
        .includes(valueMerk.toLocaleLowerCase());
    }
  });

  let group_model = [];
  data_group_model.forEach((value) => {
    group_model.push(value.group_model);
  });

  let data_model = cars.data.data.filter((value) => {
    if (valueGroupModel !== "") {
      return (
        value.merk
          .toLocaleLowerCase()
          .includes(valueMerk.toLocaleLowerCase()) &&
        value.group_model
          .toLocaleLowerCase()
          .includes(valueGroupModel.toLocaleLowerCase())
      );
    }
  });

  let model = [];
  data_model.forEach((value) => {
    model.push(value.model);
  });

  let data_year = cars.data.data.filter((value) => {
    if (valueModel !== "") {
      return (
        value.merk
          .toLocaleLowerCase()
          .includes(valueMerk.toLocaleLowerCase()) &&
        value.group_model
          .toLocaleLowerCase()
          .includes(valueGroupModel.toLocaleLowerCase()) &&
        value.model.toLocaleLowerCase().includes(valueModel.toLocaleLowerCase())
      );
    }
  });

  let year = [];
  data_year.forEach((value) => {
    year.push(value.year);
  });

  let data_final = cars.data.data.filter((value) => {
    if (valueYear !== "") {
      return (
        value.merk
          .toLocaleLowerCase()
          .includes(valueMerk.toLocaleLowerCase()) &&
        value.group_model
          .toLocaleLowerCase()
          .includes(valueGroupModel.toLocaleLowerCase()) &&
        value.model
          .toLocaleLowerCase()
          .includes(valueModel.toLocaleLowerCase()) &&
        value.year.toLocaleLowerCase().includes(valueYear.toLocaleLowerCase())
      );
    }
  });

  const DetailPage = (id) => {
    navigate("/detail-page", {
      state: {
        data: data_final,
      },
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Pembelian" {...a11yProps(0)} />
          <Tab label="Penjualan" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box>
            <Autocomplete
              sx={{ width: 600 }}
              inputValue={valueMerk}
              onInputChange={(event, newInputValue) => {
                setvalueMerk(newInputValue);
              }}
              id="controllable-states-demo"
              options={merk}
              renderInput={(params) => <TextField {...params} label="Merk" />}
            />
          </Box>
          <Box sx={{ ml: "20px" }}>
            <Autocomplete
              disabled={valueMerk === ""}
              id="combo-box-demo"
              options={group_model}
              inputValue={valueGroupModel}
              onInputChange={(event, newInputValue) => {
                setvalueGroupModel(newInputValue);
              }}
              sx={{ width: 600 }}
              renderInput={(params) => (
                <TextField {...params} label="Group Model" />
              )}
            />
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ mt: "20px" }}>
            <Autocomplete
              disabled={valueGroupModel === ""}
              id="combo-box-demo"
              options={model}
              inputValue={valueModel}
              onInputChange={(event, newInputValue) => {
                setvalueModel(newInputValue);
              }}
              sx={{ width: 600 }}
              renderInput={(params) => <TextField {...params} label="Model" />}
            />
          </Box>
          <Box sx={{ ml: "20px", mt: "20px" }}>
            <Autocomplete
              disabled={valueModel === ""}
              id="combo-box-demo"
              options={year}
              inputValue={valueYear}
              onInputChange={(event, newInputValue) => {
                setvalueYear(newInputValue);
              }}
              sx={{ width: 600 }}
              renderInput={(params) => <TextField {...params} label="Year" />}
            />
          </Box>
        </Box>
        <Button
          sx={{ bgcolor: "green", mt: 2, ml: -3 }}
          onClick={() => DetailPage()}
          variant="contained"
        >
          Cari
        </Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Pembelian
      </TabPanel>
    </Box>
  );
}
