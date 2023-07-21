import { useQuiz } from '../constexts/QuizContext';

function Options({ question }) {
  const { answer, dispatch } = useQuiz();

  const hasAnswered = answer !== null;

  return (
    <div className='options'>
      {question.options.map((option, index) => (
        <button
          className='btn btn-option'
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
