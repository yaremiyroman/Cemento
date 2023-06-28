import React, { useState, useEffect } from "react";
import FileUpload from './components/FileUpload';
import Table from './components/Table';
import AppBrand from './components/AppBrand';
import TableHeader from './components/TableHeader';
import { getData, initDB } from './dbService';
import styled from 'styled-components';
import { Drawer, Button, FormControl, FormLabel, FormGroup, Checkbox, FormControlLabel, FormHelperText } from '@mui/material';

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const UploadWrapper = styled.div`
  display: flex;
  width: 25%;
  height: 5vh;
  background: gainsboro;
`;

const FilterWrapper = styled.div`
  display: flex;
  width: 25%;
  height: 5vh;
  background: paleturquoise;
`;

const SearchWrapper = styled.div`
  display: flex;
  width: 25%;
  height: 5vh;
  background: palevioletred;
`;

const App = _ => {
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);
  const [filtersIsOpen, setFiltersIsOpen] = useState(false);
  const [filters, setFilters] = useState([]);

  const handleChange = (event, id) => {
    if (!event.target.checked) {
      setFilters(filters.filter(filter => filter !== id));
    } else {
      setFilters([...filters, id]);
    }
  };

  useEffect(() => {
    initDB();
    getData('Rows').then((data) => setRows(data));
    getData('Columns').then((data) => {
      setCols(data);
      setFilters(data.map(col => col.id));
    });
  }, []);

  return (
    <AppContainer className="App">
      <AppBrand />
      <UploadWrapper>
        <FileUpload />
      </UploadWrapper>
      <FilterWrapper>
        <Button onClick={() => setFiltersIsOpen(!filtersIsOpen)}>Filters</Button>
        <Drawer
          anchor="left"
          open={filtersIsOpen}
          onClose={() => setFiltersIsOpen(false)}
        >
          <FormControl component="fieldset">
            <FormLabel component="legend">Filter columns:</FormLabel>
            <FormGroup>
              {cols.map(({ title, id }) => (
                <FormControlLabel
                  key={id}
                  control={
                    <Checkbox
                      checked={filters.includes(id)}
                      onChange={(e) => handleChange(e, id)}
                      name={title}
                      disabled={filters.length === 1 && filters.includes(id)}
                    />
                  }
                  label={title}
                />
              ))}
            </FormGroup>
            <FormHelperText>Choost what you want what you want what you want </FormHelperText>
          </FormControl>
        </Drawer>
      </FilterWrapper>
      <SearchWrapper>
        SearchWrapper
      </SearchWrapper>
      <TableHeader cols={cols} filters={filters} />
      <Table rows={rows} cols={cols} filters={filters} />
    </AppContainer>
  );
}

export default App;
