// https://drive.google.com/drive/u/0/mobile/folders/1_DXK0dGhh7qXLc4J9zfwlHk1oTb9HE-J?usp=drive_link
import {useState} from "react";
import AllUsersData from "../Users/users.js";





const Users = () => {
   const [users, setUsers] = useState(AllUsersData);
  return (
    <div className="container">
      <div className="row">
        {users.map((user,i) => (
          <div className="col-md-3 mb-4" key={user.id}>
            <div className="card p-2">
              <img
                src={user.profilePhoto}
                alt="Profile"
                className="card-img-top"
              />
              <p key={user.id}>{user.name}</p>
              <p key={user.id}> Email : {user.email}</p>
              <p key={user.id}> Role : {user.role}</p>
            </div>
            <button
    onClick={() => {
        const temp = [...users];
         temp.splice(i,1);
          setUsers(temp);
            }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
         onClick={() => {
           setUsers([ ...users, { name: "Amir", email: "amir12@12.com", phone: "989785798", }]); }} >
         Add
      </button>
    
    </div>
  );
};

export default Users;

