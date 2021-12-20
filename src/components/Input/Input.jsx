import PropTypes from 'prop-types';
import { CurrentInput, CurrentLabel } from './Input.styled';

export default function Input({
  type=null,
  name,
  value,
  pattern = null,
  title = null,
  placeholder = null,
  onChange,
}) {
  return (
    <CurrentLabel>
      {name}
      <CurrentInput
        type={type}
        name={name}
        value={value}
        pattern={pattern}
        title={title}
        placeholder = {placeholder}
        onChange={onChange}
      />
    </CurrentLabel>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};