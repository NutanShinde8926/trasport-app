import { useState } from "react";

const problems = {
  Rickshaw: [
    "More than 3 passengers in the back",
    "Dropped midway and charged again",
    "Asked for more than the fare",
  ],
  Bus: [
    "Did not stop at the bus stop",
    "Did not stop even after I signalled",
    "Overcrowded beyond capacity",
  ],
};

const rickshawStations = {
  Handewadi: "Pursungi Police Station",
  Katraj: "Katraj Police Station",
  Hadapsar: "Hadapsar Police Station",
};

const busDepots = {
  Handewadi: "Hadapsar PMPML Depot",
  Katraj: "Katraj PMPML Depot",
  Hadapsar: "Hadapsar PMPML Depot",
};

const Report = () => {
  const [type, setType] = useState("Rickshaw");
  const [problem, setProblem] = useState(problems.Rickshaw[0]);
  const [plate, setPlate] = useState("");
  const [area, setArea] = useState("Handewadi");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const sentTo = type === "Rickshaw" ? rickshawStations[area] : busDepots[area];
    setMessage("Report sent to " + sentTo);
    setPlate("");
  };

  return (
    <div className="report">
      <form className="report-form" onSubmit={handleSubmit}>
        <h1>Report a problem</h1>

        <label>Vehicle type</label>
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setProblem(problems[e.target.value][0]);
          }}
        >
          <option>Rickshaw</option>
          <option>Bus</option>
        </select>

        <label>What happened?</label>
        <select value={problem} onChange={(e) => setProblem(e.target.value)}>
          {problems[type].map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>

        <label>Vehicle number</label>
        <input
          type="text"
          placeholder="MH12 AB 1234"
          required
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
        />

        <label>Area</label>
        <select value={area} onChange={(e) => setArea(e.target.value)}>
          <option>Handewadi</option>
          <option>Katraj</option>
          <option>Hadapsar</option>
        </select>

        <label>Photo proof (optional)</label>
        <input type="file" accept="image/*" />

        <button type="submit">Submit report</button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default Report;