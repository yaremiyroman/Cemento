import React, { useState, useEffect } from "react";
import FileUpload from './components/FileUpload';
import Table from './components/Table';
import { getStoreData, initDB } from './dbService';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AppBrand = styled.div`
  display: flex;
  width: 50%;
  height: 10vh;
  background: palegoldenrod;
  `;
  
  const UploadWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 10vh;
  background: gainsboro;
`;

const App = _ => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    initDB();
    getStoreData('Rows').then((data) => setFiles(data));
  }, []);

  return (
    <AppContainer className="App">
      <AppBrand>1Cemento</AppBrand>
      <UploadWrapper>
        <FileUpload />
      </UploadWrapper>
      <Table rows={files} />
    </AppContainer>
  );
}

export default App;
