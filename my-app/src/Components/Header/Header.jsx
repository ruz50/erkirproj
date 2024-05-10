import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { textAC } from '../../store/store';
import { countriesAPI} from '../../api/api';
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';

export default function Header({ dispatch, state }) {
  const [value, setValue] = React.useState('one');
  const region = ['Europe', 'Asia', 'Africa', 'Americas', 'Oceania'];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (state.text.length > 2) {
      setOpen(true)
      countriesAPI.getSearch(dispatch, state.text)
    } else {
      setOpen(false)
    }
  }, [state.text]);

  return (
    <Box sx={{ width: '100%', margin: '20px' }} >
      <Box sx={{ marginBottom: '20px' }} >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="All" />
          {region.map((e, index) => (
            <Tab
              key={index}
              value={e}
              label={e}
              onClick={() => countriesAPI.getRegion(dispatch, e)} />
          ))}
        </Tabs>
      </Box>

      <Box sx={{ marginBottom: '20px' }}>
        <TextField
          id="filled-basic"
          label="Search"
          variant="filled"
          placeholder=""
          onChange={(e) => dispatch(textAC(e))}
        />
        <div className='o'>
          {open && <Search state={state} setOpen={setOpen} />}
        </div>
      </Box>
    </Box>
  );
}