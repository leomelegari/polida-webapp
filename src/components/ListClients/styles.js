const ListClients = ({ clients }) => {
    return (<div>
        <div>
            {clients ? clients.map((client) => {
                <div>{client.name}</div>
            }) : <div>nada aqui</div>}
        </div>
    </div>);
}

export default ListClients;