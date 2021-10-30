import React from 'react';
import ReactModal from 'react-modal';
import { ModalStyle, OverlayStyle } from './styles';
ReactModal.setAppElement('#root');

const AddEmployee = ({ isOpen, onClose }) => {
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
      <form action="">
        <div>
          <section>
            <input type="text" placeholder="Employee Number" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Middle Name" />
            <input type="radio" id="MALE" name="sex" value="MALE"></input>
            <input type="radio" id="FEMALE" name="sex" value="FEMALE"></input>
            <input type="date" placeholder="Birth Date" />
            <input type="text" placeholder="Street" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Province" />
            <input type="text" placeholder="Postal Code" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Contact Number" />
          </section>
          <section>
            <h1>Employment Status</h1>
            <select name="employement_type" id="">
              <option value="1">ET 1 </option>
              <option value="2">ET 2 </option>
            </select>
            <select name="company" id="">
              <option value="1">COMPANY 1 </option>
              <option value="2">COMPANY 2 </option>
            </select>
            <select name="department" id="">
              <option value="1">DEPT 1 </option>
              <option value="2">DEPT 2 </option>
            </select>
            <select name="position" id="">
              <option value="1">POSITION 1 </option>
              <option value="2">POSITION 2 </option>
            </select>
            <input type="number" placeholder="Basic Pay" />
            <input type="date" placeholder="Date Hired" />
            <select name="time_shift" id="">
              <option value="1">TIME 1 </option>
              <option value="2">TIME 2 </option>
            </select>
          </section>
          <section>
            <h1>Legal Documents</h1>
            <input type="file" placeholder="NBI Clearance" />
            <input type="file" placeholder="NSO" />
            <input type="file" placeholder="SSS" />
          </section>
        </div>
        <div>
          <input type="file" placeholder="Add Photo" />
          <button>Import</button>
          <button type="submit">Save Record</button>
          <button>Cancel</button>
        </div>
      </form>
    </ReactModal>
  );
};

export default AddEmployee;
