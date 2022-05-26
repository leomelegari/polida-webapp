import { useClients } from "../../providers/Client";
import { Card, Container } from "./styles";
import { CgCloseR } from "react-icons/cg";

const ListClients = ({ setActualPage }) => {
  const { clients } = useClients();

  return (
    <Container style={clients.length < 9 ? { overflow: "hidden" } : null}>
      <div className="close">
        <CgCloseR onClick={() => setActualPage("dashboard")} />
      </div>
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
            <Card key={index} className={`client client_${index}`}>
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
