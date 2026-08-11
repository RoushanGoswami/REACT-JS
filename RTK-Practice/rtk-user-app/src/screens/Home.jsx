import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [users, setUser] = useState([]);
  const [data, setData] = useState({});

  const getEmail = (e) => setData({ ...data, email: e.target.value });
  const getPassword = (e) => setData({ ...data, password: e.target.value });
  const updateField = (x) => setData(x);

  const handleSendUser = async () => {
    const res = await axios.post("http://localhost:3000/users", data);
    if (res.status == 201) {
      alert("user added !");
    } else {
      alert("user not added !");
    }
  };

  // api calling -> get ,put ,delete
  const handleFetchUsers = async () => {
    const res = await axios.get("http://localhost:3000/users");
    setUser(res.data);
  };

  const handleDeleteUser = async (id) => {
    const res = await axios.delete("http://localhost:3000/users/" + id);
    handleFetchUsers();
  };

  const handleUpdateUser = async () => {
    const res = await axios.put("http://localhost:3000/users/" + data.id, data);
    handleFetchUsers();
  };

  useEffect(() => {
    handleFetchUsers();
  }, []);
  return (
    <>
      <div>
        <input
          value={data.email || ""}
          onChange={getEmail}
          type="email"
          name=""
          id=""
        />
        <input
          value={data.password || ""}
          onChange={getPassword}
          type="password"
          name=""
          id=""
        />
        <button
          onClick={() => {
            handleSendUser();
            handleFetchUsers();
          }}
        >
          submit
        </button>
        <button onClick={() => handleUpdateUser}>update</button>

        {/* display */}
        <div>
          {users.length == 0 ? (
            <p>No users</p>
          ) : (
            users.map((user, i) => {
              return (
                <div
                  key={i}
                  onClick={() => updateField(user)}
                  onDoubleClick={() => handleDeleteUser(user.id)}
                >
                  <div>
                    {" "}
                    <p>{user.email}</p>
                    <p>{user.password}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
