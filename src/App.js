import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  paperBox: {
    background: "#1d1d1d",
    marginTop: "100px",
    width: "800px",
    minHeight: "600px",
    padding: "100px 50px 100px 50px",
    display: "flex",
    justifyContent: "center",
  },
}));
function App() {
    const classes = useStyles();
    return (
      <div>
        <div className="propBefore" />
        <Paper className={classes.paperBox}>
          <TodoList />
        </Paper>
        <div className="propAfter" />
      </div>
    )
}
export default App;