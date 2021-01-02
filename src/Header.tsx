import React, { useState } from 'react'
import { Grid, Badge } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import PeopleIcon from '@material-ui/icons/People';

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
    const [count, setCount] = useState(3);

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={10}/>
                <Grid item xs={2} alignItems="stretch" justify="flex-end">
                    <Badge badgeContent={count} color="secondary">
                        <PeopleIcon color="primary" fontSize="large"/>
                    </Badge>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header
