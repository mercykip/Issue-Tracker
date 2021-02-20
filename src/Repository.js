import React from 'react';
import IssueList from './IssueList';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,

  Chip,
  makeStyles
} from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles({
    root: {
      marginTop: '1rem',
      backgroundColor: '#d3d3d3'
    },
    summaryContainer: {
      flexDirection: 'column'
      
    },
    summaryHeader: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '1rem',
      
    },
    issues1:{
       backgroundColor:'white'
    },
    issues2:{
      backgroundColor: '#d3d3d3'
   },
    chip: {
      marginLeft: '0.5rem'
    },
    chip1: {
      marginLeft: '0.5rem',
      width:'100px'
    }
  });
  
  const Repository = ({repo, expanded, onToggled}) => {
    const {node: {name, descriptionHTML, owner: {login}, stargazers: {totalCount: totalStarCount}}} = repo;
    const classes = useStyles();
    return (
      <ExpansionPanel
        expanded={expanded}
        onChange={onToggled}
        className={classes.root}
      >
        <ExpansionPanelSummary classes={{content: classes.summaryContainer}}>
          <div className={classes.summaryHeader}>
            <Typography variant={'h6'}>{name}</Typography>
            {/* <Typography variant={'h4'}>{url}</Typography> */}
            <div>
              <Chip label={`by ${login}`} avatar={<PeopleIcon/>} className={classes.chip}/>
              <Chip label={totalStarCount} avatar={<StarIcon/>} className={classes.chip}/>
               
            </div>
          </div>
          <Typography
            variant={'caption'}
            dangerouslySetInnerHTML={{__html: descriptionHTML}}
            component={'div'}
          />
           <Chip label="ISSUES"  className={classes.chip1}/>
        </ExpansionPanelSummary>
       
        <ExpansionPanelDetails className={classes.issues1}>
        
          {expanded && (<IssueList className={classes.issues2} repoName={name} repoOwner={login}/>)}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  };
  
  export default Repository;