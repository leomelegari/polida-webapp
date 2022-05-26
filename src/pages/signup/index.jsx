import { Container, Form } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory, Link, Redirect } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import logo from "../../assets/img/POLIDA.png";
import { motion } from "framer-motion";

const Signup = ({ auth }) => {
  const [loading, setLoading] = useState(false);

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

  const onHandleSubmit = async ({ name, cpf, contact, password }) => {
    setLoading(true);
    const newUser = { name, cpf, password, contact, isAdmin: true };
    await api
      .post("/users", newUser)
      .then((res) => {
        toast.success("Cadastro realizado com sucesso");
        setLoading(false);

        return history.push("/login");
      })
      .catch((err) => {
        setLoading(false);
        toast.error("CPF já cadastrado");
      });
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

          <motion.input
            whileFocus={{ scale: 1.1, transition: { duration: 0.5 } }}
            {...register("name")}
            placeholder="Digite seu nome"
            type="text"
          />
          <span className="error">{errors.name?.message}</span>
          <motion.input
            whileFocus={{ scale: 1.1, transition: { duration: 0.5 } }}
            {...register("cpf")}
            placeholder="Digite seu CPF"
            type="text"
          />
          <span className="error">{errors.cpf?.message}</span>
          <motion.input
            whileFocus={{ scale: 1.1, transition: { duration: 0.5 } }}
            {...register("contact")}
            placeholder="Digite seu e-mail"
            type="email"
          />
          <span className="error">{errors.contact?.message}</span>
          <motion.input
            whileFocus={{ scale: 1.1, transition: { duration: 0.5 } }}
            {...register("password")}
            placeholder="Digite sua senha"
            type="password"
          />
          <span className="error">{errors.password?.message}</span>
          <motion.input
            whileFocus={{ scale: 1.1, transition: { duration: 0.5 } }}
            {...register("confirmPassword")}
            placeholder="Confirme sua senha"
            type="password"
          />
          <span className="error">{errors.confirmPassword?.message}</span>
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            type="submit"
          >
            {loading ? "carregando..." : "Entrar"}
          </motion.button>
        </form>
        <span>
          Já tem cadastro? <Link to="/login" className="bold">Fazer login</Link>
        </span>
      </Form>
    </Container>
  );
};

export default Signup;
