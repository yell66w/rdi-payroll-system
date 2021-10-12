import {
  Container,
  Left,
  Right,
  LoginContainer,
  Header,
  Form,
  Powered,
} from "./styles.js";
import { useParams } from "react-router-dom";
import InputField from "components/Input/index.jsx";
import Button from "components/Button/index.jsx";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { useForm, FormProvider } from "react-hook-form";

const LoginPage = () => {
  const { name } = useParams();
  const methods = useForm();
  // FIX: Convert to JSON later, but for now, console log
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <Left>
        <Powered>
          <p>POWERED BY:</p>
          <h1>FANART INC.</h1>
        </Powered>
      </Left>
      <Right>
        <Logo />
        <LoginContainer>
          <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
              <Header>{name}</Header>
              <InputField uname name="username" required />
              <InputField pwd name="password" required />
              <Button type="submit">Log in</Button>
            </Form>
          </FormProvider>
        </LoginContainer>
      </Right>
    </Container>
  );
};

export default LoginPage;
