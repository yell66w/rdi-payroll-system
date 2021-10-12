import { Container } from "./styles.js";

const Button = ({ children, color }) => {
  return <Container color={color}>{children}</Container>;
};

export default Button;
