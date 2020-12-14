import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
function Button1({type,text}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button variant="contained" color="secondary" type={type}>
                {text}
            </Button>
        </div>
    )
}

export default Button1
