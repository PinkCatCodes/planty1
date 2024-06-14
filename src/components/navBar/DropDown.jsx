import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
//import "./DropDown.css";

function DropDown() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle className="dropdown-toggle-custom">
          Parameters
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ backgroundColor: "#87b1ad" }}>
          <Dropdown.Item as={Link} to="/waterTemp">
            Water Temperature
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/pH">
            Water pH
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/waterLevel">
            Water Level
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/vpd">
            Vapor Pressure Deficit
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropDown;
