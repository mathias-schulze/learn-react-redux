import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Paper, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

function Form() {

    const classes = useStyles();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [mail, setMail] = useState("");

    return (
        <Paper className={classes.root}>
            <TextField required label="Firstname" type="text" variant="outlined"
                value={firstname} onChange={e => setFirstname(e.target.value)}/>
            <TextField required label="Lastname" type="text" variant="outlined"
                value={lastname} onChange={e => setLastname(e.target.value)}/>
            <TextField required label="Mail" type="email" variant="outlined"
                value={mail} onChange={e => setMail(e.target.value)}/>
            <Button variant="contained" color="primary">Add</Button>
        </Paper>
    )
}

export default Form