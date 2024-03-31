import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({
  label,
  list,
  value,
  onChange,
  width = "100%",
}) {
  return (
    <Box sx={{ minWidth: 180 }}>
      <FormControl
        style={{
          width: width,
        }}
      >
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="value"
          onChange={onChange}
        >
          {list?.map((item) => {
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
