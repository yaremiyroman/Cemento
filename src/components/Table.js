import React, { useState, useEffect } from "react";
import { AutoSizer, List } from "react-virtualized";
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 90vh;
  background: darkcyan;
`;

const Row = styled.div`
  display: flex;
  border: 1px solid #657786;
  border-radius: 4px;
  background-color: #1da1f2;
  color: white;
`;

const TableContainer = styled(List)`
  display: flex;
  width: 100%;

  .ReactVirtualized__Grid__innerScrollContainer {
    width: 100% !important;
   }
`;

const Table = ({ rows }) => {
  if (!rows.length) return null;

  return (
    <Container>
      <AutoSizer>
        {({ width, height }) => (
          <TableContainer
            width={width}
            height={height}
            rowHeight={60}
            rowCount={rows.length}
            rowRenderer={({ key, index, style }) => {
              const row = rows[index];
              return (
                <Row key={key} style={style} className={row.rowId}>
                  {row.rowId}
                </Row>
              );
            }}
          />
        )}
      </AutoSizer >
    </Container >
  );
}

export default Table;
