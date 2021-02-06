import Nav from '../components/Nav'

let Login  = {
    render: async () =>{
        let NavBar = await Nav.render()
        let view = `
        <div class="container card col-4 p-3 mt-5">
        <h1>It's Login Bitch</h1> 
        <form action="#/dashboard">
            <div class="mb-3">
                <label for="usuario" class="form-label">Usuario</label>
                <input type="text" class="form-control" id="usuario" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">Digite o seu usário.</div>
            </div>
            <div class="mb-3">
                <label for="senha" class="form-label">Senha</label>
                <input type="senha" class="form-control" id="senha">
            </div>
            <button type="submit" class="btn btn-primary">Entrar</button>
        </form>
        <a href="#/signup">Cadastrar</a>
        <a href="#/forgotpass">Esqueci a senha</a>
        </div>
        `
        return view
    },
    after_render: async () =>{
        // vazio
    }
}

export default Login;