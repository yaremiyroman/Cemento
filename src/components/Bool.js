import React, { useState, useEffect, useRef } from "react";
import { Checkbox } from '@mui/material';
import { updateData } from "../dbService";

const Bool = ({ value, col, rowData }) => {
    const [checked, setChecked] = useState(value);
    const firstRender = useRef(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
        } else {
            updateData(
                rowData.id,
                { [col.id]: checked }
            );
        };
    }, [checked]);

    console.log('rowData > ', rowData.id);
    return (
        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
}

export default Bool;
