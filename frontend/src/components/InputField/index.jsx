import { Container, Input, Wrapper, Label } from './styles.js';
import { useFormContext } from 'react-hook-form';

const InputField = ({
  type = 'text',
  placeholder = '',
  label,
  disabled = false,
  name,
  ...rest
}) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Container disabled={disabled}>
        <Input
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          {...register(name)}
          {...rest}
        />
      </Container>
      {/* TODO ERROR STYLE */}
      <p style={{ color: 'red' }}>{errors[name]?.message}</p>
    </Wrapper>
  );
};

export default InputField;
