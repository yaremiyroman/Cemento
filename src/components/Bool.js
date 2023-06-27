import React, { useState, useEffect } from "react";
import { Checkbox } from '@mui/material';
import { updateData } from "../dbService";

const Bool = ({ value, col, rowData }) => {
    const [checked, setChecked] = useState(value);
    console.log('rowData > ', rowData);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        updateData({
            ...rowData,
            [col.id]: checked
        });
    }, [checked]);

    return (
        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
}

export default Bool;
