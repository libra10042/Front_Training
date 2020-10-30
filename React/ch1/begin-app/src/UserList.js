import React, { useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }){
    const { username, email, id, active } = user; //user에서 username, email, id 추출. 
    const dispatch = useContext(UserDispatch);
    
   
    
    return(
        <div>
            <b 
             style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer' //마우스 커서를 올리면 모양이 변한다.
             }}
             onClick={() => dispatch({ 
                 type : 'TOGGLE_USER',
                 id
                })}
            >
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={() => dispatch({
                type : 'REMOVE_USER',
                id
            })}>삭제</button>  
            {/*<button onClick={ => onRemove(id)}>삭제</button> */}  
            
        </div>
    )
});




function UserList( {users} ){
    return (    
        <div>
        {
            users.map(
                (user) =>
                 (<User
                     key={user.id}  
                     user={user}
                     />
                  )
            )
        }
        </div>
    );
}

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);