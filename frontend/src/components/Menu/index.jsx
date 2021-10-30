import Button from 'components/Button/index.jsx';
import Input from 'components/Input';
import { exportEmployeesToCSV } from 'features/employee/employeeSlice.js';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Wrapper, Container, Heading, Tab } from './styles.js';

const Menu = ({ children }) => {
  const methods = useForm();
  const dispatch = useDispatch();

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
            <Button
              onClick={() => {
                dispatch(exportEmployeesToCSV());
              }}
              color="darkViolet"
            >
              Export
            </Button>
            {children}
            {/* TODO - Component Sa Export All */}
          </Container>
        </FormProvider>
      </Wrapper>
    </>
  );
};

export default Menu;
