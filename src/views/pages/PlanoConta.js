import Nav from '../components/Nav'

let PlanoConta  = {
    render: async () =>{
        let NavBar = await Nav.render()
        let view = `<h1>It's Plano de Contas Bitch</h1> ${NavBar}`
        return view
    },
    after_render: async () =>{
        // vazio
    }
}

export default PlanoConta;