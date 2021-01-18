import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Header: React.FC = () => (
  <div className="header">
    <nav>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/manage-contacts">Manage contacts</NavLink>
    </nav>
  </div>
);

export default withRouter(Header);
