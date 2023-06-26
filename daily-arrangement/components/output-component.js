//import { useState } from 'react';
import Activity from './activity-component';

export default function OutputComponent({ itemActivities }) {
  return (
    <div className='output'>
      <hr /> <br />
      <h3>Your Daily Arrangement includes:</h3>
      <ul>
        {itemActivities.map((activity) => (
          <Activity activity={activity} key={activity.id} />
        ))}
      </ul>
    </div>
  );
}
