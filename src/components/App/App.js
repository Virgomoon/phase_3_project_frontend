import React, {useEffect, useState} from 'react';
import './App.css';
import LogList from "./LogList";
import TextForm from './TextForm';
import Header from './Header';

function App() {

  const [logs, setLogs] = useState([]);
  const [usernames, setUserNames] = useState([]);

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

  console.log(logs)

  function handleDeleteLog(id) {
    const updatedLogs = logs.filter((log) => log.id !== id);
    setLogs(updatedLogs);
  }

  return (
    <div>
      <Header usernames={usernames} setUserNames={setUserNames} />
      <TextForm logs={logs}/>
      <LogList 
        logs={logs} 
        onDeleteLog={handleDeleteLog}
      />
    </div>
  );
}

export default App;
