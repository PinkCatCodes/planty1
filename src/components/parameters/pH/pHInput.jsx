import React, { useState } from "react";
import axios from "axios";

const PHInput = ({ onAddpH }) => {
  const [pH, setpH] = useState("");

  const handleInputChange = (e) => {
    setpH(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await axios.post("YOUR_BACKEND_API_ENDPOINT", { pH: parseFloat(pH) }); // Replace 'YOUR_BACKEND_API_ENDPOINT' with your actual backend API endpoint
      onAddpH(parseFloat(pH));
      setpH("");
    } catch (error) {
      console.error("Error adding pH value:", error);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={pH}
        onChange={handleInputChange}
        placeholder="Enter pH value"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PHInput;
