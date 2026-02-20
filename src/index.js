import "./styles.css";
import homepage from "./home.js"
import menupage from "./menu.js"
import contactpage from "./contact.js"

const App = () => {
    homepage();

    document.getElementById("home-btn").addEventListener('click', () => tabSwitch(homepage));
    document.getElementById("menu-btn").addEventListener('click', () => tabSwitch(menupage));
    document.getElementById("contact-btn").addEventListener('click', () => tabSwitch(contactpage));

    const tabSwitch = (tab) => {
        const content = document.querySelector("#content");
        content.innerHTML = '';
        tab();
    }
}

App();

console.log("Yes! Mr White, Computer Science!")