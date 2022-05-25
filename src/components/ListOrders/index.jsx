import { useOrders } from "../../providers/Orders";
import { Card, Container } from "./styles";

const ListOrders = () => {
  const { orders } = useOrders();

  return (
    <Container style={orders.length < 9 ? { overflow: "hidden" } : null}>
      {orders.map((order, index) => {
        return (
          <Card key={index} className={`order order_${index}`}>
            <div className="name">
              <div>Nome</div>
              <div>{`Técnico ${index + 1}`}</div>
            </div>
            <div className="unit">
              <div>Endereço</div>
              <div>{`Endereço ${index + 1}`}</div>
            </div>
            <div className="contact">
              <div>Status</div>
              <div>{order.status}</div>
            </div>
            <div className="order">
              <div>Número da O.S</div>
              <div>{order.id.substr(0, 7)}</div>
            </div>
            <div className="type">
              <div>Tipo</div>
              <div>{`Tipo ${index + 1}`}</div>
            </div>
          </Card>
        );
      })}
    </Container>
  );
};

export default ListOrders;
