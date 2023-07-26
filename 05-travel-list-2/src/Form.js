import { useState } from 'react';

function Form({ onAddedItem, onClearedItems }) {
  const [num, setNum] = useState(1);
  const [item, setItem] = useState('');

  function handleAddedItem(e) {
    e.preventDefault();
    if (!item) return;

    const itemToAdd = { num, item, packed: false, id: Date.now() };
    onAddedItem(itemToAdd);

    setNum(1);
    setItem('');
  }

  return (
    <form className='form' onSubmit={handleAddedItem}>
      <select value={num} onChange={(e) => setNum(Number(e.target.value))}>
        {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
          <option value={n} key={n}>
            {n}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='item...'
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button className='btn btn-add'>Add item</button>
      <button className='btn btn-clr' onClick={onClearedItems}>
        Clear the list
      </button>
    </form>
  );
}

export default Form;
