import { useState } from 'react';
import Button from 'components/Button/index.jsx';
import Checkbox from 'components/Checkbox/index.jsx';
import Dropdown from 'components/Dropdown/index.jsx';
import Input from 'components/Input';
import Radio from 'components/Radio/index.jsx';
import Toggle from 'components/Toggle/index.jsx';
import { useForm, FormProvider } from 'react-hook-form';
import {
  Wrapper,
  Heading,
  Tab,
  RadioWrapper,
  DropdownWrapper,
  Text,
  FormContainer,
  Grid,
  Form,
  ButtonGroup
} from './styles.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findAllCompanies } from 'features/company/companySlice.js';
import { findAllDepartments } from 'features/department/departmentSlice.js';
import { findAllPositions } from 'features/position/positionSlice.js';
import { findAllEmployees, findAllFilteredEmployees } from 'features/employee/employeeSlice.js';

const Menu = () => {
  const methods = useForm();
  const { handleSubmit, reset, setValue } = methods;

  const [checkboxValue, setCheckboxValue] = useState(false);
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.data);
  const departments = useSelector((state) => state.departments.data);
  const positions = useSelector((state) => state.positions.data);

  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    dispatch(findAllCompanies);
    dispatch(findAllDepartments);
    dispatch(findAllPositions);
  }, []);

  const onSubmit = (data) => {
    // TODO - REFACTOR DROPDOWN
    setIsReset(false);
    data.company = selectedCompany;
    data.department = selectedDepartment;
    data.position = selectedPosition;
    dispatch(findAllFilteredEmployees(data));
  };

  const onReset = () => {
    reset({});
    setSelectedCompany('');
    setSelectedDepartment('');
    setSelectedPosition('');
    setIsReset(true);
    dispatch(findAllEmployees());
  };

  return (
    <>
      <Wrapper>
        <Heading>
          <Tab>FILTERS</Tab>
          <Tab>SORT</Tab>
        </Heading>

        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormContainer>
              <Input name="search" type="search" placeholder="Search" menu />
              <RadioWrapper>
                <Radio value="MALE" name="sex">
                  Male
                </Radio>
                <Radio value="FEMALE" name="sex">
                  Female
                </Radio>
              </RadioWrapper>
              <DropdownWrapper>
                {/* TODO: Dropdown options */}
                <Dropdown
                  isReset={isReset}
                  setValue={setSelectedCompany}
                  name="company"
                  label="Company"
                  options={companies}
                />
                <Dropdown
                  isReset={isReset}
                  setValue={setSelectedDepartment}
                  name="department"
                  label="Department"
                  options={departments}
                />
                <Dropdown
                  isReset={isReset}
                  setValue={setSelectedPosition}
                  name="position"
                  label="Position"
                  options={positions}
                />
                {/* <Dropdown name="level" label="Level" options={['a', 'b', 'c', 'd', 'e']} /> */}
              </DropdownWrapper>
              <div>
                <Text>Time Duration</Text>
                <Grid col={1}>
                  <Input name="date_hired_from" type="date" menu />
                  <Input name="date_hired_to" type="date" menu />
                </Grid>
              </div>
              <div>
                <Text>Schedule</Text>
                <Toggle
                  label="All"
                  checked={checkboxValue}
                  onChange={() => {
                    setCheckboxValue(!checkboxValue);
                    // TODO - REFACTOR
                    if (checkboxValue) {
                      setValue('MORNING', null);
                      setValue('NOON', null);
                      setValue('MID_MORNING', null);
                      setValue('AFTERNOON', null);
                    }
                  }}
                />
                <Grid col={2}>
                  <Checkbox name="MORNING" label="Morning" disabled={!checkboxValue} />
                  <Checkbox name="NOON" label="Noon" disabled={!checkboxValue} />
                  <Checkbox name="MID_MORNING" label="Mid-morning" disabled={!checkboxValue} />
                  <Checkbox name="AFTERNOON" label="Afternoon" disabled={!checkboxValue} />
                </Grid>
              </div>
            </FormContainer>
            <ButtonGroup>
              {/* TODO - TEMPORARY FILTER BUTTO */}
              <Button minW="10rem" h="2.5rem" type="submit">
                FILTER
              </Button>
              <Button minW="10rem" h="2.5rem" type="submit" onClick={onReset}>
                Reset Selection
              </Button>
            </ButtonGroup>
          </Form>
        </FormProvider>
      </Wrapper>
    </>
  );
};

export default Menu;
