import React from 'react';
import {Typography, Container, makeStyles} from "@material-ui/core";

import ReactLoginMS from "react-ms-login";

import GitHubLogin from 'react-github-login';
import "./App.css"
const useStyles = makeStyles({
  title: {
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  body: {
    width:"50%",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: 'center',
    // border: "solid #73AD21",
    marginTop: "70px",
    marginBottom: "70px",
    backgroundColor: '#d3d3d3'

  }

});

const Login = () => {

  const onSuccessGithub = (response) => {
    console.log(response.code);
  } 
  const uri='http://localhost:3000/search';
  const classes = useStyles();
  return (
    <div className="App" >
      <form className={classes.body}>
        <h1>Issue Tracker Login </h1>
        <br></br>
        <img
          src={process.env.PUBLIC_URL + "/images/github.png"} 
            style={{width:'100px',height:'100px',borderRadius:'35%'}}
            alt="MercyJemosop" 
            className="Issue Tracker"
        
            /> 
      <br></br>
      <br></br>
          {/*CLIENTID REDIRECTURI NOT CREATED YET*/}

          <GitHubLogin 
           clientId="3d4f3c95e01bb93e6906"
            onSuccess={onSuccessGithub}
            buttonText="LOGIN WITH GITHUB"
            className="btn"
            valid={true}
            redirectUri={uri}
            // className={classes.btn}
          />
          <br />
          <br />
          {/* CLIENTID REDIRECTURI NOT CREATED YET

          <ReactLoginMS 
             clientId="_"
             redirectUri="_" 
             cssClass="ms-login" 
             btnContent="LOGIN WITH MICROSOFT"
             responseType="token"
             handleLogin={(data) => console.log(data)}
          /> */}
           <br />
          <br />
      </form>

   </div>
  );
};

export default Login;
