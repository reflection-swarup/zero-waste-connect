import React from "react";
import TextField from "@mui/material/TextField";

const InputField = ({ type, label, name, value, onChange }) => {
  return (
    <TextField
      type={type}
      label={label}
      name={name} // Ensure the name is passed
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      margin="normal"
      required
    />
  );
};

export default InputField;
