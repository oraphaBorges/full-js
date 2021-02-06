import Nav from '../components/Nav'

let Cadastrar  = {
    render: async () =>{
        let NavBar = await Nav.render()
        let view = `<h1>It's Cadastrar Bitch</h1>
        <form action="#/">
            <label for="usuario">Usuário</label>
            <input type="text" name="usuario" id="" placeholder="Digite seu usuário">
            <label for="nome">Nome</label>
            <input type="text" name="nome" id="" placeholder="Digite seu Nome">
            <label for="cpf">CPF</label>
            <input type="text" name="cpf" id="" placeholder="Digite seu CPF">
            <label for="Senha">Senha</label>
            <input type="password" name="senha" id="" placeholder="Digite sua senha">
            <button type="submit">Cadastrar</button>
        </form>
        `
        return view
    },
    after_render: async () =>{
        // vazio
    }
}

export default Cadastrar;