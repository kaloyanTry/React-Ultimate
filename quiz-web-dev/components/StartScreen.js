import { useQuiz } from '../constexts/QuizContext';

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className='startScreen'>
      <h2>Welcome to the WebDev Quiz</h2>
      <h3>{numQuestions} questions to test your knowledge</h3>
      <p>Enjoy playing it!</p>

      <button
        className='btn btn-action'
        onClick={() => dispatch({ type: 'quizStarted' })}
      >
        Start the Quiz
      </button>
    </div>
  );
}

export default StartScreen;
