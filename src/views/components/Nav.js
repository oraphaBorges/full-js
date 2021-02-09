import Logo from '../../img/logo.png';

let Nav  = {
    render: async () =>{
        let view = `
        <nav class="nav container">
            <a class="logo" href="#">
                <img class="nav-logo" src="${Logo}" alt="logo">
            </a>
        </nav>
            `
        return view
    },
    after_render: async () =>{

    }
}

export default Nav;
