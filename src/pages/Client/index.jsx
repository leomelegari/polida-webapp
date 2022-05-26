import ListClients from "../../components/ListClients";
import { Container } from "./styles";

const Client = ({ setActualPage }) => {
  return (
    <Container>
      <ListClients setActualPage={setActualPage} />
    </Container>
  );
};

export default Client;
