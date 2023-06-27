import React from "react";
import Bool from "./Bool";
import String from "./String";
import Select from "./Select";

const Cell = ({ col, value, rowData }) => {
  switch (col.type) {
    case 'string':
      return <String value={value} col={col} rowData={rowData} />

    case 'boolean':
      return <Bool value={value} col={col} rowData={rowData} />

    case 'number':
      return <String value={value} col={col} rowData={rowData} isNumber={true} />

    case 'selection':
      return <Select value={value} col={col} rowData={rowData} />
  }
}

export default Cell;
