import { Link } from "react-router-dom";
import { Container } from "./styles";
import Logo from "../../assets/img/POLIDA3.png";

const Header = () => {

  return (
    <Container>
      <div>
        <img src={Logo} alt="" />
      </div>
      {/* <Link to="clients"> */}
      <button>Clientes</button>
      {/* </Link> */}
      <Link to="/users">
        <button>Usuário/Técnico</button>
      </Link>
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
