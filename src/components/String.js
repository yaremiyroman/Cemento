import React, { useState, useEffect, useRef } from "react";
import { updateData } from "../dbService";
import { TextField } from '@mui/material';

const String = ({ value, col, rowData, isNumber }) => {
    const [text, setText] = useState(value);
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
        } else {
            const timerId = setTimeout(() => {
                updateData({
                    ...rowData,
                    [col.id]: text
                });
            }, 500);

            return () => {
                clearTimeout(timerId);
            };
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
