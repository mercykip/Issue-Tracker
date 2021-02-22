import {useQuery} from '@apollo/react-hooks';
import {CircularProgress, List, Typography, makeStyles} from '@material-ui/core';
import React from 'react';
import Issue from "./Issue";
import {GET_REPO_ISSUES} from './queries';
import "./App.css";
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
      <select className="cselect" >
        <option value="Bug">Bug</option>
        <option value="Error">Error</option>
      </select>
      <List className={classes.issues1}>
        {data.repository.issues.nodes.map(issue => (
          <Issue className={classes.issues1} title={issue.title}        />

        ))}<br/>
        {data.repository.issues.nodes.map(issue => (
          <Issue className={classes.issues2}       bodyHTML={issue.bodyHTML} />

        ))}<br/>
      </List>
    </div>
  );
};

export default IssueList;