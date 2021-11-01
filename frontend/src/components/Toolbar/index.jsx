import Button from 'components/Button';
import { exportEmployeesToCSV } from 'features/employee/employeeSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Wrapper } from './styles';

const Toolbar = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Box>
        <Button fontWeight="bold" fontFamily="avenirRoman">
          Generate All
        </Button>
      </Box>
      <Box>
        <Button
          fontWeight="bold"
          borderColor="darkViolet"
          border="2px"
          bg="transparent"
          color="darkViolet"
        >
          View All
        </Button>
        <Button
          onClick={() => {
            dispatch(exportEmployeesToCSV());
          }}
          fontWeight="bold"
          borderColor="darkViolet"
          border="2px"
          bg="transparent"
          color="darkViolet"
        >
          Export All
        </Button>
      </Box>
    </Wrapper>
  );
};

export default Toolbar;
