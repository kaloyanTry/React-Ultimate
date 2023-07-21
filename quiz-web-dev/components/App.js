import { useQuiz } from '../constexts/QuizContext';

import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Main from './Main';
import Header from './Header';
import ProgressDisplay from './ProgressDisplay';
import Question from './Question';
import Footer from './Footer';
import Timer from './Timer';
import NextQuestionButton from './NextQuestionButton';
import FinishScreen from './FinishScreen';

function App() {
  const { status } = useQuiz();

  return (
    <div className='app'>
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
        {status === 'activated' && (
          <>
            <ProgressDisplay />
            <Question />
            <Footer>
              <Timer />
              <NextQuestionButton />
            </Footer>
          </>
        )}
        {status === 'finished' && <FinishScreen />}
      </Main>
    </div>
  );
}

export default App;
