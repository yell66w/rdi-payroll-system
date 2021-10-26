import Menu from 'components/Menu';
import Settings from 'components/Menu/settings';
import Table from 'components/Table';
import { settingsSelector } from 'features/settings/settingsSlice';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';
import { Wrapper, TextLink, Container, Flex, TableContainer } from './styles';
const EmployeeFile = () => {
  /**
   * TODO -
   * employeeSlice.js
   * const {data} = useSelector(employeeSelector)
   *
   */

  const { isOpen } = useSelector(settingsSelector);

  const data = React.useMemo(
    () => [
      {
        company: 'RDI',
        department: 'Accounting & Finance',
        position: 'Chief Financial Officer',
        employee: 'Jane M. Doe',
        time_duration: '6'
      },
      {
        company: 'RDI',
        department: 'Accounting & Finance',
        position: 'Accounting Clerk',
        employee: 'Jane M. Donut',
        time_duration: '6'
      },
      {
        company: 'RDI',
        department: 'Accounting & Finance',
        position: 'Auditor',
        employee: 'Janecee M. Doe',
        time_duration: '6'
      },
      {
        company: 'RDI',
        department: 'Accounting & Finance',
        position: 'Auditor',
        employee: 'Janecee M. Doe',
        time_duration: '6'
      },
      {
        company: 'RDI',
        department: 'Accounting & Finance',
        position: 'Auditor',
        employee: 'Janecee M. Doe',
        time_duration: '6'
      },
      {
        company: 'RDI',
        department: 'Accounting & Finance',
        position: 'Auditor',
        employee: 'Janecee M. Doe',
        time_duration: '6'
      },
      {
        company: 'RDI',
        department: 'Accounting & Finance',
        position: 'Auditor',
        employee: 'Janecee M. Doe',
        time_duration: '6'
      }
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'COMPANY',
        accessor: 'company' // accessor is the "key" in the data
      },
      {
        Header: 'DEPARTMENT',
        accessor: 'department'
      },
      {
        Header: 'POSITION',
        accessor: 'position'
      },
      {
        Header: 'EMPLOYEE',
        accessor: 'employee'
      },
      {
        Header: 'TIME DURATION',
        accessor: 'time_duration',
        Cell: (props) => {
          return <span>{props.value} years</span>;
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

  return (
    <Wrapper>
      <Container>
        {/* NOTE: Gayahin nalang tong flex sa ibang components */}
        <Flex flex={isOpen ? 2 : 8}>
          <TableContainer>
            {/* NOTE: To use Settings Component set parent div to position relative*/}
            <Settings />
            <Table tableInstance={tableInstance} />
          </TableContainer>
        </Flex>
        <Flex bg="gray" flex={1}>
          {isOpen && <Menu />}
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default EmployeeFile;
