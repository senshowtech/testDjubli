import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";
import { selectCar } from "../redux/carSlice";

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
  const cars = useSelector(selectCar);

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
              disablePortal
              id="combo-box-demo"
              options={merk}
              sx={{ width: 600 }}
              renderInput={(params) => <TextField {...params} label="Model" />}
            />
          </Box>
          <Box sx={{ ml: "20px", mt: "20px" }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={merk}
              sx={{ width: 600 }}
              renderInput={(params) => (
                <TextField {...params} label="Model Year" />
              )}
            />
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Pembelian
      </TabPanel>
    </Box>
  );
}
