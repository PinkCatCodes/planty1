import React from "react";

function ThresholdSettings({
  sendThresholdData,
  upperDangerInput,
  setUpperDangerInput,
  lowerDangerInput,
  setLowerDangerInput,
  upperWarningInput,
  setUpperWarningInput,
  lowerWarningInput,
  setLowerWarningInput,
}) {
  const handleSendThresholdData = (thresholdType) => {
    sendThresholdData(
      thresholdType === "danger" ? upperDangerInput : upperWarningInput,
      thresholdType === "danger" ? lowerDangerInput : lowerWarningInput,
      thresholdType
    );
    // Clear input fields based on threshold type
    if (thresholdType === "danger") {
      setUpperDangerInput("");
      setLowerDangerInput("");
    } else if (thresholdType === "warning") {
      setUpperWarningInput("");
      setLowerWarningInput("");
    }
  };

  return (
    <div>
      <div className="danger-thresholds3">
        <h3>Danger Thresholds:</h3>
        <input
          id="input3"
          type="text"
          value={upperDangerInput}
          onChange={(event) => setUpperDangerInput(event.target.value)}
          placeholder="Enter Upper Level"
        />
        <button
          className="button3"
          onClick={() => handleSendThresholdData("danger")}
        >
          Set Upper
        </button>
        <input
          id="input3"
          type="text"
          value={lowerDangerInput}
          onChange={(event) => setLowerDangerInput(event.target.value)}
          placeholder="Enter Lower Level"
        />
        <button
          className="button3"
          onClick={() => handleSendThresholdData("danger")}
        >
          Set Lower
        </button>
      </div>
      <div className="warning-thresholds3">
        <h3>Warning Thresholds:</h3>
        <input
          id="input3"
          type="text"
          value={upperWarningInput}
          onChange={(event) => setUpperWarningInput(event.target.value)}
          placeholder="Enter Upper Level"
        />
        <button
          className="button3"
          onClick={() => handleSendThresholdData("warning")}
        >
          Set Upper
        </button>
        <input
          id="input3"
          type="text"
          value={lowerWarningInput}
          onChange={(event) => setLowerWarningInput(event.target.value)}
          placeholder="Enter Lower Level"
        />
        <button
          className="button3"
          onClick={() => handleSendThresholdData("warning")}
        >
          Set Lower
        </button>
      </div>
    </div>
  );
}

export default ThresholdSettings;
