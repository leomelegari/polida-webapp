import { Container, Form } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory, Link, Redirect } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import Button from "../../components/Button";
import logo from "../../assets/logo.svg";

const Signup = ({ auth }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    cpf: yup.string().required("CPF obrigatório"),
    contact: yup
      .string()
      .required("E-mail obrigatório")
      .email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Pelo menos 6 dígitos"),
    confirmPassword: yup
      .string()
      .required("Confirme a senha")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onHandleSubmit = ({ name, cpf, contact, password }) => {
    const newUser = { name, cpf, password, contact, isAdmin: false };
    console.log("newUser ", newUser);
    api
      .post("/users", newUser)
      .then((res) => {
        toast.success("Cadastro realizado com sucesso");

        return history.push("/login");
      })
      .catch((err) => toast.error("CPF já cadastrado"));
  };

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <img src={logo} alt="Polida logo" />

      <Form>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <h2>Cadastro:</h2>

          <Input
            register={register}
            name="name"
            placeholder="Digite seu nome"
            type="text"
          />
          <span className="error">{errors.name?.message}</span>
          <Input
            register={register}
            name="cpf"
            placeholder="Digite seu CPF"
            type="number"
          />
          <span className="error">{errors.cpf?.message}</span>
          <Input
            register={register}
            name="contact"
            placeholder="Digite seu e-mail"
            type="email"
          />
          <span className="error">{errors.contact?.message}</span>
          <Input
            register={register}
            name="password"
            placeholder="Digite sua senha"
            type="password"
          />
          <span className="error">{errors.password?.message}</span>
          <Input
            register={register}
            name="confirmPassword"
            placeholder="Confirme sua senha"
            type="password"
          />
          <span className="error">{errors.confirmPassword?.message}</span>
          <Button type="submit">Cadastrar</Button>
        </form>
        <span>
          Já tem cadastro? <Link to="/login">Fazer login</Link>
        </span>
      </Form>
    </Container>
  );
};

export default Signup;
