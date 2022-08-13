import React, {useState} from 'react'

function EditLog({id, entry, onUpdateLog, setIsEditing}) {
    const [editedLog, setEditedLog] = useState(entry);

    function handleFormSubmit(e) {
      e.preventDefault();
  
      fetch(`http://localhost:9292/logs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          entry: editedLog,
        }),
      })
        .then((r) => r.json())
        .then((updatedLog) => onUpdateLog(updatedLog));

        setIsEditing(false)
    }
  
    return (
      <form className="edit-message" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="body"
          autoComplete="off"
          value={editedLog}
          onChange={(e) => setEditedLog(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>
    );
}

export default EditLog