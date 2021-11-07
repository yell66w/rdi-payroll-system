import Menu from 'components/Menu';
import Settings from 'components/Menu/settings';
import Table from 'components/Table';
import { settingsSelector } from 'features/settings/settingsSlice';
import React, { forwardRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { findAllEmployees, findAllFilteredEmployees } from 'features/employee/employeeSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTable } from 'react-table';
import { Wrapper, TextLink, Container, Flex, TableContainer } from './styles';
import AddEmployee from 'components/Modals/AddEmployee';
import Button from 'components/Button/';
import getTimeDuration from 'helpers/getTimeDuration';
import Toolbar from 'components/Toolbar';
import { ROLES } from 'constants/constants';
import { Text } from 'styles';
import { useFlexLayout, useRowSelect } from 'react-table';
import IndeterminateCheckbox from 'components/IndeterminateCheckbox';

const CashAdvance = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useSelector((state) => state.employees);
  const { isOpen } = useSelector(settingsSelector);
  const authRole = useSelector((state) => state.auth.role);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    dispatch(findAllFilteredEmployees({ cash_advance_eligibility: 1 }));
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'COMPANY',
        accessor: 'company.name' // accessor is the "key" in the data
      },
      {
        Header: 'DEPARTMENT',
        accessor: 'department.name'
      },
      {
        Header: 'POSITION',
        accessor: 'position.name'
      },
      {
        Header: 'EMPLOYEE',
        Cell: (props) => {
          return (
            <div>
              {props.row.original.first_name} {props.row.original.middle_name}{' '}
              {props.row.original.last_name}
            </div>
          );
        }
      },
      {
        Header: 'TIME DURATION',
        accessor: 'date_hired',
        Cell: (props) => {
          return <div>{getTimeDuration(props.value)} years</div>;
        }
      }
    ],
    []
  );

  const tableInstance = useTable({ columns, data }, useRowSelect);
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
                <>
                  <Button
                    // onClick={onModalOpen}
                    minW="12rem"
                    h="2rem"
                    fontWeight="bold"
                    fontFamily="avenirRoman"
                  >
                    ADD EMPLOYEE ON LIST
                  </Button>
                  <Button
                    // onClick={onModalOpen}
                    minW="10rem"
                    h="2rem"
                    fontWeight="bold"
                    fontFamily="avenirRoman"
                  >
                    RUN CASH ADVANCE
                  </Button>
                </>
              ) : null
            }
          ></Toolbar>
        </Flex>
        <Flex bg="gray" flex={1}>
          {isOpen && <Menu />}
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default CashAdvance;
