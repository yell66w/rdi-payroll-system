import Button from 'components/Button';
import React from 'react';
import { Box, Wrapper } from './styles';

const Toolbar = () => {
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
