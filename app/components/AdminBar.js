import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

export default class AdminBar extends Component {
  render() {
    return (
      <nav>
        <div>
          <nav>
            <div>
              <ul className="header">
                <li>
                  <Link to="users">All users</Link>
                </li>
                <li>
                  <Link to="change-user-status">Change user status</Link>
                </li>
                <li>
                  <Link to="change-user-role">Change user role</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </nav>
    );
  }
}