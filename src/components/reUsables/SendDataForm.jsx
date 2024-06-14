import React from "react";

function SendDataForm({ inputValue, setInputValue, sendData }) {
  const handleSendData = () => {
    sendData(); // Call the sendData function passed from parent
    setInputValue(""); // Clear input field after sending data
  };

  return (
    <div className="send-data-form3">
      <h3>Send Data</h3>
      <input
        id="input3"
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Enter your data"
      />
      <button className="button3" onClick={handleSendData}>
        Send Data
      </button>
    </div>
  );
}

export default SendDataForm;
