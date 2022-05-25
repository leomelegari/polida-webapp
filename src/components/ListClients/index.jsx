import { useClients } from "../../providers/Client";
import { Card, Container } from "./styles";

const ListClients = () => {
  const { clients } = useClients();

  return (
    <Container style={clients.length < 9 ? { overflow: "hidden" } : null}>
      <Card className="card">
        <ul className="name">
          <li className="title">Cliente</li>
        </ul>
        <ul className="contact">
          <li className="title">Contato</li>
        </ul>
        {/* <div></div> */}
      </Card>
      <div className="line">_</div>

      {clients.map((client, index) => {
        return (
          <>
            <Card key={client.contact} className={`client client_${index}`}>
              <ul className="name">
                <li>{client.name}</li>
              </ul>
              <ul className="contact">
                <li>{client.contact}</li>
              </ul>
              {/* <div></div> */}
            </Card>
            <div className="line">_</div>
          </>
        );
      })}
    </Container>
  );
};

export default ListClients;
