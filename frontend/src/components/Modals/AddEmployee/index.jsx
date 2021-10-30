import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/modal';
import Button from 'components/Button';

const AddEmployee = ({ isOpen, onClose }) => {
  return (
    <Modal bg="red" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Hello World</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
          <Button>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddEmployee;
