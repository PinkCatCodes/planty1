import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for HTTP requests
import PHInput from "./pHInput";
import "./pH.css"; // Import CSS for styling

const App = () => {
  // State for pH value and additional data
  const [pHData, setpHData] = useState(null); // Default pH data

  // Function to fetch pH data from the server
  const fetchpHData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      ); // Example API endpoint
      const data = response.data; // Assuming the pH data is in the response
      console.log("Fetched pH data:", data); // Log fetched pH data
      setpHData(data); // Update the pH data from the response
    } catch (error) {
      console.error("Error fetching pH data:", error);
    }
  };

  // Simulated data update - replace with actual data fetching from sensor
  useEffect(() => {
    const interval = setInterval(() => {
      fetchpHData(); // Fetch pH data
    }, 5000); // Update pH data every 5 seconds

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  // Function to determine pH status
  const getpHStatus = (pH) => {
    if (pH < 6.0 || pH > 7.5) {
      return "Out of Range"; // pH out of optimal range
    } else {
      return "Optimal"; // pH within optimal range
    }
  };
  const handleAddpH = (newpH) => {
    setpHData({ ...pHData, pH: newpH });
  };

  return (
    <div className="container">
      <h1>pH Monitoring System</h1>
      <div className="pHContainer">
        <div className="pHValue">
          <h2>pH Value</h2>
          <p>{pHData ? pHData.pH : "Loading..."}</p>
          {pHData && (
            <div>
              <p>User ID: {pHData.userId}</p>
              <p>ID: {pHData.id}</p>
              <p>Title: {pHData.title}</p>
            </div>
          )}
        </div>
        <div className="pHStatus">
          <h2>Status</h2>
          <p>{pHData ? getpHStatus(pHData.pH) : "Loading..."}</p>
        </div>
        <div className="pHInput">
          <h2>pH Input</h2>
          <PHInput onAddpH={handleAddpH} />
        </div>
        <div className="pHLastFetch">
          <h2>Last pH Fetch</h2>
        </div>
      </div>
    </div>
  );
};

export default App;

{
  /*const PH = () => {
  // State for pH value
  const [pHValue, setpHValue] = useState(7.0); // Default pH value

  // Function to fetch pH data from the server
  const fetchpHData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      ); // Example API endpoint
      const data = response.data; // Assuming the pH data is in the response
      console.log("Fetched pH data:", data); // Log fetched pH data
      setpHValue(data.pH); // Update the pH value from the response
    } catch (error) {
      console.error("Error fetching pH data:", error);
    }
  };

  // Simulated data update - replace with actual data fetching from sensor
  useEffect(() => {
    const interval = setInterval(() => {
      fetchpHData(); // Fetch pH data
    }, 5000); // Update pH value every 5 seconds

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  // Function to determine pH status
  const getpHStatus = (pH) => {
    if (pH < 6.0 || pH > 7.5) {
      return "Out of Range"; // pH out of optimal range
    } else {
      return "Optimal"; // pH within optimal range
    }
  };

  return (
    <div className="container">
      <h1>pH Monitoring System</h1>
      <div className="pHContainer">
        <div className="pHValue">
          <h2>pH Value</h2>
          <p>{pHValue}</p>
        </div>
        <div className="pHStatus">
          <h2>Status</h2>
          <p>{getpHStatus(pHValue)}</p>
        </div>
      </div>
    </div>
  );
};

export default PH;/*}







{
  /*import React, { useState, useEffect } from "react";
import "./pH.css"; // Import CSS for styling

const PH = () => {
  // State for pH value
  const [pHValue, setpHValue] = useState(7.0); // Default pH value

  // Simulated data update - replace with actual data fetching from sensor
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate pH value update
      const newpHValue = (Math.random() * 3 + 4).toFixed(2); // Random value between 4.00 and 7.99
      setpHValue(newpHValue);
    }, 5000); // Update pH value every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Function to determine pH status
  const getpHStatus = (pH) => {
    if (pH < 6.0 || pH > 7.5) {
      return "Out of Range"; // pH out of optimal range
    } else {
      return "Optimal"; // pH within optimal range
    }
  };

  return (
    <div id="pH" className="container">
      <h1>pH Monitoring System</h1>
      <div className="pHContainer">
        <div className="pHValue">
          <h2>pH Value</h2>
          <p>{pHValue}</p>
        </div>
        <div className="pHStatus">
          <h2>Status</h2>
          <p>{getpHStatus(pHValue)}</p>
        </div>
      </div>
    </div>
  );
};

export default PH;*/
}
