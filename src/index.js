import "./styles.css";
import homepage from "./home.js"
import menupage from "./menu.js"
import contactpage from "./contact.js"

const App = () => {
    homepage();

    document.getElementById("home-btn").addEventListener('click', () => homepage());
    document.getElementById("menu-btn").addEventListener('click', () => menupage());
    document.getElementById("contact-btn").addEventListener('click', () => contactpage());
}

App();

console.log("Yes! Mr White, Computer Science!")