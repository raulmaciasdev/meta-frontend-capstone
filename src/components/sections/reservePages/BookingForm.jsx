
import React, { useState } from "react";

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [form, setForm] = useState({
    date: "",
    time: "",
    name: "",
    guests: 1
  });
  const [confirmed, setConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
    // Aquí podrías enviar los datos a una API
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={form.date} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <select id="time" name="time" value={form.time} onChange={handleChange} required>
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="guests">Guests:</label>
        <input type="number" id="guests" name="guests" min="1" max="20" value={form.guests} onChange={handleChange} required />
      </div>
      <button type="submit" className="action-button">Reserve</button>
      {confirmed && <div style={{marginTop: "1rem", color: "green"}}>Reservation confirmed!</div>}
    </form>
  );
};

export default BookingForm;
