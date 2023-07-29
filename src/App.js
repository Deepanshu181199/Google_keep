import Header from './Header.js'
import CreateNote from './CreateNote.js'
import Note from './Note.js'
import { useState } from 'react'

function App(){

    const [addItem, setAddItem] = useState([])

    function addNote(note){
        setAddItem((oldData)=>{
            return [...oldData, note]
        })
       
    }


    function onDelete(id){
        setAddItem((oldData1)=>
            oldData1.filter((currData, indx)=>{
                return indx !== id
            })
        )

    }

    return(
        <>
        <Header/>
        {/* ye humne props pass kiye kyuki hme button ko yha pr kaam krana h aur note component ko baar baar render krana h */}
        <CreateNote passNote={addNote}/>

<div style={{border:"2px solid black", display:"grid", gridTemplateColumns:"3fr 3fr 3fr",justifyContent:"space-evenly"}}>
     {  
      addItem.map((val, index)=>{
            return <Note
            key={index}
            id={index}
            title={val.title}        
            content={val.content}
            deleteItem = {onDelete}
            
            />
        })
        }
        </div>





        
        </>
    )
}

export default App