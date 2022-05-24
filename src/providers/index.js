import { ClientsProvider } from "./Client";

const Providers = ({ children }) => {
    return (
        <ClientsProvider>
            {children}
        </ClientsProvider>
    )
}

export default Providers;