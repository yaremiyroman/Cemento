import React from "react";
import styled from 'styled-components';

const Container = styled.h1`
  margin: auto;
  display: flex;
  height: 90vh;
  align-items: center;
  font-size: 48px;
  text-align: center;
  max-width: 40%;
`;

const Placeholder = _ => <Container>Use green arrow to load your JSON</Container>;

export default Placeholder;
