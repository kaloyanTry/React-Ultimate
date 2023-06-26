export default function Activity({ activity }) {
  return (
    <li>
      <span>
        {activity.number} {activity.description} at {activity.time} and cost{' '}
        {activity.budget} BGN
      </span>
    </li>
  );
}
