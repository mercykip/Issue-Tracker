import {useQuery} from '@apollo/react-hooks';
import {CircularProgress, List, Typography, makeStyles} from '@material-ui/core';
import React from 'react';
import Issue from "./Issue";
import {GET_REPO_ISSUES} from './queries';
import "./App.css";
import {useState} from 'react';
const useStyles = makeStyles({
  root: {
    flexDirection: 'column'
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  issues:{
    backgroundColor: 'white'
 },
 issues1:{
  backgroundColor: '#d3d3d3'
},
issues2:{
  backgroundColor: 'green'
},
hr:{
color: 'white'
}
});

const IssueList = ({repoName, repoOwner}) => {
  const classes = useStyles();
  const {data, loading, error} = useQuery(GET_REPO_ISSUES,
    {variables: {
        name: repoName,
        owner: repoOwner
      }});
const [searchTerm, setSearchTerm] = useState('');
  if (loading) {
    return (
      <div className={classes.spinnerContainer}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Typography
        variant={'overline'}
        component={'div'}
        color={'error'}
      >
        {error}
      </Typography>
    )
  }

  if (!data.repository.issues.nodes.length) {
    return (
      <Typography
        variant={'overline'}
        component={'div'}
      >
        There are no issues!
      </Typography>
    )
  }

  return (
    <div className={classes.root}>
      <Typography variant={'h5'}>Latest issues: </Typography>
      <div> <List className={classes.issues1}>
         <input type="text" placeholder= "filter results" className="inputField" onChange={event => {setSearchTerm(event.target.value)}} />

         {data.repository.issues.nodes.filter((val) => {
             if(searchTerm == " "){
               return val
             }
             else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
              return val
             }
             else{
              <Typography
              variant={'overline'}
              component={'div'}
              >
              There are no issues matches your search
            </Typography>
             }
            }
         ).map(issue => (
          <Issue className={classes.issues1}
          id={issue.id} 
           title={issue.title}  
           bodyHTML={issue.bodyHTML}    />
         ))}
          </List>
      </div>
     
   
    </div>
  );
};

export default IssueList;