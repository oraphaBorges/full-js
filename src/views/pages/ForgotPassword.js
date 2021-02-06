import Nav from '../components/Nav'

let ForgotPass  = {
    render: async () =>{
        let NavBar = await Nav.render()
        let view = `<h1>It's Forgot Password Bitch</h1> 
        <form action="/#">
            <label for="usuario">Usuário</label>
            <input type="text" name="usuario" id="" placeholder="Digite seu usuário">
            <a href="#/"><button type="submit">Alterar Senha</button></a>
        </form>
        `
        return view
    },
    after_render: async () =>{
        // vazio
    }
}

export default ForgotPass;