import React, { useState } from "react";
import { TextField } from '@mui/material';

const String = ({ value, isNumber }) => {
    const [text, setText] = useState(value);

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
