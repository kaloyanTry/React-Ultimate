import { useQuiz } from '../constexts/QuizContext';

function FinishScreen() {
  const { points, highScore } = useQuiz();
  return (
    <div className='finishScreen'>
      <h4>
        Your result is {points} out of {highScore}
      </h4>
      <img src='./imgs/web-dev-400x267.jpg' alt='Web Developer' />
      {/* <img src='../../public/imgs/web-dev-400x267.jpg' alt='Web Developer' /> */}
    </div>
  );
}

export default FinishScreen;
