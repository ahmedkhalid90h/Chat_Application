import './index.css';
import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import List from './components/list/List';
import Login from './components/login/Login';
import Notification from './components/notification/Notification';

function App() {
  const user = false
  return (
    <div className="container">
      {user ? (
        <>
        <List />
        <Chat />
        <Detail />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
}

export default App;


/**
 * rafc
  import React from 'react'

  const $1 = () => {
    return <div>$0</div>
  }

  export default $1

 */