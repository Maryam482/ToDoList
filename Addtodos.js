import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Todos from './Todos';
import Button1 from './Button1'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
   
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '10px 12px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
  })) ;
function AddTodo() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [todos, settodos] = useState([{title:'buy milk', id: 1},{title:'prepare tea', id: 2}])
    const [task, settask] = useState({title:'', id:''})
  const handleChange=(e)=>{
      //  console.log('i am in handle change')
        settask({title:e.target.value,id:uuidv4()})

    }
 const handleSubmit=(e)=>{
     e.preventDefault();
       console.log('i a/m in handle submit')
        settodos([...todos, task])
        e.target.firstChild.value='';

    }
    //console.log(task)
     console.log(todos)
    return (
        <div>
            <Card  variant="outlined">
      <CardContent>
      <Typography variant="h5" component="h2">
            TO{bull}DO{bull}LIST
        </Typography>
        {/* <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange}></input>
                <Button1 type="submit" text="ADD" />
            </form> */}
            <FormControl className={classes.margin} onClick={handleSubmit}>
        <InputLabel htmlFor="input-with-icon-adornment">Enter your todos</InputLabel>
        <Input
          id="input-with-icon-adornment"
          type= "text"
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        
        />
         <Button1 type="submit" text="ADD" />
        </FormControl>
            <Todos todolist = {todos}/>
      
      </CardContent>
    </Card>
        </div>
    )
}

export default AddTodo