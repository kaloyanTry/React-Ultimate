export default function SummaryComponent({ itemActivities }) {
  const totalActivities = itemActivities.length;

  return (
    <div>
      <h3>You Daily Routine in Total:</h3>
      <p>Total activities: {totalActivities}</p>
    </div>
  );
}
