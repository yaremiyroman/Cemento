import React, { useState, useEffect } from "react";
import { updateData } from "../dbService";
import { TextField } from '@mui/material';

const String = ({ value, col, rowData, isNumber }) => {
    const [text, setText] = useState(value);

    useEffect(() => {
        const timerId = setTimeout(() => {
            updateData({
                ...rowData,
                [col.id]: text
            });
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
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
