import { Link } from "react-router-dom";
import { Container } from "./styles";
import Logo from "../../assets/img/POLIDA3.png";
import { useClients } from "../../providers/Client";

const Header = ({ setActualPage }) => {
  const { listClients } = useClients();

  const clientsHandler = () => {
    listClients();
    setActualPage("clients");
  };

  return (
    <Container>
      <div>
        <img src={Logo} alt="" />
      </div>
      <button onClick={clientsHandler}>Clientes</button>
      <button>Usuário/Técnico</button>
      <Link to="/serviceOrder">
        <button>Ordens de serviços</button>
      </Link>
      <Link to="/serviceType">
        <button>Tipos de serviços</button>
      </Link>
    </Container>
  );
};

export default Header;
