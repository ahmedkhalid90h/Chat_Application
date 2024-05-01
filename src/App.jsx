import './index.css';
import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import List from './components/list/List';

function App() {
  return (
    <div className="container">
      <List />
      <Chat />
      <Detail />
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