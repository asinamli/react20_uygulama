import React,{use, useEffect, useState} from 'react';
import axios from 'axios';

function UserList({setActiveUserId}) {
    const [users,setUsers] =useState([]);
    const[loading,setLoading]=useState(true);

    // vveri çekicez
    useEffect(()=>{
       axios("https://jsonplaceholder.typicode.com/users")
       .then(res=>setUsers(res.data))
       .finally(()=>setLoading(false))
    },[])
  return (
    <div>
        <h2>Kullanıcılar</h2>
        {loading && <div>yükleniyorr..</div>}
        <ul className='user-list'>
        {
            users.map((users)=>(
                <li key={users.id} onClick={()=>setActiveUserId(users.id)}>{users.name}</li>
            ))
        }</ul>
    </div>
  )
}

export default UserList