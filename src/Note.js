import React from 'react'
import './Node.css'
function Note(props){

  function deleteNote(){
     props.deleteItem(props.id)
  }

  return(
    <>
    
        
        <div className="note_1" >
          <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className="btn1" onClick={deleteNote} >
            ×
            </button>
          </div>
        </div>
        
        
        </>
    )
}

export default Note