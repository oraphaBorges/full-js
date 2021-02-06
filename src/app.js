// Imports
import Utils from './service/Utils'
import Home from './views/pages/Home'
import Login from './views/pages/Login'
import Error404 from './views/pages/Error'

// Routes
let routes = {
    '/':Home,
    '/login':Login
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