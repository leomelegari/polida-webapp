import { ButtonModel } from "./styles";

const Button = ({ children, ...rest }) => {
  return <ButtonModel {...rest}> {children} </ButtonModel>;
};

export default Button;
