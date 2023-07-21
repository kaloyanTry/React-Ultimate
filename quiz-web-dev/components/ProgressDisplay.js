import { useQuiz } from '../constexts/QuizContext';

function ProgressDisplay() {
  const { numQuestions, answer, index, points, maxPossiblePoints } = useQuiz();
  return (
    <div className='progress'>
      <progress
        max={numQuestions}
        min='0'
        value={index + Number(answer !== null)}
      />

      <p>
        Question <strong>{index + 1} </strong> / {numQuestions}
      </p>

      <p>
        Points <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </div>
  );
}

export default ProgressDisplay;
