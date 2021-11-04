import Menu from 'components/Menu';
import Settings from 'components/Menu/settings';
import Table from 'components/Table';
import { settingsSelector } from 'features/settings/settingsSlice';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { findAllEmployees } from 'features/employee/employeeSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTable } from 'react-table';
import { Wrapper, TextLink, Container, Flex, TableContainer } from './styles';
import AddEmployee from 'components/Modals/AddEmployee';
import Button from 'components/Button/';
import getTimeDuration from 'helpers/getTimeDuration';
import Toolbar from 'components/Toolbar';
import { ROLES } from 'constants/constants';
import { findAllCashAdvance } from 'features/cash_advance/cashAdvanceSlice';

const CashAdvance = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useSelector((state) => state.cash_advance);
  const { isOpen } = useSelector(settingsSelector);
  const authRole = useSelector((state) => state.auth.role);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalOpen = () => {
    setIsModalOpen(true);
  };
  const onModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(findAllCashAdvance());
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'COMPANY',
        accessor: 'employee.company.name' // accessor is the "key" in the data
      },
      {
        Header: 'DEPARTMENT',
        accessor: 'employee.department.name'
      },
      {
        Header: 'POSITION',
        accessor: 'employee.position.name'
      },
      {
        Header: 'EMPLOYEE',
        Cell: (props) => {
          return (
            <div>
              {props.row.original.employee.first_name} {props.row.original.employee.last_name}
            </div>
          );
        }
      },
      {
        Header: 'STATUS',
        accessor: 'status'
      },
      {
        Header: 'APPROVAL STATUS',
        accessor: 'approval_status'
      }
    ],
    []
  );

  const tableInstance = useTable({ columns, data });
  return (
    <Wrapper>
      <Container>
        <Flex justify="space-between" direction="column" flex={8}>
          <TableContainer>
            <Settings />
            {isFetching ? (
              <div>Loading</div>
            ) : data.length > 0 ? (
              <Table tableInstance={tableInstance} />
            ) : (
              'Wow, such empty'
            )}
          </TableContainer>
          <Toolbar
            leftChildren={
              authRole === ROLES.ENCODER ? (
                <Button
                  onClick={onModalOpen}
                  minW="10rem"
                  h="2rem"
                  fontWeight="bold"
                  fontFamily="avenirRoman"
                >
                  Add Record
                </Button>
              ) : null
            }
          ></Toolbar>
        </Flex>
        <Flex bg="gray" flex={1}>
          {isOpen && <Menu />}
        </Flex>
      </Container>
      <AddEmployee isOpen={isModalOpen} onClose={onModalClose} />
    </Wrapper>
  );
};

export default CashAdvance;
