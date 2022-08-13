import React, {useEffect, useState} from 'react';
import './App.css';
import LogList from "./LogList";
import TextForm from './TextForm';
import Header from './Header';

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

  console.log(usernames)
      console.log(selectedUser)
  console.log(logs)

  const currentUser = usernames.find((user) => user.user_name === selectedUser)

  console.log(currentUser)

  const filteredLogs = logs.filter((log) => currentUser.id ===  log.user_id);

  console.log(filteredLogs)

  function handleDeleteLog(id) {
    const updatedLogs = filteredLogs.filter((log) => log.id !== id);
    setLogs(updatedLogs);
  }

  return (
    <div>
      <Header 
      usernames={usernames} 
      setUserNames={setUserNames}
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
      />
      <TextForm logs={logs}/>
      <LogList 
        logs={filteredLogs} 
        onDeleteLog={handleDeleteLog}
      />
    </div>
  );
}

export default App;
