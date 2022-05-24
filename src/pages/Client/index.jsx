import ListClients from "../../components/ListClients/styles";

const Client = ({ clients }) => {
  return (
    <div>
      <ListClients clients={clients} />
      <div>Clientes</div>
    </div>
  );
};

export default Client;
