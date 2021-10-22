import { Container } from "./styles.js";
import { useSelector } from "react-redux";
import { authSelector } from "features/auth/authSlice";
import Loader from "components/Loader/index.jsx";

const Button = ({ children, color }) => {
  const { isFetching } = useSelector(authSelector);
  return (
    <Container color={color}>{isFetching ? <Loader /> : children}</Container>
  );
};

export default Button;
