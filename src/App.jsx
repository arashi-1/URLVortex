
import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [interval, setInterval] = useState(5);
  const [times, setTimes] = useState(1);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/open-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, interval, times }),
      });

      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to connect to server.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">URL Opener</h2>
        <input
          type="text"
          placeholder="Enter URL"
          className="w-full p-2 mb-4 border rounded"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <h1> Interval </h1>
        <input
          type="number"
          placeholder="Interval in seconds"
          className="w-full p-2 mb-4 border rounded"
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
          required
        />
        <h1> Times </h1>
        <input
          type="number"
          placeholder="Number of times"
          className="w-full p-2 mb-4 border rounded"
          value={times}
          onChange={(e) => setTimes(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Start Opening
        </button>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </form>
    </div>
  );
}

export default App;
