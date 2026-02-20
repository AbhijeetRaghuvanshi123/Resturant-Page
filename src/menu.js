const menuList = [
    {
        name: "Burger",
        price: 40
    },
    {
        name: "Pizza",
        price: 100
    },
    {
        name: "HotDog",
        price: 70
    },
    {
        name: "Samosa",
        price: 40
    },
    {
        name: "Coffee",
        price: 30
    },
    {
        name: "Tea",
        price: 30
    }
]


const LoadMenu = () => {
    const content = document.querySelector("#content");

    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuH2 = document.createElement("h2");
    menuH2.innerText = "Here is Menu 4 U";

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

    const items = document.createElement("th");
    items.innerText = "Items";

    const prices = document.createElement("th");
    prices.innerText = "Prices";

    headrow.appendChild(items);
    headrow.appendChild(prices);
    thead.appendChild(headrow);

    const tbody = loadTableData();

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}

const loadTableData = () => {
    const tbody = document.createElement("tbody");

    menuList.forEach(item => {
        const trow = document.createElement("tr");
        
        const tdname = document.createElement("td");
        tdname.innerText = item.name;
        trow.appendChild(tdname);

        const tdprice = document.createElement("td");
        tdprice.innerText = item.price;
        trow.appendChild(tdprice);

        tbody.appendChild(trow);
    })

    return tbody;
}

export default LoadMenu;