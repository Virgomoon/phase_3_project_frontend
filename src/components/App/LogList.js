import React, {useState} from 'react';
import Post from './Post';
import './CSS/LogList.css'

function LogList({logs, onDeleteLog, currentUser}) {

    console.log(currentUser)
    logs.map((log)=> {console.log(log.entry)})
    // console.log(logs)

  return (
    
         <div className='logs'>
             <div>Journal Entries</div>
                 {logs.map((log) => {
                    return (
                     <Post key={log.id}
                        id={log.id}
                        entry={log.entry}
                        time={log.created_at}
                        onDeleteLog={onDeleteLog}
                        />
                 )}
                 )}
         </div>
  )
}

export default LogList