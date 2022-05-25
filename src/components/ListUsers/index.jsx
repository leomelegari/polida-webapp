import { useUsers } from "../../providers/Users";
import { Card, Container } from "./styles";

const ListUsers = () => {
  const { users } = useUsers();

  return (
    <Container style={users.length < 9 ? { overflow: "hidden" } : null}>
      {users.map((user, index) => {
        return (
          <Card key={index} className={`user user_${index}`}>
            <div className="name">
              <div>Nome</div>
              <div>{user.name}</div>
            </div>
            <div className="contact">
              <div>Contato</div>
              <div>{user.contact}</div>
            </div>
            <div className="order">
              <div>Número da O.S</div>
              {user.service_order.length >= 1 ? (
                <button>Ver todas</button>
              ) : (
                "Nenhuma O.S cadastrada"
              )}

              {/* {user.service_order.map((service) => {
                return <div>{service.id};</div>;
              })} */}
            </div>
            {/* <div></div> */}
          </Card>
        );
      })}
    </Container>
  );
};

export default ListUsers;
