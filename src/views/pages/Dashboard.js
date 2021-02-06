import Nav from '../components/Nav'

let Dashboard  = {
    render: async () =>{
        let NavBar = await Nav.render()
        let view = `
        <div>
            ${NavBar}
        </div>
        <div>
            <h1>It'S Dashboard Bitch</h1>
        <div>
        <div id="contas">
            <h3>Componet do saldo: corrente</h3>
            <h3>Componet do saldo: poupança</h3>
            <h3>Componet do saldo: crédito</h3>
        </div>
        <div>
            <a href="#/transacao">
                <h3>Realizar uma transação</h3>
            </a>
        </div>
        </div>
        `
        return view
    },
    after_render: async () =>{
        // vazio
    }
}

export default Dashboard;