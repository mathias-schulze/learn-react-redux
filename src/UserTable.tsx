import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { getUsers } from './usersSlice'

const useStyles = makeStyles(theme =>
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
    const users = useSelector(getUsers)

    return (
        <TableContainer component={Paper} className={classes.root}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Firstname</TableCell>
                        <TableCell>Lastname</TableCell>
                        <TableCell>Mail</TableCell>
                    </TableRow>
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
