import Nav from '../components/Nav'

let ForgotPass  = {
    render: async () =>{
        let NavBar = await Nav.render()
        let view = `<h1>It's Forgot Password Bitch</h1> ${NavBar}`
        return view
    },
    after_render: async () =>{
        // vazio
    }
}

export default ForgotPass;