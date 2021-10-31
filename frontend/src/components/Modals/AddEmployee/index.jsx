import React from 'react';
import ReactModal from 'react-modal';
import { ModalStyle, OverlayStyle } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from 'components/InputField';
import { FormProvider, useForm } from 'react-hook-form';
import RadioInput from 'components/RadioInput';
import SelectField from 'components/SelectField';
import { useDispatch } from 'react-redux';
import { addEmployee, clearState } from 'features/employee/employeeSlice';
import { useEffect } from 'react';
import { findAllCompanies } from 'features/company/companySlice';
import { findAllDepartments } from 'features/department/departmentSlice';
import { findAllPositions } from 'features/position/positionSlice';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
ReactModal.setAppElement('#root');

//TODO MOVE TO UTILS/HELPERS
const employeeSchema = yup
  .object()
  .shape({
    employee_number: yup.string().required('Employee number is required.'),
    last_name: yup.string().required('Last name is required.'),
    first_name: yup.string().required('First name is required.'),
    middle_name: yup.string().required('Middle name is required.'),
    birth_date: yup.string().required('Birth date is required.'),
    street: yup.string().required('Street is required.'),
    city: yup.string().required('City is required.'),
    province: yup.string().required('Province is required.'),
    postal_code: yup.string().required('Postal code is required.'),
    sex: yup.string().required('Sex is required.'),
    email: yup.string().email().required('Email is required.'),
    contact_no: yup.string().required('Contact number is required.'),
    employment_type: yup.string().required('Employment type is required.'),
    company_id: yup.string().required('Company is required.'),
    department_id: yup.string().required('Department is required.'),
    position_id: yup.string().required('Position is required.'),
    basic_pay: yup.number().required('Basic Pay is required.'),
    date_hired: yup.string().required('Date hired is required.'),
    time_shift: yup.string().required('Time shift is required.')
    // nbi_clearance: yup.mixed().required(),
    // nso: yup.mixed().required(),
    // sss: yup.mixed().required(),
    // photo: yup.mixed().required()
  })
  .required();

const AddEmployee = ({ isOpen, onClose }) => {
  const methods = useForm({ resolver: yupResolver(employeeSchema) });
  const { handleSubmit } = methods;
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.data);
  const departments = useSelector((state) => state.departments.data);
  const positions = useSelector((state) => state.positions.data);
  // const { isFetching, isSuccess, isError } = useSelector((state) => state.employees);
  const onSubmit = (data) => {
    //TODO
    data.address = `${data.street} ${data.city} ${data.province}`;
    data.time_shift_to = data.time_shift;
    data.time_shift_from = data.time_shift;
    dispatch(addEmployee(data));
    onClose();
  };
  useEffect(() => {
    dispatch(findAllCompanies());
    dispatch(findAllDepartments());
    dispatch(findAllPositions());
  }, []);

  return (
    <ReactModal
      contentElement={(props, children) => <ModalStyle {...props}>{children}</ModalStyle>}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
      isOpen={isOpen}
      contentLabel="Add Employee Modal"
    >
      {/* HEADER */}
      <header>
        <h1>Personal Information</h1>
        <button onClick={onClose}>Close Modal</button>
      </header>
      {/* FORM BODY */}
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* LEFT DIV */}
          <div>
            <section>
              <InputField
                name="employee_number"
                label="Employee Number"
                placeholder="Employee Number"
              />
              <InputField name="last_name" label="Last Name" placeholder="Last Name" />

              <InputField name="first_name" label="First Name" placeholder="First Name" />

              <InputField name="middle_name" label="Middle Name" placeholder="Middle Name" />

              <RadioInput
                checked="checked"
                value="MALE"
                name="sex"
                label="MALE"
                placeholder="MALE"
              />
              <RadioInput value="FEMALE" name="sex" label="FEMALE" placeholder="FEMALE" />
              <InputField
                type="date"
                name="birth_date"
                label="Birth Date"
                placeholder="Birth Date"
              />
              <InputField name="street" label="Street" placeholder="Street" />
              <InputField name="city" label="City" placeholder="City" />
              <InputField name="province" label="Province" placeholder="Province" />
              <InputField name="postal_code" label="Postal Code" placeholder="Postal Code" />
              <InputField name="email" label="Email Address" placeholder="Email Address" />
              <InputField
                type="tel"
                name="contact_no"
                label="Contact Number"
                placeholder="Contact Number"
              />
            </section>
            <section>
              <h1>Employment Status</h1>
              <SelectField
                label="Employment Type"
                placeholder="Employment Type"
                name="employment_type"
                id="employment_type"
              >
                <option value="1">ET 1 </option>
                <option value="2">ET 2 </option>
              </SelectField>

              <SelectField label="Company" placeholder="Company" name="company_id" id="company_id">
                {companies.map((company) => (
                  <option value={company.id} key={company.id}>
                    {company.name}
                  </option>
                ))}
              </SelectField>

              <SelectField
                label="Department"
                placeholder="Department"
                name="department_id"
                id="department_id"
              >
                {departments.map((department) => (
                  <option value={department.id} key={department.id}>
                    {department.name}
                  </option>
                ))}
              </SelectField>

              <SelectField
                label="Position"
                placeholder="Position"
                name="position_id"
                id="position_id"
              >
                {positions.map((position) => (
                  <option value={position.id} key={position.id}>
                    {position.name}
                  </option>
                ))}
              </SelectField>

              <InputField
                type="number"
                name="basic_pay"
                label="Basic Pay"
                placeholder="Basic Pay"
              />

              <InputField
                type="date"
                name="date_hired"
                label="Date Hired"
                placeholder="Date Hired"
              />
              <SelectField
                label="Time Shift"
                placeholder="Time Shift"
                name="time_shift"
                id="time_shift"
              >
                <option value="1">TIME 1 </option>
                <option value="2">TIME 2 </option>
              </SelectField>
            </section>
            <section>
              <h1>Legal Documents</h1>
              {/* TODO FILEINPUT COMPONENT */}
              {/* <FileInput name="nbi_clearance" label="NBI Clearance" placeholder="NBI Clearance" /> */}
              {/* <FileInput name="nso" label="NSO" placeholder="NSO" /> */}
              {/* <FileInput name="sss" label="SSS" placeholder="SSS" /> */}
            </section>
          </div>
          {/* RIGHT DIV */}
          <div>
            {/* <FileInput name="photo" label="Add Photo" placeholder="Add Photo" /> */}
            <button>Import</button>
            <button type="submit">Save Record</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </form>
      </FormProvider>
    </ReactModal>
  );
};

export default AddEmployee;
