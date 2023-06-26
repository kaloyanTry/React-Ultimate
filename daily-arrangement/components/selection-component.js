import { useState } from 'react';

export default function SelectionComponent({ onAddedItemActivity }) {
  const [number, setNumber] = useState(1);
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('08:00');
  const [budget, setBudget] = useState('');

  function takeCurrentTime() {
    const currTime = new Date();
    const currHour = currTime.getHours();
    const currMinutes = currTime.getMinutes();
    const currentTime = `${currHour}:${currMinutes}`;
    const currentDate = currTime.toLocaleDateString('bg-BG');

    return `Current time: ${currentTime} on ${currentDate}`;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!description && !number) return;

    const activityToAdd = { number, description, time, budget, id: Date.now() };

    console.log(activityToAdd);
    onAddedItemActivity(activityToAdd);

    setNumber(1);
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Activity</h2>
      <p>{takeCurrentTime()}</p>
      <input
        type='time-local'
        min='08:00'
        max='22:00'
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <select
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      >
        {Array.from({ length: 24 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type='text'
        placeholder='activity...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type='text'
        placeholder='budget...'
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
      />
      <button>Add Activity</button>
    </form>
  );
}
