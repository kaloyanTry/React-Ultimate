// import DateCounter from './DateCounter';
import Header from './Header';
import Main from './Main';
import { useEffect, useReducer } from 'react';

const initialState = {
  questions: [],
  status: 'loading',
};
function reducer(state, action) {
  switch (action.type) {
    case 'dataRecieved':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };
    default:
      throw new Error('Actioin unknown');
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataRecieved', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <div className='app'>
      {/* <DateCounter /> */}
      <Header />
      <Main>
        <p>15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
