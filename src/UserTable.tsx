import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& * th': {
        fontWeight: 'bold',
      },
    },
  }),
);

function UserTable() {

    const classes = useStyles();
    
    const [users, setUsers] = useState([
        {id: 1, firstname: "Hans", lastname: "Wurst", mail: "hans@wurst.de"},
        {id: 2, firstname: "Peter", lastname: "Lustig", mail: "peter@lustig.de"}
    ]);

    return (
        <TableContainer component={Paper} className={classes.root}>
            <Table>
                <TableHead>
                    <TableCell>Firstname</TableCell>
                    <TableCell>Lastname</TableCell>
                    <TableCell>Mail</TableCell>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.firstname}</TableCell>
                            <TableCell>{user.lastname}</TableCell>
                            <TableCell>{user.mail}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UserTable
