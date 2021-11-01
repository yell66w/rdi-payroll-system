import { Container } from './styles.js';
import { useSelector } from 'react-redux';
import { authSelector } from 'features/auth/authSlice';
import Loader from 'components/Loader/index.jsx';

const Button = ({ children, color, outline = false, ...rest }) => {
  const { isFetching } = useSelector(authSelector);
  return (
    <Container {...rest} color={color} outline={outline}>
      {isFetching ? <Loader /> : children}
    </Container>
  );
};

export default Button;
