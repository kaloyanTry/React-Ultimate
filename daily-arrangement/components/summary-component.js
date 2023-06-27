export default function SummaryComponent({ itemActivities }) {
  const totalActivities = itemActivities.length;
  const allBudgets = itemActivities.map((b) => b.budget);
  const totalBudget = allBudgets.reduce((cur, acc) => cur + acc, 0);

  return (
    <div>
      <h3>You Daily Routine in Total:</h3>
      <p>Total activities: {totalActivities}</p>
      <p>
        Total Budget: <b>{totalBudget} </b>BGN
      </p>
    </div>
  );
}
