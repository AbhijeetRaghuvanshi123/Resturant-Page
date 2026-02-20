const LoadContactPage = () => {
    const content = document.querySelector("#content");

    const contact = document.createElement("div");
    contact.classList.add("contact-info");

    const h2 = document.createElement("h2");
    h2.innerText = "Contact & Location";
    contact.appendChild(h2);

    const p1 = document.createElement("p");
    p1.innerHTML = "<strong>Our Restaurant</strong>";
    contact.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerText = "123 Flavor Street, Food City, Yummyland 45678";
    contact.appendChild(p2);

    const p3 = document.createElement("p");
    p3.innerText = "Phone: (123) 456-7890";
    contact.appendChild(p3);

    const p4 = document.createElement("p");
    p4.innerText = "Email: contact@ourrestaurant.com";
    contact.appendChild(p4);

    content.appendChild(contact);
}

export default LoadContactPage;