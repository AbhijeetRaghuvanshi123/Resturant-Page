import resturantlogo from "./resturantlogo.png";

const LoadPage = () => {
    const content = document.querySelector("#content");

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
    
    const aboutSection = document.createElement("div");
    aboutSection.classList.add("about-section");
    aboutSection.innerHTML = `
        <h2>About Us</h2>
        <p>Founded in 2020, Our Restaurant is dedicated to bringing the finest flavors to your table. 
        Our chefs craft each dish with passion, ensuring a delightful culinary experience every time.</p>
        <p>We believe in quality, freshness, and hospitality — the three pillars that make every meal unforgettable.</p>
    `;

    homepage.appendChild(welcome);
    homepage.appendChild(tagLine);
    homepage.appendChild(tagLine2);
    homepage.appendChild(resLogo);
    homepage.appendChild(aboutSection);

    content.appendChild(homepage);
}

export default LoadPage;