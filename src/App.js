import React, { useState, useEffect } from "react";
import FileUpload from './components/FileUpload';
import Table from './components/Table';
import { getStoreData } from './dbService';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AppBrand = styled.div`
  display: flex;
  width: 50%:
`;

const Upload = styled(FileUpload)`
  display: flex;
  width: 50%:
`;

const App = _ => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    getStoreData('Rows').then((data) => setFiles(data));
  }, []);

  return (
    <AppContainer className="App">
      <AppBrand>Cemento</AppBrand>
      <Upload />
      <Table rows={files} />
    </AppContainer>
  );
}

export default App;
