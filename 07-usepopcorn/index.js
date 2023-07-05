import React, { useState } from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from './StarRating';
//import StarRating2 from './StarRating2';

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color='blue' maxRating={10} onSetRating={setMovieRating} />
//       <p>This movies was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={['terrible', 'bad', 'okay', 'good', 'amazing']}
      defaultRating={3}
    /> */}
    {/* <StarRating2 maxRating={10} defaultRating={3} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
