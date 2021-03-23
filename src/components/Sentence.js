import React from 'react';
import PropTypes from 'prop-types';

/**
 * Partially bold sentence
 *
 * @component
 * @example
 * const left = 'I am'
 * const bold = 'bold'
 * const right = 'text.'
 * return (
 *   <Sentence
 *     left={left}
 *     bold={bold}
 *     right={right}
 *   />
 * )
 */
const Sentence = ({ left, right, bold }) => (
  <span className="sentence">
    {left}<strong>{bold}</strong>{right}
    {/* The space below is needed to for whitespace between <span> elements */}
    {' '}
  </span>
);

export default React.memo(Sentence);

Sentence.propTypes = {
  left: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
  bold: PropTypes.string.isRequired,
};
