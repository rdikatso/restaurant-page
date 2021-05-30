
const menu = [
    {
      id: 1,
      title: "curry bowl",
      category: "entree",
      price: 28.00,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "guyanese pepperpot",
      category: "entree",
      price: 28.00,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "lamb spaghetti",
      category: "entree",
      price: 24.00,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "ricotta gnocchi",
      category: "entry",
      price: 25.00,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
];

function displayMenu(id){
    const displayMenu = document.createElement("div");

    //item 
    const item = document.createElement("article");

    //menu-image
    const image = document.createElement("img");
    image.src = menu[id].img;
    image.classList.add("photo");
    item.appendChild(image);

    //menu-info
    const menuItem = document.createElement("div");

    const header = document.createElement("header");
    const name = document.createElement("h4");
    name.textContent = menu[id].title;
    const price = document.createElement("h4");
    price.textContent = menu[id].price;

    //menu description
    const desc = document.createElement("p")
    desc.textContent = menu[id].desc;

    header.appendChild(name);
    header.appendChild(price);
    menuItem.appendChild(header);
    menuItem.appendChild(desc);

    item.appendChild(menuItem);
    return item;
    
}


function menuLoad(){
    const div = document.createElement("div");
    div.classList.add("content");
    div.id = "menu";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

   
    menuContainer.appendChild(displayMenu(0));
    menuContainer.appendChild(displayMenu(1));
    menuContainer.appendChild(displayMenu(2));
    menuContainer.appendChild(displayMenu(3));

    div.appendChild(menuContainer);

    return div;
}

export default menuLoad