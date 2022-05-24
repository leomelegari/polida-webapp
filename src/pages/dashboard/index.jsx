import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { verify } from "jsonwebtoken";

const Dashboard = ({ auth, token }) => {
  // const token = JSON.parse(localStorage)
  const [data, setData] = useState([]);

  // useEffect(() => {}, []);

  verify(token);

  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      TESTE
      <p>OLÀ</p>
    </div>
  );
};

export default Dashboard;
