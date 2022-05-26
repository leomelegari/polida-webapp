import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const ClientsContext = createContext({});
// const UserContext = createContext({});
const initial = [];

export const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState(initial);
  const [setUsers] = useState(initial);

  const token = JSON.parse(localStorage.getItem("@POLIDA:token")) || [];

  const listClients = async () => {
    await api
      .get(`/clients`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setClients(res.data);
      });
  };

  const listUsers = async () => {
    await api
      .get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUsers(res.data);
      });
  };

  return (
    <ClientsContext.Provider
      value={{ clients, setClients, listClients, listUsers }}
    >
      {children}
    </ClientsContext.Provider>
  );
};

export const useClients = () => useContext(ClientsContext);
