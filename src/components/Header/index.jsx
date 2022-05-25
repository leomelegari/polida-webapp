import { Link } from "react-router-dom";
import { Container } from "./styles";
import Logo from "../../assets/img/POLIDA3.png";
import { useClients } from "../../providers/Client";
import { useUsers } from "../../providers/Users";
import { useOrders } from "../../providers/Orders";

const Header = ({ setActualPage }) => {
  const { listClients } = useClients();
  const { listUsers } = useUsers();
  const { listOrders } = useOrders();

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

  return (
    <Container>
      <div>
        <img src={Logo} alt="" />
      </div>
      <button onClick={clientsHandler}>Clientes</button>
      <button onClick={usersHandler}>Usuário/Técnico</button>
      <button onClick={ordersHandler}>Ordens de serviços</button>
      <Link to="/serviceType">
        <button>Tipos de serviços</button>
      </Link>
    </Container>
  );
};

export default Header;
