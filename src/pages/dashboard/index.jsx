import { useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import { Container, Logo } from "./styles";
import Client from "../Client";
import Users from "../users";
import Footer from "../../components/Footer";
import Orders from "../orders";
import Services from "../services";
import PolidaLogo from "./../../assets/logo.svg";

const Dashboard = ({ auth, setAuth }) => {
  const [actualPage, setActualPage] = useState("dashboard");

  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <Header setActualPage={setActualPage} setAuth={setAuth} />
      {actualPage === "dashboard" ? (
        <Logo>
          <img src={PolidaLogo} className="Polida-logo" alt="logo" />
        </Logo>
      ) : actualPage === "clients" ? (
        <Client setActualPage={setActualPage}/>
      ) : actualPage === "users" ? (
        <Users setActualPage={setActualPage}/>
      ) : actualPage === "orders" ? (
        <Orders setActualPage={setActualPage}/>
      ) : actualPage === "services" ? (
        <Services setActualPage={setActualPage}/>
      ) : null}
      <Footer />
    </Container>
  );
};

export default Dashboard;
