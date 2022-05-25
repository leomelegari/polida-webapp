import { useServices } from "../../providers/Services";
import { Card, Container } from "./styles";

const ListServices = () => {
  const { services } = useServices();

  return (
    <Container style={services.length < 9 ? { overflow: "hidden" } : null}>
      {services.map((service, index) => {
        return (
          <Card key={index} className={`service service_${index}`}>
            <div className="name">
              <div>{service.name}</div>
            </div>
            <div className="price">
              <div>
                <div>Valor</div>
                {service.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </div>
            </div>
          </Card>
        );
      })}
    </Container>
  );
};

export default ListServices;
