import { Link } from "react-router-dom";
import { Container } from "./styles";

const Landingpage = () => {
  return (
    <Container>
      <div>Bom dia!</div>
      <Link to="/login">Fazer login</Link>
    </Container>
  );
};

export default Landingpage;
