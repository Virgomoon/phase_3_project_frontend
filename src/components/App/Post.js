import React from 'react'

function Post({entry, time, id, onDeleteLog}) {

    const timestamp = new Date(time).toLocaleString()

    function handleDeleteClick() {
        fetch(`http://localhost:9293/messages/${id}`, {
          method: "DELETE",
        });
    
        onDeleteLog(id);
      }

  return (
    <div>{`${entry} - ${timestamp}`}</div>
  )
}

export default Post