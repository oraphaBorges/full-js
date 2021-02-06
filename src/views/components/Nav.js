import api from '../../service/api';

let Nav  = {
    render: async () =>{
        let view = `
            <a href="/#">home</a>
            <a href="#/login">Logar</a>
            <a href="#/signup">Cadastrar</a>
            <a href="#/forgotpass">Esqueci a senha</a>
            <a href="#/error-login">Erro no Login</a>
            <a href="#/extrato">Extrato</a>
            <a href="#/transacao">Transação</a>
            <a href="#/plano_contas">Plano de Conta</a>
            <a href="#/dashboard">Dashboard</a>
            `
        return view
    },
    after_render: async () =>{

    }
}

export default Nav;
