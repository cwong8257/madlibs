import React from 'react';
import PropTypes from 'prop-types';

/**
 * Base input component
 *
 * @component
 * @example
 * const label = 'name'
 * const name = 'name'
 * const value = 'Bob'
 * const handleOnBlur = () => {}
 * const handleOnChange = () => {}
 * return (
 *   <Input
 *     label={label}
 *     name={name}
 *     value={value}
 *     handleOnBlur={handleOnBlur}
 *     handleOnChange={handleOnChange}
 *   />
 * )
 */
const Input = ({
  label,
  handleOnBlur,
  handleOnChange,
  name,
  value,
}) => (
  <div className="input">
    <label className="input__label" htmlFor={name}>{label}</label>
    <input
      className="input__field"
      id={name}
      type="text"
      name={name}
      value={value}
      onBlur={handleOnBlur}
      onChange={handleOnChange}
    />
  </div>
);

export default React.memo(Input);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  handleOnBlur: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

Input.defaultProps = {
  value: '',
};
