import React, { useState, useEffect, useRef } from "react";
import FileUpload from './components/FileUpload';
import Table from './components/Table';
import AppBrand from './components/AppBrand';
import TableHeader from './components/TableHeader';
import { getData, initDB } from './dbService';
import styled from 'styled-components';
import { Drawer, Button, FormControl, FormLabel, FormGroup, Checkbox, FormControlLabel, FormHelperText, TextField } from '@mui/material';

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
  const [rowsData, setRowsData] = useState([]);
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);
  const [filtersIsOpen, setFiltersIsOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState('');
  const firstRender = useRef(true);

  useEffect(() => {
    const handleSearch = () => {
      const filteredRows = rowsData.filter(row => {
        return Object.entries(row).find(cell => {
          if (cell[0] !== 'id' && typeof cell[1] === 'string' || typeof cell[1] === 'number') {
            return `${cell[1]}`.includes(search);
          }
        })
      });

      console.log('filteredRows => ', filteredRows);
      setRows(filteredRows);
    }

    const timerId = setTimeout(() => {
      if (firstRender.current) {
        firstRender.current = false;
      } else {
        if (search.length >= 2) {
          handleSearch();
        } else {
          setRows(rowsData);
        }
      };

      return () => {
        clearTimeout(timerId);
      }
    }, 500);
  }, [search]);

  const handleFiltersChange = (event, id) => !event.target.checked
    ? setFilters(filters.filter(filter => filter !== id))
    : setFilters([...filters, id]);

  useEffect(() => {
    initDB();
    getData('Rows').then((data) => {
      setRowsData(data);
      setRows(data);
    });
    getData('Columns').then((data) => {
      setCols(data);
      setFilters(data.map(col => col.id));
    });
  }, []);


  console.log('rows => ', rows);

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
                      onChange={(e) => handleFiltersChange(e, id)}
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
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          onChange={event => setSearch(event.target.value)}
          value={search}
        />
      </SearchWrapper>
      <TableHeader cols={cols} filters={filters} />
      <Table rows={rows} cols={cols} filters={filters} />
    </AppContainer>
  );
}

export default App;
