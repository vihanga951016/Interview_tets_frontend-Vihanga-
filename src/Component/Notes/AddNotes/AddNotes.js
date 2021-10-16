import React , {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './AddNotes.css'

const AddNotes = () => {

    const [noteTitle, setnoteTitle] = useState('')
    const [noteBody, setnoteBody] = useState('')

    const addNotes = () => {
        axios.post(`http://localhost:4040/note/add`, {
            noteTitle , noteBody
        })
    }

    return (
        <div>
            <br/><br/>
            <div  className="add-form">
            <h1>Create new note</h1>
            <form>
                <label>Note Header</label><br/>
                <input style={{width:'60%', height:'30px', fontSize: '15px'}} id="area" type="text" value={noteTitle} onChange={(e) => setnoteTitle(e.target.value)} required/><br/><br/>
                <label>Note Body</label><br/>
                <textarea style={{width:'60%', height:'70px', fontSize: '15px'}} type="text" value={noteBody} onChange={(e) => setnoteBody(e.target.value)} required/><br/><br/>
                <Link to="/"><input id="submit-button" type="submit" value="Submit" onClick={addNotes}/></Link>
                <Link to="/"><input id="cancel-button" type="submit" value="Cancel" style={{marginLeft:'10px'}}/></Link>
             </form>
             </div>
        </div>
    )
}

export default AddNotes
