import { ClientsProvider } from "./Client";
import { OrdersProvider } from "./Orders";
import { ServicesProvider } from "./Services";
import { UsersProvider } from "./Users";

const Providers = ({ children }) => {
    return (
        <UsersProvider>
            <OrdersProvider>
                <ServicesProvider>
                    <ClientsProvider>
                        {children}
                    </ClientsProvider>
                </ServicesProvider>
            </OrdersProvider>
        </UsersProvider>
    )
}

export default Providers;