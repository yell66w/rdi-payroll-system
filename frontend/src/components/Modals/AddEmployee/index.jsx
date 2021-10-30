import React from 'react';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

const AddEmployee = ({ isOpen, onClose }) => {
  return (
    <ReactModal isOpen={isOpen} contentLabel="Add Employee Modal">
      <button onClick={onClose}>Close Modal</button>
    </ReactModal>
  );
};

export default AddEmployee;
