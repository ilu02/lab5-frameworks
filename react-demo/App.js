import React, { useState } from "react";

export default function App({ name = "Ilu" }) {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Welcome, {name}!</h1>
      <button
        onClick={() => setShowMessage(!showMessage)}
        style={{
          marginTop: "1rem",
          padding: "10px 20px",
          backgroundColor: "#ff6600",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Toggle Message
      </button>

      {showMessage && (
        <p style={{ marginTop: "1rem", color: "#444" }}>
          This is a React component with toggle state.
        </p>
      )}
    </div>
  );
}
