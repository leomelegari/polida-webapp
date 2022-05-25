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
    const listOneUser = async (id) => {
        await api.get(`/users/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            return res.data.name
        })
    }

    return (
        <UserContext.Provider value={{ users, setUsers, listUsers, listOneUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUsers = () => useContext(UserContext);