import React, { useState, useEffect } from "react";
import { getStoreData } from '../dbService';
import { List } from "react-virtualized";
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
`;

const TableContainer = styled(List)`
  display: flex;
  width: 100% !important;
`;

const Table = ({ rows }) => {
  if (!rows.length) return null;

  console.log('rows > ', rows);

  const renderRow = ({ index, key, style }) => (
    <Row
      key={rows[index].rowId}
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
    <TableContainer
      width={1200}
      height={700}
      // autoHeight={true}
      rowRenderer={renderRow}
      rowCount={rows.length}
      rowHeight={200}
    />
  );
}

export default Table;
