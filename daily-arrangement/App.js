import { useState } from 'react';

import './index.css';

export default function App() {
  return <DailyArrangement />;
}

function DailyArrangement() {
  const [numActs, setNumActs] = useState(1);
  const [budgetActivity, seBudgetActivity] = useState('');

  const budgetTotal = 0;

  return (
    <div className='app'>
      <HeadComponent />
      <SelectionComponent />
      <OutputComponent />
      <SummaryComponent />
    </div>
  );
}

function HeadComponent() {
  return (
    <div>
      <h1>Daily Arrangement</h1>
      <p>This App is gorgeous for you daily routine</p>
    </div>
  );
}

function SelectionComponent() {
  return (
    <div>
      <h2>Activity</h2>
      <input type='date' />
      <input type='text' placeholder='activity...' />
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
}
function OutputComponent() {
  return (
    <div>
      <h3>Your Daily Arrangement includes:</h3>
      <ul>
        X Activities
        <li>activity X</li>
      </ul>
    </div>
  );
}
function SummaryComponent() {
  return (
    <div>
      <h3>You Daily Routine in Total:</h3>
    </div>
  );
}
