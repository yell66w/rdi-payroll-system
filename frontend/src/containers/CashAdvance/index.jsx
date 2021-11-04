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
import { findAllCashAdvance } from 'features/cash_advance/cashAdvanceSlice';
import { theme } from 'theme';
import colorPicker from 'helpers/colorPicker';

const CashAdvance = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useSelector((state) => state.cash_advance);
  const { isOpen } = useSelector(settingsSelector);

  useEffect(() => {
    dispatch(findAllCashAdvance());
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'NAME OF EMPLOYEE',
        Cell: (props) => {
          return (
            <div>
              {props.row.original.employee.first_name} {props.row.original.employee.last_name}
            </div>
          );
        }
      },
      {
        Header: 'DEPARTMENT',
        accessor: 'employee.department.name'
      },
      {
        Header: 'STATUS',
        accessor: 'status',
        Cell: (props) => {
          return (
            <p
              style={{
                color: `${colorPicker(props.value, 'STATUS')}`
              }}
            >
              {props.value}
            </p>
          );
        }
      },
      {
        Header: 'APPROVAL STATUS',
        accessor: 'approval_status',
        Cell: (props) => {
          return (
            <p
              style={{
                color: `${colorPicker(props.value, 'APPROVAL_STATUS')}`
              }}
            >
              {props.value}
            </p>
          );
        }
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
          <Toolbar></Toolbar>
        </Flex>
        <Flex bg="gray" flex={1}>
          {isOpen && <Menu />}
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default CashAdvance;
