import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import QueueIcon from '@material-ui/icons/Queue';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '400px',
      fontSize: '20px',
      color: "white",
      outline: "none",
    },
  },
}));
function TodoForm(props) {
  const classes = useStyles();
  const [input, setInput] = useState('');
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    props.filter(document.querySelector(".select"));
    setInput('');
  };
  return (
    <form className="todoForm" autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        type="text"
        label="So what's next ?"
        id="standard-size-small"
        size="small"
        color="secondary"
        className="todoInput"
        className={classes.root}
        placeholder="Add to do"
        value={input}
        onChange={handleChange}
      />
      <Button
        type="submit"
        className="addTodo"
        variant="contained"
        color="secondary"
      >
        <QueueIcon />
        </Button>
    </form>
  );
}
export default TodoForm
