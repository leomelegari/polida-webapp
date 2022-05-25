import { ClientsProvider } from "./Client";
import { OrdersProvider } from "./Orders";
import { UsersProvider } from "./Users";

const Providers = ({ children }) => {
    return (
        <UsersProvider>
            <OrdersProvider>
                <ClientsProvider>
                    {children}
                </ClientsProvider>
            </OrdersProvider>
        </UsersProvider>
    )
}

export default Providers;