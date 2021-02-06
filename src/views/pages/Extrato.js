import Nav from '../components/Nav'

let Extrato  = {
    render: async () =>{
        let NavBar = await Nav.render()
        let view = `<h1>It's Extrato Bitch</h1> ${NavBar}`
        return view
    },
    after_render: async () =>{
        // vazio
    }
}

export default Extrato;