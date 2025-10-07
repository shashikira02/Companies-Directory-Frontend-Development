import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const Dropdown = ({label, value, onChange, options, placeholder, styles, size='small'}) => {
  return (
    <FormControl size={size} className={`min-w-[150px] ${styles}`}>
      <InputLabel >{label}</InputLabel>
      <Select value={value} label={label} onChange={onChange} displayEmpty >
        <MenuItem value="" >{placeholder}</MenuItem>
        {options.map(option =>(
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default Dropdown;