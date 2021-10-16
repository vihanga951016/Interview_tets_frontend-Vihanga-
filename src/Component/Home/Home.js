import React , {useState , useEffect} from 'react'
import './Home.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Home = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4040/note/all`)
        .then((response) => {
            setNotes(response.data)
        })
    }, [notes])

    const fetchNotes = (noteDetails) => {
        let {id , noteTitle , noteBody} = noteDetails
        localStorage.setItem('ID', id)
        localStorage.setItem('Note Title', noteTitle)
        localStorage.setItem('Note Body', noteBody)
        console.log(noteDetails) 
    }

    const getNotes = () => {
        axios.get(`http://localhost:4040/note/all`)
            .then((response) => {
                setNotes(response.data);
            })
    }

    const deleteNotes = (id) => {
        axios.delete(`http://localhost:4040/note/delete/${id}`)
        .then(() => { getNotes()})
    }

    return (
        <div>
            <br/><br/>
            
            <div className="card-holder">

            <Link to="/add"><button className="create-button"><b>Create new note</b></button></Link>

                {notes.map((note) => 
                <ul className='note-card' key={note.id}>
                    <li><h3>{note.noteTitle}</h3></li>
                    <li><p>{note.noteBody}</p></li>
                    <li>
                        <div>
                            <button id="delete-button" onClick={() => deleteNotes(note.id)}>delete</button>
                            <Link to="/update"><button id="update-button" onClick={() => fetchNotes(note)}>update</button></Link>
                        </div>
                    </li>
                </ul>
                )}        
            </div>  
        </div>
    )
}

export default Home
