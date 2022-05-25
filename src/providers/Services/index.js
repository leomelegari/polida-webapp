import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const ServiceContext = createContext({});
const initial = [];

export const ServicesProvider = ({ children }) => {
    const [services, setServices] = useState(initial);

    const token = JSON.parse(localStorage.getItem("@POLIDA:token")) || [];

    const listServices = async () => {
        await api.get("/services", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setServices(res.data)
        })
    }

    return (
        <ServiceContext.Provider value={{ services, setServices, listServices }}>
            {children}
        </ServiceContext.Provider>
    )
}

export const useServices = () => useContext(ServiceContext);