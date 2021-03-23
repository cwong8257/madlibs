import React from 'react';
import { useSelector } from 'react-redux';

import AboutMe from './AboutMe';
import Essay from './Essay';
import EditEssay from './EditEssay';
import '../styles/main.scss';

const App = () => {
  const isEditingEssay = useSelector((state) => state.isEditingEssay);

  return (
    <main className="match-area">
      {isEditingEssay ? (
        <EditEssay />
      ) : (
        <>
          <AboutMe />
          <Essay />
        </>
      )}
    </main>
  );
};

export default App;
