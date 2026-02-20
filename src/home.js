import resturantlogo from "./resturantlogo.png";

const LoadPage = () => {
    const content = document.querySelector("#content");
    content.innerHTML = '';

    const homepage = document.createElement("div");
    homepage.classList.add("homepage");

    const welcome = document.createElement("h1");
    welcome.innerText = "Welcome to Our Restaurant!";

    const tagLine = document.createElement("p");
    tagLine.innerText = "Experience the perfect blend of flavor and ambiance. From fresh, locally-sourced ingredients to delicious signature dishes, we make every meal memorable.";

    const tagLine2 = document.createElement("p");
    tagLine2.innerHTML = "Come in, relax, and let us take your taste buds on a journey!";

    const resLogo = document.createElement("img");
    resLogo.src = resturantlogo;
    resLogo.classList.add("res-logo");
    
    homepage.appendChild(welcome);
    homepage.appendChild(tagLine);
    homepage.appendChild(tagLine2);
    homepage.appendChild(resLogo);

    content.appendChild(homepage);
}

export default LoadPage;