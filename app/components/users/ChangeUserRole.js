import React, { useState, useEffect } from "react";
import axios from "axios";

function ChangeUserRole() {
  const [listUsersRoles, setListUsersRoles] = useState();
  const [change, setChange] = useState();
  const [role, setRole] = useState("MERCHANT");
  const LIST_USERS_API = "http://localhost:28852/api/auth/list";
  const CHANGE_USER_ROLE = "http://localhost:28852/api/auth/role";
  const roles = [
    {
      label: "Merchant",
      value: "MERCHANT",
    },
    {
      label: "Support",
      value: "SUPPORT",
    },
  ];

  function changeRole(username, role) {
    const jsonBody = {
      username: username,
      role: role,
    };
    console.log(jsonBody);
    const base64encodedData = localStorage.getItem("Authorization");
    axios
      .put(CHANGE_USER_ROLE, jsonBody, {
        headers: {
          "Content-Type": "application/json",
          Authorization: base64encodedData,
        },
      })
      .then(setChange)
  }
  function handleChange(e) {
    console.log("Role Selected!!!");
    setRole(e.target.value);
    console.log(e.target.value);
  }

  useEffect(() => {
    const base64encodedData = localStorage.getItem("Authorization");
    fetch(LIST_USERS_API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: base64encodedData,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setListUsersRoles(json);
      });
  }, [change]);
 
  return (
    <div className="change-roles">
      <div className="containers">
        {listUsersRoles &&
          listUsersRoles.map((user) => (
            <div key={user.id}>
              Username: {user.username} Role: {user.role}
              <select className="containers" name="role" id="users" value={roles.value} onChange={handleChange}>
                {roles.map((roles) => (
                  <option value={roles.value}>{roles.label}</option>
                ))}
              </select>
              <button type="submit" onClick={() => changeRole(user.username, role)} className="btn btn-success btn-sm">
                Change Role
              </button>
              <br></br>
            </div>
          ))}
      </div>
    </div>
  );
}
export default ChangeUserRole;
