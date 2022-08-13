import React from 'react'
import './CSS/Header.css'

function Header({usernames, selectedUser, setSelectedUser}) {
    
  return (
    <div className='header'>
        <div className='title-container'>
            <div className='title'>The Journal App</div>
        </div>
        <div className='select-container'>
            <label>Select User</label>
            <select name="category" value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                {usernames.map((user) => (
                    <option key={user.id} value={user.user_name}>{user.user_name}</option>
                    ))}
            </select> 
        </div>
    </div>
  )
}

export default Header