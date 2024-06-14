// WaterLevelContainer.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import LastFetchedInfo from "./LastfetchedInfo";
import SendDataForm from "./SendDataForm";
import ThresholdSettings from "./ThresholdSettings";
import Notification from "./Notification";
import Chart from "./../../charts/Chart";
import "./WaterLevelContainer.css";

function WaterLevelContainer() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [upperDangerInput, setUpperDangerInput] = useState("");
  const [lowerDangerInput, setLowerDangerInput] = useState("");
  const [upperWarningInput, setUpperWarningInput] = useState("");
  const [lowerWarningInput, setLowerWarningInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  //Fetch data and send data

  const fetchData = () => {
    axios
      .get("http://localhost:3001/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const sendData = () => {
    // Define sendData function
    axios
      .post("http://localhost:3001/data", inputValue)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        // After sending the data, fetch updated data to refresh the view
        fetchData();
        setInputValue(""); // Clear input field
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };
  //End of Fetch data and send data

  // Threshholds

  const sendThresholdData = (upperValue, lowerValue, thresholdType) => {
    axios
      .post("http://localhost:3001/data", {
        upperValue,
        lowerValue,
        thresholdType,
      })
      .then((response) => {
        console.log("Thresholds sent successfully:", response.data);
        // After sending the data, fetch updated data to refresh the view
        fetchData();
        // Clear input fields based on threshold type
        if (thresholdType === "danger") {
          setUpperDangerInput("");
          setLowerDangerInput("");
        } else if (thresholdType === "warning") {
          setUpperWarningInput("");
          setLowerWarningInput("");
        }
      })
      .catch((error) => {
        console.error("Error sending thresholds:", error);
      });
  };
  // End of Threshholds

  // Other functions

  return (
    <div className="water-level-container">
      <h1>WATER LEVEL</h1>
      <div className="container3">
        <LastFetchedInfo data={data} />
        <SendDataForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          sendData={sendData}
        />
        <ThresholdSettings
          upperDangerInput={upperDangerInput}
          setUpperDangerInput={setUpperDangerInput}
          lowerDangerInput={lowerDangerInput}
          setLowerDangerInput={setLowerDangerInput}
          upperWarningInput={upperWarningInput}
          setUpperWarningInput={setUpperWarningInput}
          lowerWarningInput={lowerWarningInput}
          setLowerWarningInput={setLowerWarningInput}
          sendThresholdData={sendThresholdData}
        />
        <Notification data={data} />
        <div className="graph3">
          <h3>Graph:</h3>
          <Chart dataKey="waterLevel" yAxisLabel="WL ml/cm" />
        </div>
      </div>
    </div>
  );
}

export default WaterLevelContainer;
