import { useState } from 'react';

import { Container, Label, List, Options, Wrapper } from './styles.js';
import { ReactComponent as DropdownIcon } from 'assets/icons/dropdown.svg';

const Dropdown = ({ label, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [labelState, setLabelState] = useState(label);

  return (
    <Wrapper>
      <Container onClick={() => setIsOpen(!isOpen)}>
        <Label>{labelState}</Label>
        <DropdownIcon />
      </Container>
      {isOpen && (
        <Options>
          {options.map((li, index) => (
            <List
              key={index}
              onClick={() => {
                setIsOpen(false);
                setLabelState(li);
              }}
            >
              {li}
            </List>
          ))}
        </Options>
      )}
    </Wrapper>
  );
};

export default Dropdown;
