import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UpdateNotes = () => {

    const [id, setid] = useState(null);
    const [noteTitle, setnoteTitle] = useState('');
    const [noteBody, setnoteBody] = useState('');

    useEffect(() => {
        setid(localStorage.getItem('ID'))
        setnoteTitle(localStorage.getItem('Note Title'))
        setnoteBody(localStorage.getItem('Note Body'))
    }, []);

    const updateNote = () => {
        console.log(id)
        axios.put(`http://localhost:4040/note/update/${id}` , {
            id,
            noteTitle , 
            noteBody
        })
    }

    return (
        <div>
            <br/><br/>
            <h1>Update note</h1>
            <form >
                <label>Note Header</label><br/>
                <input style={{width:'60%', height:'30px', fontSize: '15px'}} type="text" value={noteTitle} onChange={(e) => setnoteTitle(e.target.value)}/><br/><br/>
                <label>Note Body</label><br/>
                <textarea id="area" style={{width:'60%', height:'70px', fontSize: '15px'}} type="text" value={noteBody} onChange={(e) => setnoteBody(e.target.value)} /><br/><br/>
                <Link to="/"><input id="submit-button"  type="submit" value="Submit" onClick={updateNote}/></Link>
                <Link to="/"><input id="cancel-button" type="submit" value="Cancel"/></Link>
             </form>
        </div>
    )
}

export default UpdateNotes
