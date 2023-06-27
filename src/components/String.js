import React, { useState, useEffect } from "react";
import { TextField } from '@mui/material';
import { updateData } from "../dbService";

const String = ({ value, col, rowData, isNumber }) => {
    const [text, setText] = useState(value);

    useEffect(() => {
        updateData({
            ...rowData,
            [col.id]: text
        });
    }, [text]);

    return (
        <TextField
            id="outlined-required"
            value={text}
            type={isNumber ? 'number' : 'text'}
            onChange={event => setText(event.target.value)}
            style={{ width: "100%" }}
        />
    );
}

export default String;
