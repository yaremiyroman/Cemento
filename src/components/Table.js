import React, { useState, useEffect } from "react";
import { getStoreData } from '../dbService';
import { AutoSizer, List } from "react-virtualized";
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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

  console.log('rows > ', rows);

  const renderRow = ({ index, key, style }) => (
    <Row
      key={key}
      style={style}
      className={rows[index].rowId}
    >
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
      <div>{rows[index].rowId}</div>
      <div>{rows[index].id}</div>
    </Row>
  );

  return (
    <div style={{ width: "100%", height: "90vh", background: "darkcyan" }}>
      <AutoSizer>
        {({ width, height }) => {
          return (
            <TableContainer
              width={width}
              height={height}
              rowHeight={60}
              // rowRenderer={renderRow}
              rowCount={rows.length}
              rowRenderer={({ key, index, style }) => {
                const row = rows[index];
                return (
                  <div key={key} style={{ ...style }}>
                    <Row
                      key={key}
                      style={{ height: { height }, width: "100%" }}
                      className={row.rowId}
                    >
                      <div>{row.rowId}</div>
                    </Row>
                  </div>
                );
              }}
            />
          );
        }}
      </AutoSizer >
    </div >
  );
}

export default Table;
