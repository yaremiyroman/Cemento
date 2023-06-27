import React, { useState, useEffect } from "react";
import { updateData } from "../dbService";
import { Select, MenuItem } from '@mui/material';

const SelectComponent = ({ value, rowData, col }) => {
    const [selected, setSelected] = useState(value.selected);

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    useEffect(() => {
        updateData({
            ...rowData,
            [col.id]: {
                ...rowData[col.id],
                selected: selected
            }
        });
    }, [selected]);

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