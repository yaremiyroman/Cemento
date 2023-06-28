import React, { useState, useEffect, useRef } from "react";
import FileUpload from './components/FileUpload';
import Table from './components/Table';
import AppBrand from './components/AppBrand';
import TableHeader from './components/TableHeader';
import { getData, initDB } from './dbService';
import styled from 'styled-components';
import { Drawer, Button, FormControl, FormLabel, FormGroup, Checkbox, FormControlLabel, TextField } from '@mui/material';

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AppBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 10vh;
  width: 100%;
  padding: 0 10px;
`;

const FilterWrapper = styled.div`
  display: flex;
`;

const SearchWrapper = styled.div`
  display: flex;
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

  const getAllData = () => {
    getData('Rows').then((data) => {
      setRowsData(data);
      setRows(data);
    });
    getData('Columns').then((data) => {
      setCols(data);
      setFilters(data.map(col => col.id));
    });
  }

  useEffect(() => {
    initDB();
    getAllData();
  }, []);

  return (
    <AppContainer>
      <AppBar>


        <AppBrand />

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


        <FileUpload getAllData={getAllData} />

      </AppBar>


      <TableHeader cols={cols} filters={filters} />
      <Table rows={rows} cols={cols} filters={filters} />
    </AppContainer>
  );
}

export default App;
