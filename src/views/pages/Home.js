import api from '../../service/api';
import Nav from '../components/Nav';

let Home  = {
    render: async () =>{
        let NavBar = await Nav.render()
        let view = `
            ${NavBar}
            <div class="login">
                <h2>Faça o seu Cadastro</h2>
                <p class="text-left">Empreencha seu dados para realizar seu cadastro</p>
                <form id="form" class="login-form">
                    <input id="cpf" class="input" type="text" name="cpf" placeholder="CPF">
                    <input id="name" class="input" type="text" name="name" placeholder="Nome completo">
                    <input id="login" class="input" type="text" login="login" placeholder="Login">
                    <input id="password" class="input" type="password" name="password" placeholder="Digite sua senha">
                    <input id="confirm-password" class="input" type="password" name="confirm-password" placeholder="Confirme sua senha">
                    <button id="bnt" type="submit" class="btn btn-main-outline btn-rounded">Cadastrar</button>
                </form>
                <a href="/login.html">Fazer Login</a>
            </div>
        `
        return view
    },
    after_render: async () =>{
        var form = document.getElementById('form');
        form.addEventListener('submit', function(e){
            e.preventDefault()
            let postData = {
                 cpf: document.getElementById('cpf').value,
                 login:document.getElementById('login').value,
                 nome: document.getElementById('name').value,
                 senha: document.getElementById('password').value
            }
            let confirm = document.getElementById('password').value
            if(postData.senha.length >=6 && postData.senha === confirm){
                api.post('usuarios',postData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response =>{
                    alert('Usuário cadastrado')
                    console.log(response);
                    location.replace('#/login');
                }).catch(response => {
                    console.log(response);
                })
            }
        }
    )}
}


export default Home;