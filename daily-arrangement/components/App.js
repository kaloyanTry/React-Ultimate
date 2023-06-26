import { useState } from 'react';

import './../index.css';

import HeadComponent from './head-component';
import SelectionComponent from './selection-component';
import OutputComponent from './output-component';
import SummaryComponent from './summary-component';

export default function App() {
  const [itemActivities, setItemActivities] = useState([]);

  function handleAddedItemActivities(itemActivity) {
    setItemActivities((itemActivities) => [...itemActivities, itemActivity]);
  }

  return (
    <div className='app'>
      <HeadComponent />
      <SelectionComponent onAddedItemActivity={handleAddedItemActivities} />
      <OutputComponent itemActivities={itemActivities} />
      <SummaryComponent itemActivities={itemActivities} />
    </div>
  );
}
