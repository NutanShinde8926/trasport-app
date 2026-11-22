import { useState } from "react";

const OTHER = "Other (write your own)";

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
  const [custom, setCustom] = useState("");
  const [plate, setPlate] = useState("");
  const [area, setArea] = useState("Handewadi");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalProblem = problem === OTHER ? custom.trim() : problem;
    if (finalProblem === "") {
      setMessage("Please write the problem.");
      return;
    }

    const sentTo =
      type === "Rickshaw" ? rickshawStations[area] : busDepots[area];

    const saved = JSON.parse(localStorage.getItem("complaints")) || [];

    saved.unshift({
      id: Date.now(),
      type: type,
      problem: finalProblem,
      plate: plate.trim().toUpperCase(),
      area: area,
      sentTo: sentTo,
    });

    localStorage.setItem("complaints", JSON.stringify(saved));

    setMessage("Report sent to " + sentTo + ". The driver will be informed after 1 hour, so you can reach your destination safely.");

    setPlate("");
    setCustom("");
    setType("Rickshaw");
    setProblem(problems.Rickshaw[0]);
    setArea("Handewadi");
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
          <option>{OTHER}</option>
        </select>

        {problem === OTHER && (
          <input
            type="text"
            placeholder="Write your problem here"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
          />
        )}

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