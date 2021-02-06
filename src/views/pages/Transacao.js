import Nav from '../components/Nav'

let Transacao  = {
    render: async () =>{
        let NavBar = await Nav.render()
        let view = `<h1>It's Transaction Bitch</h1> ${NavBar}`
        return view
    },
    after_render: async () =>{
        // vazio
    }
}

export default Transacao;