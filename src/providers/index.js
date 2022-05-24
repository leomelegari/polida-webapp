import { ClientsProvider } from "./Client";
import { UsersProvider } from "./Users";

const Providers = ({ children }) => {
    return (
        <UsersProvider>
            <ClientsProvider>
                {children}
            </ClientsProvider>
        </UsersProvider>
    )
}

export default Providers;