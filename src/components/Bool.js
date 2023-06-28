import React, { useState, useEffect, useRef } from "react";
import { Checkbox } from '@mui/material';
import { updateData } from "../dbService";
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding: 7px 0px 6px;
  border-radius: 4px;
  justify-content: center;
`;

const Bool = ({ value, col, rowData }) => {
    const [checked, setChecked] = useState(!!value ? value : false);
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

    return (
        <CheckboxContainer>
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </CheckboxContainer>
    );
}

export default Bool;
