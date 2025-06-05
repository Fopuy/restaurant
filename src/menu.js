export function menu(){
    const content = document.querySelector("#content");
    content.innerHTML = ""; // clear previous content

    const menu = document.createElement('div');
    menu.classList.add("menu");

    const h1 = document.createElement('h1');
    h1.textContent = '🍽️ Fop Bistro';
    content.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = 'Welcome to our cozy restaurant! We serve fresh, homemade meals daily.';
    content.appendChild(p);

    const h2 = document.createElement('h2');
    h2.textContent = "Menu";
    menu.appendChild(h2);

    const items = [
        {name: "Adobong Tao", price: "P1000"},
        {name: "Grilled Tao", price: "P850"},
        {name: 'Inihaw na Tao', price: 'P800'},
        {name: 'Fresh Puday', price: 'P250'}, 
    ];

    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add('menu-item');
        const span = document.createElement('span');
        span.textContent = item.name;
        div.appendChild(span);
        div.append( ` - ${item.price}`);
        menu.appendChild(div);
    });

    content.appendChild(menu);
}