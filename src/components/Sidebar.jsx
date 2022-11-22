import React from 'react'

const Sidebar = ({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) => {

    // sort most recently edited note to the top
    const sortedNotes = notes.sort((a,b) => b.lastModified - a.lastModified)


    return (
    <div className="app-sidebar">

        <div className="app-sidebar-header">
            <h1>Notes</h1>
            <button onClick={ onAddNote }>Add</button>
        </div>

        <div className="app-sidebar-notes">

            {sortedNotes.map(note => {
                return (
                    <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
                        <div className="sidebar-note-title">
                            <strong>{note.title}</strong>
                            <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                        </div>

                        {/* only display first 100 characters from the note's body */}
                        <p>{note.body && note.body.substr(0, 100) + "..."}</p>

                        {/* display date and time  */}
                        <small className="note-meta">
                            Last modified{" "}
                            {new Date(note.lastModified).toLocaleDateString("en-GB", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })} 
                        </small>
                    </div>
                )
            })}
           
        </div>
    </div>
  )
}

export default Sidebar