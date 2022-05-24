import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const UserContext = createContext({});
const initial = [];

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState(initial);

    const token = JSON.parse(localStorage.getItem("@POLIDA:token")) || [];

    const listUsers = async () => {
        await api.get("/users", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            setUsers(res.data)
        })
    }

    return (
        <UserContext.Provider value={{ users, setUsers, listUsers }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUsers = () => useContext(UserContext);