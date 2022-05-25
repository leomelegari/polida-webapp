import { useOrders } from "../../providers/Orders";
import { Card, Container } from "./styles";

const ListOrders = () => {
  const { orders } = useOrders();

  return (
    <Container style={orders.length < 9 ? { overflow: "hidden" } : null}>
      <Card className="card">
        <div className="name">
          <div className="title">Nome</div>
        </div>
        <div className="address">
          <div className="title">Endereço</div>
        </div>
        <div className="status">
          <div className="title">Status</div>
        </div>
        <div className="order">
          <div className="title">Nº da O.S</div>
        </div>
        <div className="type">
          <div className="title">Tipo</div>
        </div>
      </Card>
      <div className="line">_</div>
      {orders.map((order, index) => {
        return (
          <>
            <Card key={index} className={`order order_${index}`}>
              <div className="name">
                <div>{`Técnico ${index + 1}`}</div>
              </div>
              <div className="address">
                <div>{`Endereço ${index + 1}`}</div>
              </div>
              <div className="status">
                <div>{order.status}</div>
              </div>
              <div className="order">
                <div>{order.id.substr(0, 7)}</div>
              </div>
              <div className="type">
                <div>{`Tipo ${index + 1}`}</div>
              </div>
            </Card>
            <div className="line">_</div>
          </>
        );
      })}
    </Container>
  );
};

export default ListOrders;
