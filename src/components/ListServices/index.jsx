import { useServices } from "../../providers/Services";
import { Card, Container } from "./styles";
import { CgCloseR } from "react-icons/cg";

const ListServices = ({ setActualPage }) => {
  const { services } = useServices();

  return (
    <Container style={services.length < 9 ? { overflow: "hidden" } : null}>
      <div className="close">
        <CgCloseR onClick={() => setActualPage("dashboard")} />
      </div>
      <Card className="card">
        <div className="type">
          <div className="title">Tipo</div>
        </div>
        <div className="price">
          <div className="title">Preço</div>
        </div>
      </Card>
      <div className="line">_</div>
      {services.map((service, index) => {
        return (
          <>
            <Card key={index} className={`service service_${index}`}>
              <div className="type">
                <div>{service.name}</div>
              </div>
              <div className="price">
                <div>
                  {service.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </div>
              </div>
            </Card>
            <div className="line">_</div>
          </>
        );
      })}
    </Container>
  );
};

export default ListServices;
