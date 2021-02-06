// Imports
import Utils from './service/Utils'
import Home from './views/pages/Home'
import Cadastrar from './views/pages/Cadastrar'
import Dashboard from './views/pages/Dashboard'
import ErrorLogin from './views/pages/ErrorLogin'
import Error404 from './views/pages/Error'
import Extrato from './views/pages/Extrato'
import ForgotPass from './views/pages/ForgotPassword'
import Login from './views/pages/Login'
import PlanoConta from './views/pages/PlanoConta'
import Transacao from './views/pages/Transacao'

// Routes
let routes = {
    '/':Home,
    '/dashboard':Dashboard,
    '/error-login':ErrorLogin,
    '/extrato':Extrato,
    '/forgotpass':ForgotPass,
    '/login':Login,
    '/plano_contas':PlanoConta,
    '/signup':Cadastrar,
    '/transacao':Transacao,
}

const router = async () => {
    const root = null || document.getElementById('root')
    // Obter URL do Navegador 
    let request = Utils.parseRequestURL();
    // Analisaer a URL
    let parseURL = (request.resource ? '/' + request.resource:'/') +
                   (request.id ? '/:id' + request.id:'') +
                   (request.verb ? '/:verb' + request.verb:'');

    // Renderiza página conforme URLS
    let page = routes[parseURL] ? routes[parseURL] : Error404
    root.innerHTML = await page.render();
    await page.after_render();
}

// Observa as mudanças na hash
window.addEventListener('hashchange',router);

// Observa o carregamento da página
window.addEventListener('load',router);