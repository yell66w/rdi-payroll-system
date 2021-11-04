import Menu from 'components/Menu';
import Settings from 'components/Menu/settings';
import Table from 'components/Table';
import { settingsSelector } from 'features/settings/settingsSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTable } from 'react-table';
import { Wrapper, Container, Flex, TableContainer } from './styles';
import Toolbar from 'components/Toolbar';
import { findAllEmployees } from 'features/employee/employeeSlice';
import { theme } from 'theme';
import colorPicker from 'helpers/colorPicker';
import { Route } from 'react-router-dom';
import getTimeDuration from 'helpers/getTimeDuration';

const CashAdvance = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useSelector((state) => state.employees);
  const { isOpen } = useSelector(settingsSelector);

  useEffect(() => {
    dispatch(findAllEmployees());
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
  const tableInstance = useTable({ columns, data });
  return (
    <>
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
            <Toolbar></Toolbar>
          </Flex>
          <Flex bg="gray" flex={1}>
            {isOpen && <Menu />}
          </Flex>
        </Container>
      </Wrapper>
    </>
  );
};

export default CashAdvance;
