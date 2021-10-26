import { useState, useEffect } from 'react';

import { ReactComponent as Lock } from 'assets/icons/lock.svg';
import { ReactComponent as Person } from 'assets/icons/person.svg';

import { Container, Input, Wrapper, Label } from './styles.js';
import { useFormContext } from 'react-hook-form';

const InputField = ({
  uname = false,
  pwd = false,
  placeholder,
  label,
  disabled = false,
  name,
  required
}) => {
  const [placeholderName, setPlaceholderName] = useState(placeholder || '');
  const { register } = useFormContext() || {};

  useEffect(() => {
    if (uname) {
      setPlaceholderName('Enter your username');
    }
    if (pwd) {
      setPlaceholderName('Enter your password');
    }
    if (placeholder) {
      setPlaceholderName(placeholder);
    }
  }, [placeholderName, placeholder, uname, pwd]);

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Container disabled={disabled}>
        {uname && (
          <span>
            <Person />
          </span>
        )}
        {pwd && (
          <span>
            <Lock />
          </span>
        )}
        <Input
          placeholder={`${placeholderName}`}
          type={pwd ? 'password' : 'text'}
          disabled={disabled}
          {...register(name, { required })}
        />
      </Container>
    </Wrapper>
  );
};

export default InputField;
