import { Wrapper, Container, Box } from './styles';
import Check from 'assets/icons/Check';

const Checkbox = ({ label = 'Morning' }) => {
  return (
    <Wrapper>
      <Container>
        <input type="checkbox" name="checkbox" />
        <Box />
        <Check />
      </Container>
      <span>{label}</span>
    </Wrapper>
  );
};

export default Checkbox;
