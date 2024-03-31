import * as React from "react";
import { TextField } from "@mui/material";

export default function UnstyledInputBasic({
  placeholder,
  onChange,
  width = "100%",
  value,
  key,
}) {
  return (
    <TextField
      style={{
        width,
      }}
      id="outlined-controlled"
      placeholder={placeholder}
      onChange={(e) => onChange?.(e)}
      value={value} // Pass value as a prop
      type="text"
    />
  );
}
