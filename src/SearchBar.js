import React from 'react';
import {TextField, InputAdornment, makeStyles} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  input: {
    width: '100%'
  }
});

const SearchBar = ({value, onChange}) => {
  const classes = useStyles();
  
// const simulateChangeOnInput = (wraper, inputSelector) 
  return (
    <TextField
      className={classes.input}
      label='Search for repos...'
      type='search'
      placeholder='search'
      name='search'
      variant='outlined'
      InputProps={{
        endAdornment: (
          <InputAdornment position='end' data-testid="search-button">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      value={value}
      onChange={e =>  onChange(e.target.value)}
    />
  );
};

export default SearchBar;