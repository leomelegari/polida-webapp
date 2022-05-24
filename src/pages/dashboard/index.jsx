import { useState } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import { Container } from "./styles";
import Client from "../client";
import Users from "../users";

const Dashboard = ({ auth }) => {
  const [actualPage, setActualPage] = useState("dashboard");
 console.log("actualPage ", actualPage);

  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <Header setActualPage={setActualPage} />
      {actualPage === "dashboard" ? null : actualPage === "clients" ? (
        <Client />
      ) : actualPage === "users" ? (
        <Users />
      ) : null}
    </Container>
  );
};

export default Dashboard;
