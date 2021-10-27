import Button from 'components/Button';
import Table from 'components/Table';
import { exportAndDownloadEmployeesToCSV, findAllEmployees } from 'features/employee/employeeSlice';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTable } from 'react-table';
import { TextLink, Container, Flex } from './styles';
const EmployeeFile = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useSelector((state) => state.employees);

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
              {props.row.original.first_name} {props.row.original.last_name}
            </div>
          );
        }
      },
      {
        Header: 'TIME DURATION',
        Cell: () => {
          return <div>??? years</div>;
        }
      },
      {
        Header: '',
        accessor: 'id',
        Cell: () => {
          return <TextLink>Edit</TextLink>;
        }
      }
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  if (isFetching) {
    /**
     * TODO - Loading Component
     */
    return <div>Loading</div>;
  }
  return (
    <>
      <Container>
        <Flex flex={3}>
          {/* TODO - Component kung alang laman data */}
          {data.length > 0 ? <Table tableInstance={tableInstance} /> : 'Wow, such empty'}
        </Flex>
        <Flex justify="space-between" direction="column" bg="pink" flex={1}>
          <div>Filter Component</div>
          {/* TODO - Component Sa Export All */}
          <Button onClick={() => dispatch(exportAndDownloadEmployeesToCSV())} color="darkViolet">
            Export
          </Button>
        </Flex>
      </Container>
    </>
  );
};

export default EmployeeFile;
