import { Label, Input, Container } from './styles.js';

const Radio = ({ children }) => {
  return (
    <Container>
      <Label>
        <span className="radio__input">
          <Input type="radio" name="radio" />
          <span className="radio__control"></span>
        </span>
        <span className="radio__label">{children}</span>
      </Label>
    </Container>
  );
};

export default Radio;
