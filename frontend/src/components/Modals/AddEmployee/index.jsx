import React from 'react';
import ReactModal from 'react-modal';
import { ModalStyle, OverlayStyle } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from 'components/InputField';
import { FormProvider, useForm } from 'react-hook-form';
import RadioInput from 'components/RadioInput';
import SelectField from 'components/SelectField';
ReactModal.setAppElement('#root');

//TODO MOVE TO UTILS/HELPERS
const employeeSchema = yup
  .object()
  .shape({
    employee_number: yup.string().required(),
    last_name: yup.string().required(),
    first_name: yup.string().required(),
    middle_name: yup.string().required(),
    birth_date: yup.string().required(),
    street: yup.string().required(),
    city: yup.string().required(),
    province: yup.string().required(),
    postal_code: yup.string().required(),
    sex: yup.string().required(),
    email: yup.string().email().required(),
    contact_no: yup.string().required(),
    employment_type: yup.string().required(),
    company: yup.string().required(),
    department: yup.string().required(),
    position: yup.string().required(),
    basic_pay: yup.number().required(),
    date_hired: yup.string().required(),
    time_shift: yup.string().required(),
    nbi_clearance: yup.mixed(),
    nso: yup.mixed(),
    sss: yup.mixed(),
    photo: yup.mixed()
  })
  .required();

const AddEmployee = ({ isOpen, onClose }) => {
  const methods = useForm({ resolver: yupResolver(employeeSchema) });
  const { handleSubmit } = methods;
  const onSubmit = (data) => console.log(data);
  return (
    <ReactModal
      contentElement={(props, children) => <ModalStyle {...props}>{children}</ModalStyle>}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
      isOpen={isOpen}
      contentLabel="Add Employee Modal"
    >
      <header>
        <h1>Personal Information</h1>
        <button onClick={onClose}>Close Modal</button>
      </header>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              <RadioInput value="MALE" name="sex" label="MALE" placeholder="MALE" />
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
              <InputField name="postal_code" label="Postal Code" placeholder="Postal Code" />
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

              <SelectField label="Company" placeholder="Company" name="company" id="company">
                <option value="1">COMPANY 1 </option>
                <option value="2">COMPANY 2 </option>
              </SelectField>

              <SelectField
                label="Department"
                placeholder="Department"
                name="department"
                id="department"
              >
                <option value="1">DEPT 1 </option>
                <option value="2">DEPT 2 </option>
              </SelectField>

              <SelectField label="Position" placeholder="Position" name="position" id="position">
                <option value="1">POSITION 1 </option>
                <option value="2">POSITION 2 </option>
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
              <InputField
                type="file"
                name="nbi_clearance"
                label="NBI Clearance"
                placeholder="NBI Clearance"
              />
              <InputField type="file" name="nso" label="NSO" placeholder="NSO" />
              <InputField type="file" name="sss" label="SSS" placeholder="SSS" />
            </section>
          </div>
          <div>
            <InputField type="file" name="photo" label="Add Photo" placeholder="Add Photo" />
            <button>Import</button>
            <button type="submit">Save Record</button>
            <button>Cancel</button>
          </div>
        </form>
      </FormProvider>
    </ReactModal>
  );
};

export default AddEmployee;
