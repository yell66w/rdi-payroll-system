import Input from 'components/Input';
import { Wrapper, Container, Heading, Tab } from './styles.js';

const Menu = () => {
  return (
    <>
      <Wrapper>
        <Heading>
          <Tab>FILTERS</Tab>
          <Tab>SORT</Tab>
        </Heading>
        <Container>
          <Input />
        </Container>
      </Wrapper>
    </>
  );
};

export default Menu;
