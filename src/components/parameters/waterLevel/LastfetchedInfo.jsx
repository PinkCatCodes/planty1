import React from "react";

function LastFetchedInfo({ data }) {
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  return (
    <div className="last-fetched3">
      <h3>Last Fetched Data</h3>
      <p>
        Last Fetched at: {showTime} -{" "}
        {data.map((item) => (
          <span key={item.id}>{item.name}</span>
        ))}
      </p>
      <p id="error">Error placeholder</p>
    </div>
  );
}

export default LastFetchedInfo;
