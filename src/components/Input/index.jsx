import { InputArea } from "./styles";

const Input = ({ label, register, name, type, ...rest }) => {
  return <InputArea {...rest} {...register(name)} />;
};

export default Input;
