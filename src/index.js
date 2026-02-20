import "./styles.css";
import homepage from "./home.js"
import menupage from "./menu.js"

const App = () => {
    homepage();

    document.getElementById("home-btn").addEventListener('click', () => homepage());
    document.getElementById("menu-btn").addEventListener('click', () => menupage());
}

App();

console.log("Yes! Mr White, Computer Science!")