import { useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import { Container } from "./styles";
import Client from "../Client";
import Users from "../users";
import Footer from "../../components/Footer";
import Orders from "../orders";
import Services from "../services";

const Dashboard = ({ auth, setAuth }) => {
  const [actualPage, setActualPage] = useState("dashboard");

  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <Header setActualPage={setActualPage} setAuth={setAuth} />
      {actualPage === "dashboard" ? null : actualPage === "clients" ? (
        <Client />
      ) : actualPage === "users" ? (
        <Users />
      ) : actualPage === "orders" ? (
        <Orders />
      ) : actualPage === "services" ? (
        <Services />
      ) : null}
      <Footer />
    </Container>
  );
};

export default Dashboard;
