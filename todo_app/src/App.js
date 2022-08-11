import { useEffect, useState } from 'react'
import Todo from './Todo'
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import './App.css';
import db from "./Firebase"
import firebase from 'firebase/compat/app';

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  // When the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here, fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(snapshot.docs.map(doc => doc.data()));
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, [])

  const addTodo = (event) => {
    // This will fire off when we click the button
    event.preventDefault() // will stop the refresh

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // console.log('Working!!!');
    // setTodos([...todos, input])
    setInput('') // clear up the input after clicking add todo button
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      <form action="">
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input type="text" value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
        {/* <button type='submit' onClick={addTodo}>Add Todo</button> */}
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
