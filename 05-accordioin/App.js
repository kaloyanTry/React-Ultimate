import { useState } from 'react';

import './index.css';

const faqs = [
  {
    title: 'What is the reason to learn it?',
    text: 'Improving web dev skills: HTML, CSS, JS, SQL, NoSQL, React',
  },
  {
    title: 'What is the most difficult part of all?',
    text: 'Remembering all the different concepts, rules, standarts, recommendatins. THe world of web is extremly dinamic and changeble.',
  },
  {
    title: 'What is the most important part of all?',
    text: 'JavaScript. Even that it is not extremly difficult to learn, the language is a keystone for web development. It is used almost everywhere.',
  },
];

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='accordion'>
      <h1>React Accordion App</h1>

      {data.map((faq, i) => (
        <Item
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title={faq.title}
          num={i}
          key={faq.title}
        >
          {faq.text}
        </Item>
      ))}
    </div>
  );
}

function Item({ num, isOpen, setIsOpen, title, children }) {
  const isCurrOpen = num === isOpen;

  function handleToggle() {
    setIsOpen(isCurrOpen ? null : num);
  }

  return (
    <div className={`item ${isCurrOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className='number'>{num <= 9 ? `0${num + 1}` : num + 1}</p>
      <p className='title'>{title}</p>
      <p className='icon'>{isCurrOpen ? '-' : '+'}</p>

      {isCurrOpen && <div className='content-box'>{children}</div>}
    </div>
  );
}

export default App;
