import Menu from "@/components/Menu";
import Settings from "@/components/Menu/settings";
import Table from "@/components/Table";
import { settingsSelector } from "@/features/settings/settingsSlice";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { findAllFilteredEmployees } from "@/features/employee/employeeSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTable } from "react-table";
import { Wrapper, Container, Flex, TableContainer } from "./styles";
import Button from "@/components/Button/";
import getTimeDuration from "@/helpers/getTimeDuration";
import Toolbar from "@/components/Toolbar";
import { ROLES } from "@/constants/constants";
import RunCashAdvance from "@/components/Modals/RunCashAdvance";
import TableCheckbox from "@/components/TableCheckbox";
import {
  resetEmployeeToRun,
  toggleEmployeeToRun,
} from "@/features/cash_advance/cashAdvanceSlice";

const CashAdvance = () => {
  const dispatch = useDispatch();
  const { data, isFetching } = useSelector((state) => state.employees);
  const { isOpen } = useSelector(settingsSelector);
  const authRole = useSelector((state) => state.auth.role);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRunOpen, setIsRunOpen] = useState(false);
  useEffect(() => {
    dispatch(findAllFilteredEmployees({ cash_advance_eligibility: 1 }));
    return () => {
      dispatch(resetEmployeeToRun());
    };
  }, []);

  const onRunCashAdvanceOpen = () => {
    setIsRunOpen(true);
  };

  const onSelectAll = () => {
    console.log(data);
    // TODO SELECT ALL
    // data.map((employee) => {
    //   dispatch(
    //     toggleEmployeeToRun({
    //       id: employee.id,
    //       first_name: employee.first_name,
    //       last_name: employee.last_name,
    //       position: employee.position,
    //     })
    //   );
    // });
  };

  const columns = React.useMemo(
    () => [
      {
        Header: (props) => {
          return <div></div>;
          // return <TableCheckbox onClick={onSelectAll} />;
        },
        accessor: "id",
        Cell: (props) => {
          return (
            <TableCheckbox
              onClick={() =>
                dispatch(
                  toggleEmployeeToRun({
                    id: props.value,
                    first_name: props.row.original.first_name,
                    last_name: props.row.original.last_name,
                    position: props.row.original.position,
                    department: props.row.original.position,
                  })
                )
              }
            />
          );
        },
      },
      {
        Header: "COMPANY",
        accessor: "company.name", // accessor is the "key" in the data
      },
      {
        Header: "DEPARTMENT",
        accessor: "department.name",
      },
      {
        Header: "POSITION",
        accessor: "position.name",
      },
      {
        Header: "EMPLOYEE",
        Cell: (props) => {
          return (
            <div>
              {props.row.original.first_name} {props.row.original.middle_name}{" "}
              {props.row.original.last_name}
            </div>
          );
        },
      },
      {
        Header: "TIME DURATION",
        accessor: "date_hired",
        Cell: (props) => {
          return <div>{getTimeDuration(props.value)} years</div>;
        },
      },
    ],
    []
  );
  return (
    <Wrapper>
      <Container>
        <Flex justify="space-between" direction="column" flex={8}>
          <TableContainer>
            <Settings />
            {isFetching ? (
              <div>Loading</div>
            ) : data.length > 0 ? (
              <Table columns={columns} data={data} />
            ) : (
              "Wow, such empty"
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
                    onClick={onRunCashAdvanceOpen}
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
      <RunCashAdvance isOpen={isRunOpen} onClose={() => setIsRunOpen(false)} />
    </Wrapper>
  );
};

export default CashAdvance;
