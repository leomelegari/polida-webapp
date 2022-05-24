import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const ClientsContext = createContext({});
const initialClients = [];

export const ClientsProvider = ({ children }) => {
    const [clients, setClients] = useState(initialClients);
    const token = JSON.parse(localStorage.getItem("@POLIDA:token")) || [];

    const listClients = async () => {
        await api.get(`/clients`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setClients(res.data)
            
        })
    }

    return (
        <ClientsContext.Provider value={{ clients, setClients, listClients }}>
            {children}
        </ClientsContext.Provider>
    )
}

export const useClients = () => useContext(ClientsContext);