import React, { useState } from "react";
import { putData } from '../dbService';

export default function ({ children }) {
  const [file, setFile] = useState(false);

  const handleChange = e => {
    const handleputData = async (data) => {
      const status = await putData(data);
    };

    const fileReader = new FileReader();

    fileReader.readAsText(e.target.files[0], "UTF-8");

    fileReader.onload = e => {
      setFile(true);
      handleputData(e.target.result);
    };
  };

  return <input type="file" onChange={handleChange} />;
}