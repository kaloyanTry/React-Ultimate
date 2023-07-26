import './index.css';
import Header from './Header';
import Form from './Form';
import PackingList from './PackingList';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  function handleAddedItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeletedItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearItems() {
    setItems([]);
  }

  function handleToggledItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className='app'>
      <Header />
      <Form onAddedItem={handleAddedItem} onClearedItems={handleClearItems} />
      <PackingList
        items={items}
        onDeletedItem={handleDeletedItem}
        onToggledItem={handleToggledItem}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
