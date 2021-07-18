import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    }
  });

function ListCard(props) {
    const classes = useStyles();

    return (
        <>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <p>{props.title} List</p>
                    <p>No. of Items: {props.items.length}</p>
                </CardContent>
                <CardActions>
                    {/* <Button size="small" variant="contained" color="primary" onClick={() => <Link to={`/something`}></Link>}>View List</Button> */}
                    <Button size="small" variant="contained" color="primary" href={`list/${props.id}`}>View List</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default ListCard