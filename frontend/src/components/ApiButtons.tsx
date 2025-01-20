import React, { useState } from "react";

const ApiButtons: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch("http://127.0.0.1:8000/");
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const sendData = async (): Promise<void> => {
    try {
      const response = await fetch("http://127.0.0.1:8000/items/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "New Item", price: 10 }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <button onClick={sendData}>Send Data</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ApiButtons;
