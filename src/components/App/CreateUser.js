import React, {useState} from 'react'
import './CSS/CreateUser.css'

function CreateUser({onAddUser}) {

    const [newUser, setNewUser] = useState("")

    function handleFormSubmit(e){
        e.preventDefault();
       
        let addNewUser = ({
            user_name: newUser
        })

        fetch("http://localhost:9292/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(addNewUser),
            })
        .then((res)=> res.json())
        .then((newUser)=> {
            onAddUser(newUser)
            setNewUser("")
        })
    }

  return (
    <div className='create-user'>
        <form className="make-user" onSubmit={handleFormSubmit}>
        <label>
            Add a user
        </label>
        <input
          type="text"
          name="make-user"
          autoComplete="off"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>
    </div>
  )
}

export default CreateUser