import { useClients } from "../../providers/Client";
import { Card, Container } from "./styles";

const ListClients = () => {
  const { clients } = useClients();
  console.log("clients ", clients);

  return (
    <Container>
      {clients.map((client, index) => {
        return (
          <Card key={client.contact} className={`client client_${index}`}>
            <ul className="name">
              <li>Cliente</li>
              <li>{client.name}</li>
            </ul>
            <ul className="contact">
              <li>Contato</li>
              <li>{client.contact}</li>
            </ul>
            {/* <div></div> */}
          </Card>
        );
      })}
    </Container>
  );
};

export default ListClients;
