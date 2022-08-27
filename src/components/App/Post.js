import React, {useState} from 'react'
import './CSS/Post.css'
import EditLog from './EditLog';

function Post({entry, time, updatedAt, id, onDeleteLog, onUpdateLog}) {

    const [isEditing, setIsEditing] = useState(false);

    const timestamp = new Date(time).toLocaleString()



    function handleDeleteClick() {
      
      fetch(`http://localhost:9292/logs/${id}`, {
        method: "DELETE",
      })
      
      onDeleteLog(id);
      }

  return (
    <div className='log-container'>
        {isEditing ? (
        <EditLog
          id={id}
          entry={entry}
          onUpdateLog={onUpdateLog}
          setIsEditing={setIsEditing}
        />
      ) : (
        <div className='entry'>{`${entry} `}</div>
      )}
        <div className='time'>{` ${timestamp}`}</div>
        <div className="actions">
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                <span role="img" aria-label="edit">
                ✏️
                </span>
            </button>
            <button onClick={handleDeleteClick}>
                <span role="img" aria-label="delete">
                🗑
                </span>
            </button>
            </div>
    </div>
  )
}

export default Post