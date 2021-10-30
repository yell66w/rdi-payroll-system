import { Container, Select, Wrapper, Label } from './styles.js';
import { useFormContext } from 'react-hook-form';

const SelectField = ({
  type = 'text',
  placeholder = '',
  label,
  disabled = false,
  name,
  children,
  ...rest
}) => {
  const { register } = useFormContext();
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Container disabled={disabled}>
        <Select
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          {...register(name)}
          {...rest}
        >
          {children}
        </Select>
      </Container>
    </Wrapper>
  );
};

export default SelectField;
