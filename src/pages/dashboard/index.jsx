import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import jwt from "jwt-decode";

import Header from "../../components/Header";
import api from "../../services/api";
import { Container } from "./styles";
import Client from "../Client";

const Dashboard = ({ auth }) => {
  const token = localStorage.getItem("@POLIDA:token");

  if (!auth) {
    return <Redirect to="/login" />;
  }

  const user = jwt(token); // decode your token here
  console.log("user ", user);

  api
    .get(`/clients`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => console.log(res.data));

  return (
    <Container>
      <Header />
      {/* {history} */}
      <Client />
    </Container>
  );
};

export default Dashboard;
