import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateEssayText, reset } from '../ducks/madlibs';

const EditEssay = () => {
  const essayText = useSelector((state) => state.essayText);
  const dispatch = useDispatch();

  /**
   * Gets called when user clicks button to start over
   *
   * @param {SyntheticEvent} e
   */
  const handleStartOver = () => {
    dispatch(reset());
  };

  /**
   * Gets called when user types in textarea
   *
   * @param {SyntheticEvent} e
   */
  const handleOnChange = (e) => {
    dispatch(updateEssayText(e.target.value));
  };

  return (
    <section className="edit-essay match-area__section">
      <h2 className="heading">Your essay text</h2>
      <textarea className="edit-essay__text" value={essayText} onChange={handleOnChange} />
      <button className="button" onClick={handleStartOver}>Start over</button>
    </section>
  );
};

export default EditEssay;
