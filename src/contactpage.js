function createPara(){
    const para = document.createElement("p")
    para.textContent = "Get in touch with us soon";
    return para;
}

function createAddress(){
    const address = document.createElement("div");

    const heading = document.createElement("h4");
    heading.textContent = "address";
    address.appendChild(heading);

    const addressPara1 = document.createElement("p");
    addressPara1.textContent = `185 King Street South`;
    const addressPara2 = document.createElement("p");
    addressPara2.textContent = `Waterloo, Ontario N2G 1R1`;
    const addressPara3 = document.createElement("p");
    addressPara3.textContent = `(519) 722-8456`;

    address.appendChild(addressPara1);
    address.appendChild(addressPara2);
    address.appendChild(addressPara3);
    return address;
}

function createHours(){
    const hours = document.createElement("div");

    const heading = document.createElement("h4");
    heading.textContent = "hours";
    hours.appendChild(heading);


    const sunday = document.createElement("p");
    sunday.textContent = "Sun 3:00pm to 9pm";
    hours.appendChild(sunday);

    const monday = document.createElement("p");
    monday.textContent = "Mon closed";
    hours.appendChild(monday);

    const tuesday = document.createElement("p");
    tuesday.textContent = "Tue closed";
    hours.appendChild(tuesday);

    const wednesday = document.createElement("p");
    wednesday.textContent = "Wed 3:00pm to 9pm";
    hours.appendChild(wednesday);

    const thursday = document.createElement("p");
    thursday.textContent = "Thu 3:00pm to 9pm";
    hours.appendChild(thursday);

    const friday = document.createElement("p");
    friday.textContent = "Fri 3:00pm to 9pm";
    hours.appendChild(friday);

    const saturday = document.createElement("p");
    saturday.textContent = "Sat 3:00pm to 9pm";
    hours.appendChild(saturday);

    return hours;
    
}


function contactLoad(){
    const div = document.createElement("div");
    div.classList.add("content");
    div.id = "contact";
    
    const addressDiv = document.createElement("div");
    addressDiv.classList.add("address");

    addressDiv.appendChild(createAddress());
    addressDiv.appendChild(createHours());

    div.appendChild(createPara());
    div.appendChild(addressDiv);
    
    return div;
}

export default contactLoad