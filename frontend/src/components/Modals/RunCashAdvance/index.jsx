import React, { useState } from "react";
import ReactModal from "react-modal";
import {
  ButtonsContainer,
  Form,
  Header,
  ModalStyle,
  OverlayStyle,
  RightContainer,
  Section,
  SubSection,
} from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { HeaderText, HStack, SectionHeader, Text, VStack } from "@/styles";
import Table from "@/components/Table";
import { LeftContainer } from "./styles";
import PhotoInput from "@/components/PhotoInput";
import Button from "@/components/Button";
import { theme } from "@/theme";
import InputField from "@/components/InputField";
import TableCheckbox from "@/components/TableCheckbox";
import {
  generateCashAdvance,
  generateCashAdvanceByBatch,
  resetBatchIdsToExecute,
  toggleBatchToExecute,
} from "@/features/cash_advance/cashAdvanceSlice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import { addDays } from "@/helpers/date.helper";

ReactModal.setAppElement("#root");

const DATE_NOW = dayjs(Date.now()).format("YYYY-MM-DD");
const DEFAULT_PAYOUT_DAYS = 15;

//TODO MOVE TO UTILS/HELPERS
const cashAdvanceSchema = yup
  .object()
  .shape({
    amount_borrowed: yup
      .number("Amount borrowed must be a number.")
      .positive("Amount borrowed must be greater than 0")
      .required("Amount borrowed is required."),
    no_of_payments: yup
      .number("Amount borrowed must be a number.")
      .integer("Number of payments must be an integer")
      .required("Amount borrowed is required."),
  })
  .required();

const RunCashAdvance = ({ isOpen, onClose }) => {
  const methods = useForm({
    resolver: yupResolver(cashAdvanceSchema),
    defaultValues: {
      amount_borrowed: 0.0,
      no_of_payments: 1,
      date_from: DATE_NOW,
      date_to: dayjs(addDays(DATE_NOW, DEFAULT_PAYOUT_DAYS * 1)).format(
        "YYYY-MM-DD"
      ),
      salary_deduction: 0.0,
    },
  });
  const batchIdsToExecute = useSelector(
    (state) => state.cash_advance.batchIdsToExecute
  );
  const { handleSubmit, reset, register, setValue, getValues } = methods;
  const dispatch = useDispatch();
  const [dateTo, setDateTo] = useState(DATE_NOW);

  const data = useSelector((state) => state.cash_advance.dataToRun);
  const onSubmit = (data) => {
    let { amount_borrowed, no_of_payments } = data;
    // TODO - ADDRESS IN DB??
    // DISPATCH CASH ADVANCE
    console.log(data);
    dispatch(
      generateCashAdvanceByBatch({
        amount_borrowed,
        no_of_payments,
        batchIdsToExecute,
      })
    );
    reset();
    onClose();
  };
  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [onClose, reset, isOpen]);

  useEffect(() => {
    return () => {
      dispatch(resetBatchIdsToExecute());
    };
  }, []);

  const onNoOfPaymentChange = (e) => {
    setValue(
      "date_to",
      dayjs(
        addDays(DATE_NOW, DEFAULT_PAYOUT_DAYS * parseInt(e.target.value))
      ).format("YYYY-MM-DD")
    );
    setValue(
      "salary_deduction",
      getValues("amount_borrowed") / parseInt(e.target.value)
    );
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
              onClick={() => dispatch(toggleBatchToExecute(props.value))}
            />
          );
        },
      },
      {
        accessor: "first_name",
        Header: () => {
          return <div style={{ fontSize: theme.fontSizes.xs }}>EMPLOYEE</div>;
        },
        Cell: (props) => {
          return (
            <div style={{ fontSize: theme.fontSizes.xs }}>
              {props.value} {props.row.original.last_name}
            </div>
          );
        },
      },
      {
        accessor: "position.name",
        Header: () => {
          return <div style={{ fontSize: theme.fontSizes.xs }}>POSITION</div>;
        },
        Cell: (props) => {
          return (
            <div style={{ fontSize: theme.fontSizes.xs }}>{props.value}</div>
          );
        },
      },
    ],
    []
  );

  return (
    <ReactModal
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => (
        <ModalStyle {...props}>{children}</ModalStyle>
      )}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
      isOpen={isOpen}
      contentLabel="Run Cash Advance Modal"
      onRequestClose={onClose}
    >
      {/* HEADER */}
      <Header>
        <HeaderText>RUN CASH ADVANCE</HeaderText>
        <div>
          {/* TODO - CLOSE BUTTON */}
          {/* <Button onClick={onClose}>Close Modal</Button> */}
        </div>
      </Header>
      {/* FORM BODY */}
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <LeftContainer>
            <Section>
              <Table fontSize="xs" columns={columns} data={data} />
            </Section>
            <Button>Run</Button>
          </LeftContainer>
          <RightContainer>
            <RightContainer>
              <SectionHeader>
                <Text color="" size="xs">
                  TOTAL BUDGET
                </Text>
                <HeaderText color="violet" m="0">
                  ₱100,000.00
                </HeaderText>
              </SectionHeader>
              <Section>
                <SubSection>
                  <InputField
                    fontSize="xxs"
                    disabled
                    name="name"
                    label="Name"
                  />
                  <InputField
                    fontSize="xxs"
                    disabled
                    name="department"
                    label="Department"
                  />
                  <InputField
                    fontSize="xxs"
                    step="0.01"
                    min="0.00"
                    type="number"
                    name="amount_borrowed"
                    label="Amount borrowed"
                  />
                  <HeaderText size="xl">PAYMENT PROCEDURE</HeaderText>
                  <InputField
                    onChange={onNoOfPaymentChange}
                    fontSize="xxs"
                    min="1"
                    type="number"
                    name="no_of_payments"
                    label="Number of payments"
                  />
                  <InputField
                    disabled
                    fontSize="xxs"
                    type="date"
                    name="date_from"
                    label="From"
                  />
                  <InputField
                    fontSize="xxs"
                    disabled
                    type="date"
                    name="date_to"
                    label="To"
                  />
                  <InputField
                    disabled
                    fontSize="xxs"
                    name="salary_deduction"
                    label="Salary Deduction"
                  />
                </SubSection>
              </Section>
            </RightContainer>
          </RightContainer>
        </Form>
      </FormProvider>
    </ReactModal>
  );
};

export default RunCashAdvance;
