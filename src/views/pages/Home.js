import api from '../../service/api';
import Nav from '../components/Nav';

let Home  = {
    render: async () =>{
        let NavBar = await Nav.render()
        let view = `<h1>Home page</h1>
            ${NavBar}
            <button id="tester">Valor de Teste</button>
        `
        return view
    },
    after_render: async () =>{
        var buttonTest = document.getElementById('tester');
        buttonTest.addEventListener('click', function(){
            let postData = {
                name:'Cris Henrique',
                age:31
            }
            // api.post('',postData).then(res => {
            //     console.log(res.data)
            // })

            localStorage.setItem('dados',JSON.stringify(postData))
        })
    }
}

export default Home;