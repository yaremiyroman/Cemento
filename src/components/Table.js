import React, { useState, useEffect } from "react";
import { AutoSizer, List } from "react-virtualized";
import Cell from './Cell';
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

const Table = ({ rows, cols }) => {
  if (!rows.length) return null;
  if (!cols.length) return null;

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
                <Row key={key} style={style} className={row.id}>
                  {Object.entries(row).map(([key, value]) => {
                    if (key !== 'id') {
                      const col = cols.find(col => col.id === key);

                      return (
                        <div key={key} style={{ flex: col.width || 1, order: col.ordinalNo }}>
                          <Cell col={col} rowData={row} value={value} />
                        </div>
                      );
                    }
                  })}
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
