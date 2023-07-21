import { useQuiz } from '../constexts/QuizContext';

function NextQuestionButton() {
  const { numQuestions, answer, index, dispatch } = useQuiz();

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className='btn btn-next'
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className='btn btn-finish'
        onClick={() => dispatch({ type: 'quizFinished' })}
      >
        Finish
      </button>
    );
}

export default NextQuestionButton;
