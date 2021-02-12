import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    todoItem: {
        background: "#121212",
        color: "white",
        marginTop: '20px',
        paddingLeft: '20px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '70px',
        fontSize: '22px',
    },
    todoItemDone: {
        opacity: "0.9",
        background: "#f73378",
        color: "white",
        marginTop: '20px',
        paddingLeft: '20px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '70px',
        fontSize: '22px',
    },
    delete: {
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "5px",
        marginLeft: "5px",
        '&:hover': {
            color:"#f73378",
        },
    },
}));
function Todo({todos,completeTodo,removeTodo}) {
    const classes = useStyles();
    return (
        todos.map((todo,index) => {
            return (
                <div className="todoHolder" key={index} name={todo.isComplete ? "completed" : "notCompleted"}>
                    <Paper className={todo.isComplete ? classes.todoItemDone : classes.todoItem} key={index}>
                        <div className="todoText" key={todo.id} onClick={() => completeTodo(todo.id)}>
                            {todo.text}
                        </div>
                        <IconButton onClick={() => removeTodo(todo.id)} aria-label="delete">
                            <DeleteIcon className={classes.delete} fontSize="small"/>
                        </IconButton>
                    </Paper>
                </div>
            )
        })
    )
}
export default Todo
