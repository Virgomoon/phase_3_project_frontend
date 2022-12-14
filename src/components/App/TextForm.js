import React, {useState} from 'react';
// import { Button } from "semantic-ui-react";
import "./CSS/TextForm.css";

function TextForm({currentUser, onAddLog}) {

    const [journalEntry, setJournalEntry] = useState("")

    function handleJournalEntryChange(e) {
        setJournalEntry(
             e.target.value
          )
    }
    
    function handleJournalEntrySubmit(e){
        e.preventDefault();
       
        let newEntry = ({
            user_id: currentUser.id,
            entry: journalEntry,
        })

        fetch("http://localhost:9292/logs", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newEntry),
            })
        .then((res)=> res.json())
        .then((newLog)=> {
            onAddLog(newLog)
            setJournalEntry("")
        })
    

    }
        


  return (
    <div className='text-form'>
        
        <form className="form" onSubmit={handleJournalEntrySubmit} >
                <label className='form-el'>
                    Write A Journal Entry
                </label>
                <textarea
                className='form-el'
                type="text"
                name="create-entry"
                value={journalEntry}
                onChange={handleJournalEntryChange}
                />
                <input type="submit" value="submit" className='form-el'/>
            </form>
    </div>
    
  )
}

export default TextForm