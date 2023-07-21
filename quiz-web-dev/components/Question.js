import { useQuiz } from '../constexts/QuizContext';

import Options from './Options';

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);

  return (
    <div className='question'>
      <h4>Question: {question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
