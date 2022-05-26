import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory, Link } from "react-router-dom";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import { Container, Form } from "./styles";
import logo from "../../assets/img/POLIDA.png";
import { motion } from "framer-motion";

const Login = ({ auth, setAuth }) => {
  const [loading, setLoading] = useState(false);

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

  const onHandleSubmit = async (data) => {
    setLoading(true);
    await api
      .post("/users/login", data)
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("@POLIDA:token", JSON.stringify(token));

        toast.success("Login realizado com sucesso");

        setAuth(true);
        setLoading(false);

        return history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("E-mail ou senha inválidos");
        setLoading(false);
      });
  };

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
        <img src={logo} alt="Polida logo" />
      </motion.div>
      <Form>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <label htmlFor="">CPF</label>
          <motion.input
            {...register("cpf")}
            whileFocus={{ scale: 1.1, transition: { duration: 0.5 } }}
            placeholder="apenas números"
            type="text"
          />
          <span className="error">{errors.cpf?.message}</span>
          <label htmlFor="">SENHA</label>
          <motion.input
            {...register("password")}
            whileFocus={{ scale: 1.1, transition: { duration: 0.5 } }}
            type="password"
            placeholder="digite sua senha"
          />
          <span className="error">{errors.password?.message}</span>
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
          Ainda não tem cadastro?{" "}
          <Link to="/signup" className="bold">
            Clique aqui
          </Link>
        </span>
      </Form>
    </Container>
  );
};

export default Login;
