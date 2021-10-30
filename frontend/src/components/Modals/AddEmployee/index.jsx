import React from 'react';
import ReactModal from 'react-modal';
import { useForm } from 'react-hook-form';
import { ModalStyle, OverlayStyle } from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(employeeSchema)
  });
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <section>
            <p>{errors.employee_number?.message}</p>
            <p>{errors.last_name?.message}</p>
            <p>{errors.first_name?.message}</p>
            <p>{errors.middle_name?.message}</p>
            <p>{errors.sex?.message}</p>
            <p>{errors.birth_date?.message}</p>
            <p>{errors.street?.message}</p>
            <p>{errors.city?.message}</p>
            <p>{errors.province?.message}</p>
            <p>{errors.postal_code?.message}</p>
            <p>{errors.email?.message}</p>
            <p>{errors.contact_no?.message}</p>
            <p>{errors.employement_type?.message}</p>
            <p>{errors.company?.message}</p>
            <p>{errors.department?.message}</p>
            <p>{errors.position?.message}</p>
            <p>{errors.basic_pay?.message}</p>
            <p>{errors.date_hired?.message}</p>
            <p>{errors.time_shift?.message}</p>
            <p>{errors.nbi_clearance?.message}</p>
            <p>{errors.nso?.message}</p>
            <p>{errors.sss?.message}</p>
            <p>{errors.photo?.message}</p>
            <input type="text" placeholder="Employee Number" {...register('employee_number')} />
            <input type="text" placeholder="Last Name" {...register('last_name')} />
            <input type="text" placeholder="First Name" {...register('first_name')} />
            <input type="text" placeholder="Middle Name" {...register('middle_name')} />
            <input type="radio" id="MALE" name="sex" value="MALE" {...register('sex')}></input>
            <input type="radio" id="FEMALE" name="sex" value="FEMALE" {...register('sex')}></input>
            <input type="date" placeholder="Birth Date" {...register('birth_date')} />
            <input type="text" placeholder="Street" {...register('street')} />
            <input type="text" placeholder="City" {...register('city')} />
            <input type="text" placeholder="Province" {...register('province')} />
            <input type="text" placeholder="Postal Code" {...register('postal_code')} />
            <input type="email" placeholder="Email Address" {...register('email')} />
            <input type="tel" placeholder="Contact Number" {...register('contact_no')} />
          </section>
          <section>
            <h1>Employment Status</h1>
            <select name="employment_type" id="employment_type" {...register('employment_type')}>
              <option value="1">ET 1 </option>
              <option value="2">ET 2 </option>
            </select>
            <select name="company" id="company" {...register('company')}>
              <option value="1">COMPANY 1 </option>
              <option value="2">COMPANY 2 </option>
            </select>
            <select name="department" id="department" {...register('department')}>
              <option value="1">DEPT 1 </option>
              <option value="2">DEPT 2 </option>
            </select>
            <select name="position" id="position" {...register('position')}>
              <option value="1">POSITION 1 </option>
              <option value="2">POSITION 2 </option>
            </select>
            <input type="number" placeholder="Basic Pay" {...register('basic_pay')} />
            <input type="date" placeholder="Date Hired" {...register('date_hired')} />
            <select name="time_shift" id="time_shift" {...register('time_shift')}>
              <option value="1">TIME 1 </option>
              <option value="2">TIME 2 </option>
            </select>
          </section>
          <section>
            <h1>Legal Documents</h1>
            <input type="file" placeholder="NBI Clearance" {...register('nbi_clearance')} />
            <input type="file" placeholder="NSO" {...register('nso')} />
            <input type="file" placeholder="SSS" {...register('sss')} />
          </section>
        </div>
        <div>
          <input type="file" placeholder="Add Photo" {...register('photo')} />
          <button>Import</button>
          <button type="submit">Save Record</button>
          <button>Cancel</button>
        </div>
      </form>
    </ReactModal>
  );
};

export default AddEmployee;
