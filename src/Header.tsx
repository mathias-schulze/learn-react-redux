import React from 'react'
import { Grid, Badge } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import PeopleIcon from '@material-ui/icons/People';
import { useSelector } from 'react-redux'
import { getCount } from './usersSlice'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '40pt',
      '& > *': {
        margin: theme.spacing(3),
      },
    },
  }),
);

function Header() {

    const classes = useStyles();
    const count = useSelector(getCount)

    return (
        <div className={classes.root}>
            <Grid container alignItems="stretch" justify="flex-end">
                <Grid item xs={10}/>
                <Grid item xs={2}>
                    <Badge badgeContent={count} color="secondary">
                        <PeopleIcon color="primary" fontSize="large"/>
                    </Badge>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header
