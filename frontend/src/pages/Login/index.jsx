import { useEffect } from "react";
import {
  Container,
  Left,
  Right,
  LoginContainer,
  Header,
  Form,
  Powered,
} from "./styles.js";
import { useHistory, useParams } from "react-router-dom";
import InputField from "components/Input/index.jsx";
import Button from "components/Button/index.jsx";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { useForm, FormProvider } from "react-hook-form";

// import { useFirstRender } from "context/useFirstRender.js";
import { useDispatch, useSelector } from "react-redux";
import {
  authSelector,
  signinUser,
  clearState,
} from "features/auth/authSlice.js";

const LoginPage = () => {
  const { name } = useParams();
  const methods = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isFetching, isError, isSuccess, errorMessage } =
    useSelector(authSelector);

  const onSubmit = (data) => {
    if (data.username === name) {
      dispatch(signinUser(data));
    }
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      console.log(errorMessage);
      dispatch(clearState());
    }
    if (isSuccess) {
      dispatch(clearState());
      history.push(`/${name}`);
    }
  }, [isError, isSuccess]);

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
              <Button type="submit">{isFetching ? "Loading" : "Log in"}</Button>
            </Form>
          </FormProvider>
        </LoginContainer>
      </Right>
    </Container>
  );
};

export default LoginPage;
