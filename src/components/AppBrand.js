import React from "react";
import styled from 'styled-components';
import logo from '../cemento_32x32.svg';

const Logo = styled.img`
  display: block;
  height: fit-content;
`;

const AppBrand = _ => <Logo src={logo} alt="Cemento" />;

export default AppBrand;
