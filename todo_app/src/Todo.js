import React, { useState } from 'react'
import './Todo.css'
import { List, ListItemAvatar, ListItem, ListItemText, Modal, Box, Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import db from './Firebase'
// import makeStyles from '@mui/material/styles';

// const useStyles = makeStyles((theme) => ({
//     paper: {
//         position: 'absolute',
//         width: 400,
//         bgcolor: 'background.paper',
//         border: '2px solid #000',
//         boxShadow: 24,
//         p: 4,
//     }
// }))

const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
  };

function Todo(props) {
    // const classes = style
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState('')

    // const handleOpen = () => {
    //     setOpen(true)
    // }

    // const handleClose = () => {
    //     setOpen(false)
    // }

    const updateTodo = () => {
        // Update the todo with the new input text

        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true})
        setOpen(false)
    }

  return (
    <>
    <Modal 
        open={open}
        onClose={e => setOpen(false)}
    >
        <Box sx={style}>
            <div>
                <h1>I am a modal</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateTodo}>Update Todo</Button>
            </div>
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
        </Box>
    </Modal>
    <List className='todo_list'>
        <ListItem>
            <ListItemAvatar>
            </ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary="Dummy deadline"/>
        </ListItem>

        <button onClick={e => setOpen(true)}>Edit</button>
        <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
    </List>
    </>
  )
}

export default Todo