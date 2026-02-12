"use client";

import { useState } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";

export default function HelloWorld() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setResult(null);
    const num = Number(value);
    if (value.trim() === "" || Number.isNaN(num)) {
      setError("Please enter a valid number.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/square?n=${encodeURIComponent(num)}`);
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Request failed");
        return;
      }
      setResult(data);
    } catch (err) {
      setError(err.message || "Failed to reach the API. Is it running on port 3002?");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: "1rem", maxWidth: "20rem" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number-input" style={{ display: "block", marginBottom: "0.5rem" }}>
          Enter a number
        </label>
        <input
          id="number-input"
          type="text"
          inputMode="numeric"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={loading}
          style={{
            display: "block",
            width: "100%",
            padding: "0.5rem",
            marginBottom: "0.5rem",
            boxSizing: "border-box",
          }}
        />
        <button type="submit" disabled={loading} style={{ padding: "0.5rem 1rem" }}>
          {loading ? "…" : "Square it"}
        </button>
      </form>
      {result !== null && (
        <div
          style={{
            marginTop: "1rem",
            padding: "0.75rem",
            background: "var(--background)",
            border: "1px solid var(--foreground)",
            borderRadius: "4px",
          }}
        >
          Result: {result.number}² = {result.square}
        </div>
      )}
      {error && (
        <div
          style={{
            marginTop: "1rem",
            padding: "0.75rem",
            color: "crimson",
            border: "1px solid currentColor",
            borderRadius: "4px",
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
}
