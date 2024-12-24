import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllUsers.css";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4444/admin/users").then((response) => {
      setUsers(response.data.data);
    });
  }, []);

  return (
    <div className="users-table-container">
      <h1 className="table-header">All Users</h1>
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.uname}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-data-row">
                No users available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;