import Nav from '../components/Nav'

let ErrorLogin  = {
    render: async () =>{
        let NavBar = await Nav.render()
        let view = `<h1>It's Login Error Bitch</h1> ${NavBar}`
        return view
    },
    after_render: async () =>{
        // vazio
    }
}

export default ErrorLogin;