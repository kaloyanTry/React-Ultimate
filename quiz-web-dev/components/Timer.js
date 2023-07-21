import { useEffect } from 'react';

import { useQuiz } from '../constexts/QuizContext';

function Timer() {
  const { secsRemaining, dispatch } = useQuiz();

  const minutes = Math.floor(secsRemaining / 60);
  const seconds = secsRemaining % 60;

  useEffect(
    function () {
      const idInterval = setInterval(function () {
        dispatch({ type: 'tickTime' });
      }, 1000);

      return () => clearInterval(idInterval);
    },
    [dispatch]
  );
  return (
    <div className='timer'>
      {minutes < 10 && '0'}
      {minutes}:{seconds < 10 && '0'}
      {seconds}
    </div>
  );
}

export default Timer;
