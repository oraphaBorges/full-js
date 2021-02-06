import Nav from '../components/Nav'

let Login  = {
    render: async () =>{
        let NavBar = await Nav.render()
        let view = `
        <h1>It's Login Bitch</h1> 
        <form action="#/dashboard">
            <label for="usuario">Usuário</label>
            <input type="text" name="usuario" id="" placeholder="Digite seu usuário">
            <label for="Senha">Senha</label>
            <input type="password" name="senha" id="" placeholder="Digite sua senha">
            <button type="submit">Login</button>
        </form>
        <a href="#/signup">Cadastrar</a>
        <a href="#/forgotpass">Esqueci a senha</a>
        `
        return view
    },
    after_render: async () =>{
        // vazio
    }
}

export default Login;