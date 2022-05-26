import ListUsers from "../../components/ListUsers";
import { Container } from "./styles";

const Users = ({setActualPage}) => {
  return (
    <Container>
      <ListUsers setActualPage={setActualPage}/>
    </Container>
  );
};

export default Users;
