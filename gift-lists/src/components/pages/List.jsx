import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    }
  });

function List(props) {
    const classes = useStyles();
    return (
        <>
            <h1>Your List</h1>
        </>
    )
}

export default List