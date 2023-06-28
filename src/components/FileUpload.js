import React, { useState } from "react";
import styled from 'styled-components';
import { putData } from '../dbService';

const InputContainer = styled.label`
  font-size: 44px;
  margin-left: auto;
  color: green;
  font-weight: bold;
  cursor: pointer;
  margin-top: -5px;
`;

const InputControl = styled.input`
  display: none;
`;

export default function ({ getAllData }) {
  const handleChange = e => {
    const handleputData = async (data) => {
      await putData(data);
    };

    const fileReader = new FileReader();

    fileReader.readAsText(e.target.files[0], "UTF-8");

    fileReader.onload = e =>
      handleputData(e.target.result).then(res => getAllData());
  };

  return (
    <InputContainer alt="asdf">
      ⇪
      <InputControl type="file" onChange={handleChange} />
    </InputContainer>
  );
}