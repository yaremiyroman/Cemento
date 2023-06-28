import React, { useState, useEffect, useRef } from "react";
import { updateData } from "../dbService";
import { Select, MenuItem } from '@mui/material';

const defaultOptions = [
    "Male",
    "Female"
];

const SelectComponent = ({ value, rowData, col }) => {
    const [selected, setSelected] = useState(!!value ? value.selected : null);
    const firstRender = useRef(true);

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
        } else {
            updateData(
                rowData.id,
                {
                    [col.id]: {
                        options: !!value ? rowData[col.id].options : defaultOptions,
                        selected: selected
                    }
                }
            );
        };
    }, [selected]);

    console.log('selected  > ', selected);

    return (
        <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={selected || ''}
            onChange={handleChange}
            style={{ width: "100%" }}
        >
            {(!!value ? value.options : defaultOptions).map(option => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
        </Select>
    );
}

export default SelectComponent;
