


//import functions
import homeLoad from "./homepage";
import menuLoad from "./menupage";
import contactLoad from "./contactpage"

function displayNav(){
    return`<div class="title">
    <h2>lunar</h2>
    <div class="underline"></div>
    </div> 
    <!--navagation container-->
    <div class="navbar">
        <button class="tab-btn active" data-id="home">home</button>
        <button class="tab-btn" data-id="menu">menu</button>
        <button class="tab-btn" data-id="contact">contact-us</button>
    </div>`
}
const pageContent = document.querySelector("#content");
window.addEventListener("DOMContentLoaded", () => {
    pageContent.innerHTML = displayNav();
    pageContent.appendChild(homeLoad());
    pageContent.appendChild(menuLoad());
    pageContent.appendChild(contactLoad());
    
    const navBar = document.querySelector(".navbar");
    const navButtons = document.querySelectorAll(".tab-btn");
    const pages = document.querySelectorAll(".content");
    

    navBar.addEventListener("click", (e) => {
        const id = e.target.dataset.id;

        if(id){
            //remove active clsss from other buttons

            navButtons.forEach(button => {
                button.classList.remove("active");
                e.target.classList.add("active");
            });

            //remove other "pages"

            pages.forEach(page => {
                page.classList.remove("page-display")
            });

            const element = document.getElementById(id);
            element.classList.add("page-display");

        }

    });
   





});










//addNavEvents();

// function setTab(){
//     const tabs = document.querySelectorAll(".nav-item");

//     Array.from(tabs).forEach(tab => {
//         tab.addEventListener("click", e => {
//             e.preventDefault();
//             console.log("clicked")
//             toggleContent(tab);
//         });

//     });

//     console.log(document.getElementById("content"));
// }

// function toggleContent(tab){

//     console.log(tab)
//     // if(!tab.classList.contains("active")){
//     //     console.log(tab);
//     //     tab.classList.add("active");

        
//         let currentTab = tab.getAttribute("id");
//         if(currentTab === "menu"){
//             console.log("menu content");
//             menuLoad()
//         }else if(currentTab === "contact"){
//             console.log("contact content")
//             contactLoad();
//         }else if(currentTab === "home"){
//             console.log("home content");
//             pageLoad();
    
//         }

       

    






// function setTab(){
//     const tabs = document.querySelectorAll(".nav-item");
//     //const content = document.getElementsByClassName("active");

//     tabs.forEach(tab => {
//         tab.addEventListener("click", e => {
//             e.preventDefault();
//             console.log("clicked")
//             removeActiveTab();
//             addActiveTab(tab);
//             if(tab.getAttribute("id") === "menu"){
//                 console.log("Menu Content")
//                 menuLoad();
//             }else if(tab.getAttribute("id") === "contact"){
//                 console.log("Contact Content")
//                 contactLoad();
//             }else if(tab.getAttribute("id") === "home"){
//                 console.log("Home Content");
//                 pageLoad();
//             }
//         });
//     })

//     const removeActiveTab = () => {
//         tabs.forEach(tab => {
//             tab.classList.remove("active");
            
            
//         });
//     }

//     const addActiveTab = tab => {
//         tab.classList.add("active");
//         console.log(tab.classList);
//         console.log("I should have changed color");
//     }

    // const toggleContent = function() {

    //     let pageContent = document.querySelectorAll
        
    //     const pageContent = document.getElementById("content");
    //     console.log(pageContent);
        
    //     //if (!this.classList.contains("active")){

    //         // Array.from(content).forEach( item => {
    //         //     item.classList.remove("active");
    //         // });

    //         // this.classList.add("active");

    //         //Part Two

    //     let currentTab = pageContent.getAttribute("menu");
    //     console.log(currentTab);

    //         //let tabContent = document.getElementById(currentTab);
    //         //tabContent.classList.add("active");

    //     if(currentTab === "menu"){
    //         menuLoad()
    //     }else if(currentTab === "contact"){
    //         contactLoad()
    //     }else if (currentTab === "menu"){
    //         menuLoad()
    //     }
    // }
    





// function addNavEvents(){
//     const menuBtn =document.getElementById("menu");
//     menuBtn.addEventListener("click", () => {
//         console.log("I shoud have changed");
//         menuLoad();
        
//     });

//     const contactBtn =document.getElementById("contact");
//     contactBtn.addEventListener("click", () => {
//         console.log("I shoud have changed");
//         contactLoad();
  
        
//     });

//     const homeBtn =document.getElementById("home");
//     homeBtn.addEventListener("click", () => {
//         console.log("I shoud have changed");
//         pageLoad();  
       
//     });

// }
