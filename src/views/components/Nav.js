import api from '../../service/api';

let Nav  = {
    render: async () =>{
        let view = `<a href="#/login">Logar</a>`
        return view
    },
    after_render: async () =>{

    }
}

export default Nav;