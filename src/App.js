import React, { useState, useEffect } from "react";
import FileUpload from './components/FileUpload';
import Table from './components/Table';
import AppBrand from './components/AppBrand';
import { getData, initDB } from './dbService';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const UploadWrapper = styled.div`
  display: flex;
  width: 50%;
  height: 10vh;
  background: gainsboro;
`;

const App = _ => {
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);

  useEffect(() => {
    initDB();
    getData('Rows').then((data) => setRows(data));
    getData('Columns').then((data) => setCols(data));
  }, []);

  return (
    <AppContainer className="App">
      <AppBrand />
      <UploadWrapper>
        <FileUpload />
      </UploadWrapper>
      <Table rows={rows} cols={cols} />
    </AppContainer >
  );
}

export default App;
