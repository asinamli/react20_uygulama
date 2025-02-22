import { useState } from 'react';
import './App.css';
import UserDetail from './components/UserDetail';
import UserList from "./components/UserList"

function App() {
  // user detayları için state tanımlaması yapıyoruz 
  const[activeUserId,setActiveUserId]=useState(null)
// activeUserId ' e UserDetail de ihtiyacımız var, setActiveUserId'e de UserList de ihtiyacımız var 
// setActiveUserId ile id atıcam (UserList de) atadığım ıd yi UserDetail de kullancam
  return (
    <div className="App">
 
      <div>
        <UserList setActiveUserId={setActiveUserId}/>
      </div>
      
      {activeUserId && <div>
        <UserDetail activeUserId={activeUserId}/>
      </div>}


    </div>
  );
}

export default App;
