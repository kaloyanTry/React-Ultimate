function Item({ item, onDeletedItem, onToggledItem }) {
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => onToggledItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        <strong>{item.num}</strong> {item.item}{' '}
      </span>
      <button className='btn btn-dlt' onClick={() => onDeletedItem(item.id)}>
        X
      </button>
    </li>
  );
}

export default Item;
