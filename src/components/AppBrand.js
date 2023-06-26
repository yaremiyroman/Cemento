import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 50%;
  height: 10vh;
  background: palegoldenrod;
`;

const AppBrand = _ => {
  return (
    <Container>
      Cemento
    </Container >
  );
}

export default AppBrand;
