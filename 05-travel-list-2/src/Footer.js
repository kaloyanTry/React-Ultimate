function Footer({ items }) {
  const currTime = Date.now();
  const timeNow = new Date(currTime);
  const printTime = timeNow.toLocaleTimeString();

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentagePacked = ((numPackedItems / numItems) * 100).toFixed(0);

  return (
    <footer>
      <h4>
        You have <strong>{numItems}</strong> items in your travel list
      </h4>
      <p>
        The number of packed items is: <strong>{numPackedItems}</strong> (
        {percentagePacked > 0 ? percentagePacked : 0}
        %)
      </p>
      <p className='time'>
        ☝️ The current time is: <strong>{printTime}</strong>
      </p>
    </footer>
  );
}

export default Footer;
