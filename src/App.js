import React, { useState, useEffect } from "react";
import FileUpload from './components/FileUpload';
import Table from './components/Table';
import { getStoreData } from './dbService';

const App = _ => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    getStoreData('Rows').then((data) => setFiles(data));
  }, []);

  return (
    <div className="App">
      <div>Cemento</div>
      <FileUpload />
      <Table rows={files} />
    </div>
  );
}

export default App;
