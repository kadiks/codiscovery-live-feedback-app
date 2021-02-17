import "./Day.css";

function Day({ day, date }) {
  return (
    <div className="Day-container">
      <h2 className="Day-day">{day}</h2>
      <p className="Day-date">{date}</p>
    </div>
  );
}

export default Day;
