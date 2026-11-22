const Complaints = () => {
  const complaints = JSON.parse(localStorage.getItem("complaints")) || [];

  return (
    <div className="complaints">
      <h1>All complaints ({complaints.length})</h1>

      {complaints.length === 0 && <p>No complaints yet.</p>}

      {complaints.map((c) => (
        <div className="complaint-card" key={c.id}>
          <h3>{c.plate}</h3>
          <p>{c.type} · {c.area}</p>
          <p>{c.problem}</p>
          <p>Sent to: {c.sentTo}</p>
          {(() => {
         const count = complaints.filter((x) => x.plate === c.plate).length;
         return (
         <p className="status">
        {count >= 3
        ? "Police notified the driver. 24 hours to respond."
        : "Sent to authority for review."}
    </p>
  );
})()}
        </div>
      ))}
    </div>
  );
};

export default Complaints;