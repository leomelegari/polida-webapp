import { useUsers } from "../../providers/Users";
import { Card, Container } from "./styles";

const ListUsers = () => {
  const { users } = useUsers();

  return (
    <Container style={users.length < 9 ? { overflow: "hidden" } : null}>
      <Card className="card">
        <div className="name">
          <div className="title">Nome</div>
        </div>
        <div className="contact">
          <div className="title">Contato</div>
        </div>
        <div className="order">
          <div className="title">Número da O.S.</div>
        </div>
      </Card>
      <div className="line">_</div>
      {users.map((user, index) => {
        return (
          <>
            <Card key={index} className={`user user_${index}`}>
              <div className="name">
                <div>{user.name}</div>
              </div>
              <div className="contact">
                <div>{user.contact}</div>
              </div>
              <div className="order">
                {user.service_order.length >= 1 ? (
                  <button className="btn_users">Ver todas</button>
                ) : (
                  "Nenhuma O.S cadastrada"
                )}
              </div>
            </Card>
            <div className="line">_</div>
          </>
        );
      })}
    </Container>
  );
};

export default ListUsers;
