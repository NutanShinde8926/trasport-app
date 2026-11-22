import { useState } from "react";

const Check = () => {
  const [query, setQuery] = useState("");

  const complaints = JSON.parse(localStorage.getItem("complaints")) || [];

  const search = query.trim().toUpperCase();
  const matches = complaints.filter((c) => c.plate === search);

  // kaun si problem kitni baar
  const counts = {};
  matches.forEach((c) => {
    counts[c.problem] = (counts[c.problem] || 0) + 1;
  });
  const topProblem = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];

  let level = "No complaints found";
  if (matches.length >= 3) level = "High risk";
  else if (matches.length >= 1) level = "Caution";

  return (
    <div className="check">
      <h1>Check a ride</h1>
      <p>Enter the vehicle number before you board.</p>

      <input
        type="text"
        placeholder="MH12 AB 1234"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {search !== "" && (
        <div className="check-result">
          <h2>{level}</h2>
          <p>Total complaints: {matches.length}</p>
          {matches.length >= 3 && (
        <p>Authority has notified this driver. 24 hours to respond.</p>
         )}
          {topProblem && <p>Most reported problem: {topProblem}</p>}

          {matches.map((c) => (
            <p key={c.id}>• {c.problem} ({c.area})</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Check;