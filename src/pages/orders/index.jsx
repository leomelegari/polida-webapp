import ListOrders from "../../components/ListOrders";
import { Container } from "./styles";

const Orders = ({ setActualPage }) => {
  return (
    <Container>
      <ListOrders setActualPage={setActualPage} />
    </Container>
  );
};

export default Orders;
