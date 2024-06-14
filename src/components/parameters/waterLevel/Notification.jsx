import React, { useState } from "react";
import axios from "axios";
import Switch from "../../Switch/Switch";

function Notification({ data }) {
  //const [isToggledUpper, setIsToggledUpper] = useState(false);
  //const [isToggledLower, setIsToggledLower] = useState(false);
  const [upperNotificationToggle, setUpperNotificationToggle] = useState(false);
  const [lowerNotificationToggle, setLowerNotificationToggle] = useState(false);

  const toggleUpperNotification = () => {
    const newUpperNotificationToggle = !upperNotificationToggle;
    setUpperNotificationToggle(newUpperNotificationToggle);

    // Send notification status to backend for upper threshold
    axios
      .post("http://localhost:3001/data", {
        upperEnabled: newUpperNotificationToggle,
        lowerEnabled: lowerNotificationToggle, // Keep lower threshold status unchanged
      })
      .then((response) => {
        console.log(
          "Upper Notification status sent successfully:",
          response.data
        );
      })
      .catch((error) => {
        console.error("Error sending upper notification status:", error);
      });
  };

  const toggleLowerNotification = () => {
    const newLowerNotificationToggle = !lowerNotificationToggle;
    setLowerNotificationToggle(newLowerNotificationToggle);

    // Send notification status to backend for lower threshold
    axios
      .post("http://localhost:3001/data", {
        upperEnabled: upperNotificationToggle, // Keep upper threshold status unchanged
        lowerEnabled: newLowerNotificationToggle,
      })
      .then((response) => {
        console.log(
          "Lower Notification status sent successfully:",
          response.data
        );
      })
      .catch((error) => {
        console.error("Error sending lower notification status:", error);
      });
  };

  const handleInputChange = (event, setValue) => {
    setValue(event.target.value);
    //indirectly used here as a callback function for handling input changes, thats why its giving a warning
  };

  const [isToggled, setIsToggledUpper] = useState(false);
  const [isToggledLower, setIsToggledLower] = useState(false);

  return (
    <div className="notification3">
      <p>
        <h3>Notifications:</h3>{" "}
        {data.map((item) => (
          <div key={item.id}>
            {" "}
            Upper: {item.name}, Lower: {item.name}
          </div>
        ))}
      </p>
      <p>
        Upper:{" "}
        <Switch
          isToggledUpper={isToggled}
          onToggle={() => setIsToggledUpper(!isToggled)}
        />{" "}
        Lower:{" "}
        <Switch
          isToggled={isToggledLower}
          onToggle={() => setIsToggledLower(!isToggledLower)}
        />
      </p>
    </div>
  );
}

export default Notification;

{
  /*
  const toggleUpperNotification = () => {
    const newUpperNotificationToggle = !isToggledUpper;
    setIsToggledUpper(newUpperNotificationToggle);

    // Send notification status to backend for upper threshold
    axios
      .post("http://localhost:3001/data", {
        upperEnabled: newUpperNotificationToggle,
        lowerEnabled: isToggledLower, // Keep lower threshold status unchanged
      })
      .then((response) => {
        console.log(
          "Upper Notification status sent successfully:",
          response.data
        );
      })
      .catch((error) => {
        console.error("Error sending upper notification status:", error);
      });
  };

  const toggleLowerNotification = () => {
    const newLowerNotificationToggle = !isToggledLower;
    setIsToggledLower(newLowerNotificationToggle);

    // Send notification status to backend for lower threshold
    axios
      .post("http://localhost:3001/data", {
        upperEnabled: isToggledUpper, // Keep upper threshold status unchanged
        lowerEnabled: newLowerNotificationToggle,
      })
      .then((response) => {
        console.log(
          "Lower Notification status sent successfully:",
          response.data
        );
      })
      .catch((error) => {
        console.error("Error sending lower notification status:", error);
      });
  };

  return (
    <div className="notifications">
      <p>
        Notifications:{" "}
        {data.map((item) => (
          <div key={item.id}>
            {" "}
            Upper: {item.name}, Lower: {item.name}
          </div>
        ))}
      </p>
      <p>
        Upper:{" "}
        <Switch isToggled={isToggledUpper} onToggle={toggleUpperNotification} />{" "}
        Lower:{" "}
        <Switch isToggled={isToggledLower} onToggle={toggleLowerNotification} />
      </p>
    </div>
  );
}*/
}
