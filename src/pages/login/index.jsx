import Button from "../../components/Button";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router-dom";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Container, Form } from "./styles";
import logo from "../../assets/logo.svg";

const Login = ({ auth, setAuth }) => {
  const schema = yup.object().shape({
    cpf: yup.string().required("CPF obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onHandleSubmit = (data) => {
    console.log(data);
    api
      .post("/users/login", data)
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("@POLIDA:token", JSON.stringify(token));

        toast.success("Login realizado com sucesso");

        setAuth(true);

        return history.push("/dashboard");
      })
      .catch((err) => toast.error("E-mail ou senha inválidos"));
  };

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <img src={logo} alt="Polida logo" />
      <Form>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <label htmlFor="">CPF</label>
          <Input
            register={register}
            name="cpf"
            placeholder="apenas números"
            type="text"
          />
          <span className="error">{errors.cpf?.message}</span>
          <label htmlFor="">SENHA</label>
          <Input
            register={register}
            name="password"
            placeholder="digite sua senha"
            type="password"
          />
          <span className="error">{errors.password?.message}</span>
          <Button type="submit">Entrar</Button>
        </form>
        <span>
          Ainda não tem cadastro? <Link to="/signup">Clique aqui</Link>
        </span>
      </Form>
    </Container>
  );
};

export default Login;
