import React, {useEffect, useState} from 'react';
import './App.css';
import LogList from "./LogList";
import TextForm from './TextForm';
import Header from './Header';
import CreateUser from './CreateUser';

function App() {

  const [logs, setLogs] = useState([]);
  const [usernames, setUserNames] = useState([]);
  const [selectedUser, setSelectedUser] = useState("Joe");

  useEffect(() => {
    fetch("http://localhost:9292/logs")
      .then((r) => r.json())
      // .then((logs) => console.log(logs));
      .then((logData) => setLogs(logData));
  }, []);

    useEffect(() => {
        fetch("http://localhost:9292/users")
          .then((r) => r.json())
        //   .then((users) => console.log(users));
          .then((users) => setUserNames(users));
      }, []);

  const currentUser = usernames.find((user) => user.user_name === selectedUser)

  const filteredLogs = logs.filter((log) => currentUser.id ===  log.user_id);

  function handleAddLog(newLog) {
    setLogs([...logs, newLog]);
  }

  function handleAddUser(newName) {
    setUserNames([...usernames, newName]);
  }

  function handleUpdateLog(updatedLogObj) {
    const updatedLogs = logs.map((log) => {
      if (log.id === updatedLogObj.id) {
        return updatedLogObj;
      } else {
        return log;
      }
    });
    setLogs(updatedLogs);
  }

  function handleDeleteLog(id) {
    const updatedLogs = filteredLogs.filter((log) => log.id !== id);
    setLogs(updatedLogs);
  }

  return (
    <div>
      <Header 
      usernames={usernames} 
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
      />
      <CreateUser onAddUser={handleAddUser} />
      <TextForm 
        currentUser={currentUser}
        onAddLog={handleAddLog}
        />
      <LogList 
        logs={filteredLogs} 
        onDeleteLog={handleDeleteLog}
        onUpdateLog={handleUpdateLog}
      />
    </div>
  );
}

export default App;
