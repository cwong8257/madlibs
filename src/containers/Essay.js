import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Sentence from '../components/Sentence';
import { TOKEN } from '../constants';
import { editEssay } from '../ducks/madlibs';

const Essay = () => {
  const fieldAnswers = useSelector((state) => state.fieldAnswers);
  const fieldOrder = useSelector((state) => state.fieldOrder);
  const dispatch = useDispatch();

  /**
   * Determines if all questions have answers
   */
  const shouldShowEditButton = Object.keys(fieldAnswers).length === fieldOrder.length;

  /**
   * List of fields with answered questions
   */
  const answeredFields = fieldOrder.filter((fieldName) => fieldName in fieldAnswers);

  /**
   * Called when user clicks the edit essay button
   *
   * @param {SyntheticEvent} e
   */
  const handleEditEssay = () => {
    dispatch(editEssay());
  };

  return (
    <section className="essay match-area__section match-area__section--white">
      <h2 className="heading">Your essay text</h2>
      <p className="essay__text">
        {answeredFields.map((field) => {
          // assuming there will only be one token in any given template
          const [leftText, rightText] = fieldAnswers[field].template.split(TOKEN);

          return (
            <Sentence
              key={field}
              left={leftText}
              bold={fieldAnswers[field].answer}
              right={rightText}
            />
          );
        })}
      </p>
      {shouldShowEditButton && <button className="button" onClick={handleEditEssay}>Edit</button>}
    </section>
  );
};

export default Essay;
