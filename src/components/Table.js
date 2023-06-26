import React, { useState, useEffect } from "react";
import { getStoreData } from '../dbService';
import { List } from "react-virtualized";

const Table = ({ rows }) => {
  if (!rows.length) return null;

  console.log('rows > ', rows);

  const renderRow = ({ index, key, style }) => (
    <div className={rows[index].rowId}>
      <div key={rows[index].rowId} style={{ display: 'flex' }}>
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
      </div>
    </div>
  );

  return (
    <List
      width={1200}
      height={700}
      rowRenderer={renderRow}
      rowCount={rows.length}
      rowHeight={120}
    />
  );
}

export default Table;
