import React from "react";
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
import { yupResolver } from "@hookform/resolvers/yup";
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

ReactModal.setAppElement("#root");

const RunCashAdvance = ({ isOpen, onClose }) => {
  const methods = useForm({
    resolver: yupResolver(),
  });
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const { handleSubmit, reset } = methods;
  const data = useSelector((state) => state.cash_advance.dataToRun);
  const onSubmit = (data) => {
    //TODO - ADDRESS IN DB??
    console.log(data);
    reset({});
    onClose();
  };
  useEffect(() => {
    if (!isOpen) {
      reset({});
    }
  }, [onClose, reset, isOpen]);

  const columns = React.useMemo(
    () => [
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
                    name="amount_borrowed"
                    label="Amount borrowed"
                  />
                  <HeaderText size="xl">PAYMENT PROCEDURE</HeaderText>
                  <InputField
                    fontSize="xxs"
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
