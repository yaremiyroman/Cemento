import React, { useState } from "react";
import { TextField } from '@mui/material';
import Bool from "./Bool";
import String from "./String";
import Select from "./Select";

const Cell = ({ col, cellKey, value }) => {
  let cellControl;

  switch (col.type) {
    case 'string':
      cellControl = <String value={value} />
      break;

    case 'boolean':
      cellControl = <Bool value={value} />
      break;

    case 'number':
      cellControl = <String value={value} isNumber={true} />
      break;

    case 'selection':
      cellControl = <Select value={value} col={col} />
      break;

  }

  return cellControl;
}

export default Cell;
