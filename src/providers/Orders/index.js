import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const OrdersContext = createContext({});
const initial = [];

export const OrdersProvider = ({ children }) => {
    const [orders, setOrders] = useState(initial);

    const listOrders = async () => {
        const token = JSON.parse(localStorage.getItem("@POLIDA:token")) || [];
        await api.get("/orders", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setOrders(res.data)
        })
    }

    return (
        <OrdersContext.Provider value={{ orders, setOrders, listOrders }}>
            {children}
        </OrdersContext.Provider>
    )
}

export const useOrders = () => useContext(OrdersContext);