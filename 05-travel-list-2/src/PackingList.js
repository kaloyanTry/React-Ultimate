import Item from './Item';

function PackingList({ items, onDeletedItem, onToggledItem }) {
  return (
    <div>
      <h4>List of items:</h4>
      <div className='list'>
        <ul>
          {items.map((item) => (
            <Item
              item={item}
              onDeletedItem={onDeletedItem}
              onToggledItem={onToggledItem}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PackingList;
