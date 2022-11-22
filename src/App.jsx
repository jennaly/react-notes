import { useState } from 'react'
import uuid from 'react-uuid'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  const [notes, setNotes] = useState([]);

  const [activeNote, setActiveNote] = useState(false);

  const addNote = () => {
    const newNote = {
      id: uuid(),

      title: "Untitled Note",

      body: "test",

      lastModified: Date.now(),
    };


    setNotes([newNote, ...notes]);
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote
      } 
      return note;
    })

    setNotes(updatedNotesArray);
  }

  const onDeleteNote = (idToDelete) => {
    const filteredNotes = notes.filter(note => note.id !== idToDelete);
    setNotes(filteredNotes)
  }

  const getActiveNote = () => {
    return notes.find(note => note.id === activeNote);
  }


  return (
    <div className="App">
      <Sidebar 
        notes={ notes } 
        onAddNote={ addNote } 
        onDeleteNote={ onDeleteNote }
        activeNote = { activeNote }
        setActiveNote={ setActiveNote }
      />

      <Main activeNote={ getActiveNote() } onUpdateNote={onUpdateNote}/>
    </div>
  )
}

export default App
