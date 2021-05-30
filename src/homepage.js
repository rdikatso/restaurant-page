

function createAbout(){
    const para = document.createElement("p");
    para.textContent= `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Tempore vitae minus voluptas soluta magnam nesciunt architecto earum! Recusandae, possimus ipsa?`; 
    return para;
}

function createHeroImage(){
    const heroImage = document.createElement("img");
    heroImage.src = "image.jpeg";
    heroImage.classList.add("hero-image");
    heroImage.alt="hero-image";
    return heroImage;
}

function homeLoad(){
    const div = document.createElement("div");
    div.classList.add("content", "page-display");
    div.id = "home";
    div.appendChild(createAbout());
    div.appendChild(createHeroImage());
    return div;
}

export default homeLoad







