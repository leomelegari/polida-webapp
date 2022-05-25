import { Container } from "./styles";
import Logo from "../../assets/img/POLIDA3.png";
import { useClients } from "../../providers/Client";
import { useUsers } from "../../providers/Users";
import { useOrders } from "../../providers/Orders";
import { useServices } from "../../providers/Services";

const Header = ({ setActualPage, setAuth }) => {
  const { listClients } = useClients();
  const { listUsers } = useUsers();
  const { listOrders } = useOrders();
  const { listServices } = useServices();

  const clientsHandler = () => {
    listClients();
    setActualPage("clients");
  };
  const usersHandler = () => {
    listUsers();
    setActualPage("users");
  };
  const ordersHandler = () => {
    listOrders();
    setActualPage("orders");
  };
  const servicesHandler = () => {
    listServices();
    setActualPage("services");
  };
  const logout = () => {
    localStorage.clear();
    setAuth(false);
  };

  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="buttons">
        <button onClick={clientsHandler}>Clientes</button>
        <button onClick={usersHandler}>Usuário/Técnico</button>
        <button onClick={ordersHandler}>Ordens de serviços</button>
        <button onClick={servicesHandler}>Tipos de serviços</button>
        <button onClick={logout} className="logout">Sair</button>
      </div>
    </Container>
  );
};

export default Header;
