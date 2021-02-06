import Nav from '../components/Nav'

let Dashboard  = {
    render: async () =>{
        let NavBar = await Nav.render()
        let view = `<h1>It's Dashboard Bitch</h1> ${NavBar}`
        return view
    },
    after_render: async () =>{
        // vazio
    }
}

export default Dashboard;