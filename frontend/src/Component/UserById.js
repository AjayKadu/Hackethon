import React, { useState } from "react";
import axios from "axios";
import "./UserById.css";

const UserById = () => {
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);

  const fetchUserById = () => {
    axios.get(`http://localhost:4444/admin/user/${userId}`).then((response) => {
      setUser(response.data.data);
    });
  };

  return (
    <div className="user-by-id-container">
      <h1>Fetch User by ID</h1>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="input-field"
      />
      <button onClick={fetchUserById} className="fetch-button">
        Fetch User
      </button>

      {user ? (
        <div className="user-details">
          <h2>User Details:</h2>
          <p>
            <span className="label">ID:</span> {user.id}
          </p>
          <p>
            <span className="label">Username:</span> {user.uname}
          </p>
          <p>
            <span className="label">Email:</span> {user.email}
          </p>
          <p>
            <span className="label">Mobile:</span> {user.mobile}
          </p>
          <p>
            <span className="label">Role:</span> {user.role}
          </p>
        </div>
      ) : (
        userId && <p className="no-user-message">No user found.</p>
      )}
    </div>
  );
};

export default UserById;