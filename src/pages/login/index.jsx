import Button from "../../components/Button";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router-dom";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Container } from "./styles";

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
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <Input
          register={register}
          name="cpf"
          placeholder="CPF (apenas números)"
          type="text"
        />
        <span className="error">{errors.cpf?.message}</span>
        <Input
          register={register}
          name="password"
          placeholder="Digite sua senha"
          type="password"
        />
        <span className="error">{errors.password?.message}</span>
        <Button type="submit">Entrar</Button>
      </form>
      <span>
        Ainda não tem cadastro? <Link to="/signup">Clique aqui</Link>
      </span>
    </Container>
  );
};

export default Login;
