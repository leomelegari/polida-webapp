import ListServices from "../../components/ListServices";
import { Container } from "./styles";

const Services = ({ setActualPage }) => {
  return (
    <Container>
      <ListServices setActualPage={setActualPage} />
    </Container>
  );
};

export default Services;
