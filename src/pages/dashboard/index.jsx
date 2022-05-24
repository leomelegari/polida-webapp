import { useState } from "react";
import { Redirect } from "react-router-dom";
import jwt from "jwt-decode";
import Header from "../../components/Header";
import { Container } from "./styles";
import Client from "../Client";

const Dashboard = ({ auth }) => {
  const token = localStorage.getItem("@POLIDA:token");
  const [actualPage, setActualPage] = useState("dashboard");

  if (!auth) {
    return <Redirect to="/login" />;
  }

  const user = jwt(token); // decode your token here
  console.log("user ", user);

  return (
    <Container>
      <Header setActualPage={setActualPage} />
      {actualPage === "dashboard" ? null : actualPage === "clients" ? (
        <Client />
      ) : null}
      {/* {history} */}
    </Container>
  );
};

export default Dashboard;
