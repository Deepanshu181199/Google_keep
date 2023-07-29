import { useRef, useState } from 'react'
import './CreateNote.css'

function CreateNote(props){

    const [expand, setExpand] = useState(false)
 

    
    //1st step hook bnaya--- is hook se humne input field aur textarea me initial aur final value la rhe h 
    //2ns step--- ab hme chahiye ki user agr kuch bhi type kre to hme note.title aur note.content m save krana h ye hoga 
    // onchange event se
    const [note, setNote] = useState({
        title : "",
        content: "",
    })
 
    function inputEvent(e){
        // user jb bhi kuch likh rha h ye isse pta chlega kya likh rha h
        const value = e.target.value
        const name = e.target.name

        // yha pr setnote m jo humne prevdata pass kiya h iska mtlb ye h ki jo bhi usestate m previous data h use access kr skte h
        setNote((prevData)=>{
            // yha pr return ke baad curly bracket isliye lgae kyuki ye ek object h
            return{
                ...prevData,
                // isse hum ye check krayenge ki content konsa h aur title konsa
                // also ye check krega ki agr suppose hmara name title ke barabar h to hmari value iske barabar ho jae and vice-versa
                [name] : value,

            }
        })
    }


    function addEvent(e){
        e.preventDefault()
        props.passNote(note)
        setNote({
            title : "",
            content : "",
        })

    }

    function expandIt(){
        
        setExpand(true)
    }

    function backToNormal(){
        setExpand(false)
    }

    return(
        <>
        <div className="main" >
        <div className="main_note" onDoubleClick={backToNormal}>
            <form >
               { expand?
                <input 
                type="text" 
                placeholder="Title" 
                value={note.title} 
                name='title' 
                onChange={inputEvent} 
                autoComplete="off" 
                /> :null}

                <textarea 
                placeholder="Write a note..." 
                value={note.content} 
                name='content' 
                onChange={inputEvent} 
                cols="50" rows="40"
                onClick={expandIt}
                ></textarea>
                {expand?
                <button 
                className="btn" 
                type='submit' 
                onClick={addEvent}
                >+
                </button> :null}

            </form>
        </div>
        </div>
        
        </>
    )
}

export default CreateNote