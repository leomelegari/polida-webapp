import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
// import { verify } from "jsonwebtoken";
import Header from "../../components/Header";

const Dashboard = ({ auth, token }) => {
  // const token = JSON.parse(localStorage)
  const [data, setData] = useState([]);

  // useEffect(() => {}, []);

  // verify(token);

  if (!auth) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Header />
    </div>
  );
};

export default Dashboard;
