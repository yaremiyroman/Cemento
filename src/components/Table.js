import React, { useState, useEffect } from "react";
import { getStoreData } from '../dbService';

const Table = ({ rows }) => {
  if (!rows.length) return null;

  console.log('rows > ', rows);

  return (
    <div>
      {rows.map(({ id, rowId }) => (
        <div key={rowId}>
          <div>
            {rowId}
          </div>
          <div>
            {id}
          </div>
          <div>
            {rowId}
          </div>
          <div>
            {id}
          </div>
          <div>
            {rowId}
          </div>
          <div>
            {id}
          </div>
          <div>
            {rowId}
          </div>
          <div>
            {id}
          </div>
          <div>
            {rowId}
          </div>
          <div>
            {id}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table;
