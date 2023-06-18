import { useState } from 'react';

import '../index.css';

import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddedItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeletedItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggledItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      'Are you sure that you want to delete all items?'
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddedItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeletedItem}
        onToggledItem={handleToggledItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
