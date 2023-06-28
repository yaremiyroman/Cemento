import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 5vh;
  background: grey;
  display: flex;
`;

const TableHeader = ({ cols, filters }) => {
  // if (!cols.length) return null;

  return (
    <Container>
      {cols
        .filter((col) => filters.includes(col.id))
        .map((col) => (
          <div key={col.id} style={{ flex: col.width || 1, order: col.ordinalNo }}>
            {col.title}
          </div>
        ))}
    </Container >
  );
}

export default TableHeader;
