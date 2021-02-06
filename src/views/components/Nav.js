import api from '../../service/api';

let Nav  = {
    render: async () =>{
        let view = `
            <a href="#/dashboard">Home</a>
            <a href="#/transacao">Transação</a>
            <a href="#/extrato">Extrato</a>
            <a href="#/plano_contas">Planos de Conta</a>
            <a href="#/">Sair</a>
            `
        return view
    },
    after_render: async () =>{

    }
}

export default Nav;
