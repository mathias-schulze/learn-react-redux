import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, Paper, TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { addUser } from './usersSlice'
import User from './user'

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
    const [newUser, setNewUser] = useState<User>({
      id: 0,
      firstname: "",
      lastname: "",
      mail: "",
    } as User);
    const dispatch = useDispatch()

    return (
        <Paper>
          <form  className={classes.root} onSubmit={(e) => {
            e.preventDefault()
            dispatch(addUser(newUser))
            setNewUser({
              id: 0,
              firstname: "",
              lastname: "",
              mail: "",
            } as User)
          }}>
            <TextField required label="Firstname" type="text" variant="outlined"
                value={newUser.firstname} onChange={e => setNewUser({...newUser, firstname: e.target.value})}/>
            <TextField required label="Lastname" type="text" variant="outlined"
                value={newUser.lastname} onChange={e => setNewUser({...newUser, lastname: e.target.value})}/>
            <TextField required label="Mail" type="email" variant="outlined"
                value={newUser.mail} onChange={e => setNewUser({...newUser, mail: e.target.value})}/>
            <Button variant="contained" color="primary" type="submit">
              Add
            </Button>
          </form>
        </Paper>
    )
}

export default Form