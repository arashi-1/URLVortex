import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [interval, setInterval] = useState(5);
  const [times, setTimes] = useState(1);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://urlvortex.onrender.com/open-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, interval, times }),
      });

      if (!res.ok) {
        throw new Error("Server responded with error.");
      }

      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to connect to the server.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-6 text-center text-gray-800">URLVortex</h2>

        <label className="block mb-2 text-sm font-medium text-gray-700">Enter URL</label>
        <input
          type="text"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">Interval (seconds)</label>
        <input
          type="number"
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          required
          min="1"
          className="w-full p-2 mb-4 border rounded"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">Times</label>
        <input
          type="number"
          value={times}
          onChange={(e) => setTimes(Number(e.target.value))}
          required
          min="1"
          className="w-full p-2 mb-4 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>

        {message && <p className="mt-4 text-green-600 text-center">{message}</p>}
      </form>
    </div>
  );
}

export default App;
