import { useState } from 'react'
import uuid from 'react-uuid'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const newNote = {
      id: uuid(),

      title: "Untitled Note",

      body: "",

      lastModified: Date.now(),
    };


    setNotes([newNote, ...notes]);
    console.log(notes);
  }


  return (
    <div className="App">
      <Sidebar notes={ notes } onAddNote={ addNote }/>
      <Main notes={ notes }/>
    </div>
  )
}

export default App
