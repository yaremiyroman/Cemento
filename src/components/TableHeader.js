import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.23);
  padding-right: 10px;
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const TableHeader = ({ cols, filters }) => {
  return (
    <Container>
      {cols
        .filter((col) => filters.includes(col.id))
        .map((col) => (
          <Cell key={col.id} style={{ flex: col.width || 1, order: col.ordinalNo }}>
            {col.title}
          </Cell>
        ))}
    </Container >
  );
}

export default TableHeader;
