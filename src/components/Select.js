import React, { useState } from "react";
import { Select, MenuItem } from '@mui/material';

const SelectComponent = ({ value }) => {
    const [selected, setSelected] = useState(value.selected);

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    return (
        <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={selected}
            onChange={handleChange}
            style={{ width: "100%" }}
        >
            {value.options.map(option => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
        </Select>
    );
}

export default SelectComponent;
