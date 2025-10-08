import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Dropdown = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  styles,
  size = "medium",
}) => {

  return (
    <FormControl
      size={size}
      fullWidth
      className={`${styles}`}
      variant=""
    >
      <InputLabel
        id={`${label}-label`}
        sx={{ fontSize: "1rem", bgcolor: "#fff", px: 0.5 }}
      >
        {label}
      </InputLabel>
      <Select
        
        // labelId={`${label}-label`}
        value={value}
        // label={label}
        onChange={onChange}
        displayEmpty
        inputProps={{ "aria-label": 'Without label' }}
        sx={{
          bgcolor: "#fff",
          fontSize: "1rem",
          ".MuiSelect-select": { py: 1, color: "#212121" },
        }}
      >
        <MenuItem value="" sx={{ color: "#888" }}>
          {placeholder}
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
