import api from '../../service/api';
import Nav from '../components/Nav'

let Login  = {
    render: async () =>{
        let NavBar = await Nav.render()
        let view = `
        ${NavBar}
        <main class="login">
            <h2>Faça o seu Login</h2>
            <form id="form" class="login-form">
                <input type="text" id="login" placeholder="Digite seu usuário">
                <input type="password" id="password" placeholder="Digite sua senha">
                <button type="submit" class="btn btn-main-outline btn-rounded">Entrar</button>
            </form>
            <a href="#/forgotpass">Esqueci minha senha</a>
            <a href="#/signup.html">Ainda não sou cliente</a>
        </main>
        `
        return view
    },
    after_render: async () =>{
        var form = document.getElementById('form');
        form.addEventListener('submit', function(e){
            e.preventDefault()
            let postData = {
                 usuario:document.getElementById('login').value,
                 senha: document.getElementById('password').value
            }
            let confirm = document.getElementById('password').value
            if(postData.senha.length >=6 && postData.senha === confirm){
                api.post('login',postData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response =>{
                    if(response.status === 200){
                        localStorage.setItem('userData', JSON.stringify(response.data))
                        location.replace('#/dashboard');
                    }
                }).catch(response => {
                    console.log(response);
                    location.replace('#/login');
                })
            }
        })
    }
}

export default Login;