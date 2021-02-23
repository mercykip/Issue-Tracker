import React, {useState} from 'react';
import {Dialog, DialogContent, ListItem, ListItemText,Typography, Container, makeStyles} from '@material-ui/core'


const useStyles = makeStyles({
  title: {
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    backgroundColor: 'white',
    fontSize:'32px'
  }
});

const Issue = ({title, bodyHTML}) => {
  const classes = useStyles();
  const [dialogOpened, setDialogOpened] = useState(false);
  return (
    <>
     <Container >
      <ListItem button onClick={() => setDialogOpened(true)} className={classes.title}>
        <ListItemText >{title}</ListItemText>
        <button type="button">Description</button>
     
      </ListItem>
    
      <Dialog maxWidth={'xl'} open={dialogOpened} onClose={() => setDialogOpened(false)}>
        <DialogContent>
          <div dangerouslySetInnerHTML={{__html: bodyHTML}}/>
        </DialogContent>
      
      </Dialog>
      </Container>
    </>
  );
};

export default Issue;
