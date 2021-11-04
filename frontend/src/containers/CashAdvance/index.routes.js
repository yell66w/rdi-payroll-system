import React from 'react';
import { Route } from 'react-router-dom';
import CashAdvance from '.';
import ProcessedCA from './Processed';
const CashAdvanceRoutes = () => {
  return (
    <>
      <Route path="/cash-advance" exact>
        <CashAdvance />
      </Route>
      <Route path="/cash-advance/processed">
        <ProcessedCA />
      </Route>
    </>
  );
};

export default CashAdvanceRoutes;
