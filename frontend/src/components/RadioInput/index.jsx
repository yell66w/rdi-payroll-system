import { useFormContext } from 'react-hook-form';
import { Label, Input, Container } from './styles.js';

const RadioInput = ({ children, label, name, ...rest }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <Container>
      <Label>
        <span className="radio__input">
          <Input {...register(name)} {...rest} type="radio" name={name} />
          <span className="radio__control"></span>
        </span>
        <span className="radio__label">{children ? children : label}</span>
      </Label>
      <p style={{ color: 'red' }}>{errors[name]?.message}</p>
    </Container>
  );
};

export default RadioInput;
