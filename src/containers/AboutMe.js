import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Input from '../components/Input';
import { COPY } from '../constants';
import { submitField } from '../ducks/madlibs';


const AboutMe = () => {
  const [localFieldAnswers, setLocalFieldAnswers] = useState({});
  const fieldOrder = useSelector((state) => state.fieldOrder);
  const dispatch = useDispatch();

  /**
   * Called when user types in input field.
   * Updates the input value to local component state
   *
   * @param {String} field
   * @param {SyntheticEvent} e
   */
  const handleOnChange = (field, e) => {
    setLocalFieldAnswers({
      ...localFieldAnswers,
      [field]: e.target.value,
    });
  };

  /**
   * Called when user blurs from input field.
   * Dispatches action to submit field value to store
   *
   * @param {String} field
   * @param {SyntheticEvent} e
   */
  const handleOnBlur = (field) => {
    dispatch(submitField({
      id: field,
      answer: localFieldAnswers[field],
    }));
  };

  return (
    <section className="match-area__section">
      <h2 className="heading">About Me</h2>

      <form className="about-form">
        {fieldOrder.map((field) => (
          <div className="about-form__input-group" key={field}>
            <Input
              handleOnChange={(e) => handleOnChange(field, e)}
              handleOnBlur={(e) => handleOnBlur(field, e)}
              value={localFieldAnswers[field]}
              label={COPY[field]}
              name={field}
            />
          </div>
        ))}
      </form>
    </section>
  );
};

export default AboutMe;
