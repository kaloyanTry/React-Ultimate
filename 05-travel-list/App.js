import { useState } from 'react';

import './index.css';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddedItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddedItems} />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>☀️ Let's Fly 🛫</h1>;
}

function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const itemToAdd = { description, quantity, packed: false, id: Date.now() };

    console.log(itemToAdd);
    onAddItems(itemToAdd);

    setDescription('');
    setQuantity(1);
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>Form section</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='item...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return <h3>PackingList: </h3>;
}

function Item() {
  return <h3>Item</h3>;
}
function Stats() {
  return <h3>Stats: </h3>;
}
