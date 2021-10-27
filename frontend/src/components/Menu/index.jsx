import Input from 'components/Input';
import { useForm, FormProvider } from 'react-hook-form';
import { Wrapper, Container, Heading, Tab } from './styles.js';

const Menu = () => {
  const methods = useForm();

  return (
    <>
      <Wrapper>
        <Heading>
          <Tab>FILTERS</Tab>
          <Tab>SORT</Tab>
        </Heading>

        <FormProvider {...methods}>
          <Container>
            <form>
              <Input name="company" />
            </form>
          </Container>
        </FormProvider>
      </Wrapper>
    </>
  );
};

export default Menu;
