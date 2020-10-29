import React, {useRef, useState }  from 'react';
import './App.css';
import Counter from './Counter';
import CreateUser from './CreateUser';
import Hello from './Hello';
import InputSample from './inputSample';
import UserList from './UserList';
import Wrapper from './Wrapper';


function App() {
  const [inputs, setInputs] = useState({
    username : '',
    email: '',
  })
  const {username, email} = inputs; // inputs에서 username, email 추출
  const onChange = e => {
    const { name, value } = e.target; //e.target에서 name, value 추출
    setInputs({
      ...inputs, 
      [name] : value
    });
  };

  const [users, setUsers] = useState([
    {
        id :1,
        username : 'velopert',
        email : 'public.velopert@gmail.com',
        active : true,
    },
    {
        id :2,
        username : 'tester',
        email : 'tester@example.com',
        active : false, 
    },
    {
        id : 3, 
        username : 'liz',
        email : 'liz@example.com', 
        active : false,

    }
  ]);

  const nextId = useRef(4);


  const onCreate = () => {
    const user = {
        id : nextId.current,
        username, 
        email, 
    };
    
    setUsers([...users, user]);

    setInputs({ 
      username : '',
      email : ''
    });

    console.log(nextId.current); //4
    nextId.current +=1;   
  }


  const onRemove = id => {
    setUsers(users.filter(user =>user.id !== id)); //조건에 만족하면 user 라는 새로운 배열이 생성된다.

  };

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id 
      ? {...user, active: !user.active }
      : user
    ));
  };


  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
    )
}

export default App;
