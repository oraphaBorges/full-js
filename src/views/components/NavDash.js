import hand from '../../img/hand.svg';
import menuItem from '../../img/menu-item.svg';

let NavDash  = {
    render: async () =>{
        let view = `
        <nav class="content-menu bg-color--gama">
            <img src="${hand}" alt="Gama hand">
            <div class="content-default">
            <div class="card-menu--item bg-color--purple border-radius--5">
                <img src="${menuItem}" alt="Menu item" class="image-menu--item">
                <p>Depósitos</p>
            </div>
            <div class="card-menu--item bg-color--purple border-radius--5">
                <img src="${menuItem}" alt="Menu item" class="image-menu--item">
                <p>Planos</p>
            </div>
            <div class="card-menu--item bg-color--purple border-radius--5">
                <img src="${menuItem}" alt="Menu item" class="image-menu--item">
                <p>Pagamentos</p>
            </div>
            <div class="card-menu--item bg-color--purple border-radius--5">
                <img src="${menuItem}" alt="Menu item" class="image-menu--item">
                <p>Transações</p>
            </div>
            </div>
        </nav>
            `
        return view
    },
    after_render: async () =>{

    }
}

export default NavDash;
