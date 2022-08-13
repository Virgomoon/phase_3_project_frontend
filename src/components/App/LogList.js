import React from 'react';
import Post from './Post';
import './CSS/LogList.css'

function LogList({logs, onDeleteLog, onUpdateLog}) {

  return (
    
         <div className='logs'>
             <div>Journal Entries</div>
                 {logs.map((log) => {
                    return (
                     <Post key={log.id}
                        id={log.id}
                        entry={log.entry}
                        time={log.created_at}
                        updatedAt={log.updated_at}
                        onDeleteLog={onDeleteLog}
                        onUpdateLog={onUpdateLog}
                        />
                 )}
                 )}
         </div>
  )
}

export default LogList