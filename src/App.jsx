import './index.css';
import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import List from './components/list/List';
import Login from './components/login/Login';
import Notification from './components/notification/Notification';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { userStore } from './lib/userStore';

function App() {

  const { currentUser, isLoading, fetchUserInfo } = userStore()
  
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid)
    })
    return () => {
      unSub()
    }
  }, [fetchUserInfo])

  console.log(currentUser)

  if (isLoading) {
    return <div className='loading'>Loading...</div>
  }
  
  return (
    <div className="container">
      {currentUser ? (
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