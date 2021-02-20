import React, {useState} from 'react';
import {Typography, Container, makeStyles} from "@material-ui/core";
import RepositoryList from "./RepositoryList";
import SearchBar from "./SearchBar";
import { ApolloProvider } from '@apollo/react-hooks';
import client from './Client';
import Routes from './Routes';
import {BrowserRouter, Switch, Link} from 'react-router-dom';
const useStyles = makeStyles({
  title: {
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    backgroundColor: 'grey'
  },
  body: {

    width:"50%",
    marginLeft: "auto",
    marginRight: "auto"

 
  },

});

const Home = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');


  return (
      <Container maxWidth={'xl'}  className={classes.main} >
    <ApolloProvider client={client}>
  
      <div className={classes.body}>
      <span className="input-group-btn">
       <Link to="/login" >Click to login</Link>
      </span>
      <Typography variant={'h3'} className={classes.title}>   
     Issue Tracker <br></br>
     <img
                        src={process.env.PUBLIC_URL + "github.png"} 
                          style={{width:'100px',height:'100px',borderRadius:'35%'}}
                          alt="MercyJemosop" 
                          className="Issue Tracker"
                     
                          /> 
            
                  </Typography> 
   <SearchBar value={searchTerm} onChange={setSearchTerm}/>
    <RepositoryList searchTerm={searchTerm}/>
       </div> 

    </ApolloProvider>  </Container> 

  );
};

export default Home;
