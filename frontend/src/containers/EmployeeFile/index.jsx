import Table from "components/Table";
import React from "react";
import { useTable } from "react-table";
import { TextLink } from "./styles";
const EmployeeFile = () => {
  const data = React.useMemo(
    () => [
      {
        company: "RDI",
        department: "Accounting & Finance",
        position: "Chief Financial Officer",
        employee: "Jane M. Doe",
        time_duration: "6",
      },
      {
        company: "RDI",
        department: "Accounting & Finance",
        position: "Accounting Clerk",
        employee: "Jane M. Donut",
        time_duration: "6",
      },
      {
        company: "RDI",
        department: "Accounting & Finance",
        position: "Auditor",
        employee: "Janecee M. Doe",
        time_duration: "6",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "COMPANY",
        accessor: "company", // accessor is the "key" in the data
      },
      {
        Header: "DEPARTMENT",
        accessor: "department",
      },
      {
        Header: "POSITION",
        accessor: "position",
      },
      {
        Header: "EMPLOYEE",
        accessor: "employee",
      },
      {
        Header: "TIME DURATION",
        accessor: "time_duration",
        Cell: (props) => {
          return <span>{props.value} years</span>;
        },
      },
      {
        Header: "",
        accessor: "id",
        Cell: (props) => {
          return <TextLink>Edit</TextLink>;
        },
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  return (
    <>
      <Table tableInstance={tableInstance} />
    </>
  );
};

export default EmployeeFile;
