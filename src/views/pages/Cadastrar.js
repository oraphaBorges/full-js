import Nav from '../components/Nav'

let Cadastrar  = {
    render: async () =>{
        let NavBar = await Nav.render()
        let view = `<h1>It's Cadastrar Bitch</h1> ${NavBar}`
        return view
    },
    after_render: async () =>{
        // vazio
    }
}

export default Cadastrar;