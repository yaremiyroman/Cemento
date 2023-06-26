import React, { useState } from "react";
import { initDB } from '../dbService';

export default function ({ children }) {
  const [file, setFile] = useState(false);

  const handleChange = e => {
    const handleInitDB = async (data) => {
      const status = await initDB(data);
    };

    const fileReader = new FileReader();

    fileReader.readAsText(e.target.files[0], "UTF-8");

    fileReader.onload = e => {
      setFile(true);
      handleInitDB(e.target.result);
    };
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
    </div>
  );
}