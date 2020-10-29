import React from 'react';


function User({ user, onRemove, onToggle }){
    const { username, email, id, active } = user; //user에서 username, email, id 추출. 
    return(
        <div>
            <b 
             style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer' //마우스 커서를 올리면 모양이 변한다.
             }}
             onClick={() => onToggle(id)}
            >
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>  
            {/*<button onClick={ => onRemove(id)}>삭제</button> */}  
            
        </div>
    )
}




function UserList( {users, onRemove, onToggle } ){
    return (    
        <div>
        {
            users.map(
                (user) =>
                 (<User
                     key={user.id}  
                     user={user}
                     onRemove={onRemove}
                     onToggle={onToggle}
                     />
                  )
            )
        }
        </div>
    );
}

export default UserList;