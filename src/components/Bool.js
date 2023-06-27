import React, { useState } from "react";
import { Checkbox } from '@mui/material';

const Bool = ({ value }) => {
    const [checked, setChecked] = useState(value);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
}

export default Bool;
