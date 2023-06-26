import React, { useState } from "react";
import { initDB } from '../dbService';

export default function ({ children }) {
  const [files, setFiles] = useState("");

  const handleChange = e => {
    const handleInitDB = async (data) => {
      const status = await initDB(data);
    };

    const fileReader = new FileReader();

    fileReader.readAsText(e.target.files[0], "UTF-8");

    fileReader.onload = e => {
      setFiles(e.target.result);
      handleInitDB(e.target.result);
    };
  };

  return (
    <>
      <h1>Upload Json file - Example</h1>
      1
      <input type="file" onChange={handleChange} />
      <br />
      {"uploaded file content -- " + files}
    </>
  );
}