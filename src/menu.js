const menuList = [
    { name: "Burger", price: 40, description: "Juicy beef patty with fresh lettuce, tomato, and special sauce." },
    { name: "Pizza", price: 100, description: "Wood-fired crust topped with cheese, tomatoes, and herbs." },
    { name: "HotDog", price: 70, description: "Classic sausage in a toasted bun with mustard and ketchup." },
    { name: "Samosa", price: 40, description: "Crispy pastry filled with spiced potatoes and peas." },
    { name: "Coffee", price: 30, description: "Freshly brewed coffee made from premium beans." },
    { name: "Tea", price: 30, description: "A soothing cup of black or green tea to relax your day." }
];

const LoadMenu = () => {
    const content = document.querySelector("#content");

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuH2 = document.createElement("h2");
    menuH2.innerText = "Our Delicious Menu";

    const items = document.createElement("div");
    items.classList.add("items");

    const table = loadTable();

    items.appendChild(table);
    menu.append(menuH2);
    menu.appendChild(items);

    content.appendChild(menu);
}

const loadTable = () =>{
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const headrow = document.createElement("tr");

    ["Item", "Description", "Price"].forEach(text => {
        const th = document.createElement("th");
        th.innerText = text;
        headrow.appendChild(th);
    });

    thead.appendChild(headrow);
    table.appendChild(thead);
    table.appendChild(loadTableData());

    return table;
}

const loadTableData = () => {
    const tbody = document.createElement("tbody");

    menuList.forEach(item => {
        const trow = document.createElement("tr");

        const tdName = document.createElement("td");
        tdName.innerText = item.name;
        trow.appendChild(tdName);

        const tdDesc = document.createElement("td");
        tdDesc.innerText = item.description;
        trow.appendChild(tdDesc);

        const tdPrice = document.createElement("td");
        tdPrice.innerText = `$${item.price}`;
        trow.appendChild(tdPrice);

        tbody.appendChild(trow);
    });

    return tbody;
}

export default LoadMenu;