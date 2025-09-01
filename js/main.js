

const categories =
[
  { name: "boys", 
    id: "boy-container",
    services: [
      { name: "Cornrows",
        image: "../assets/cornrows.jpg", 
        price: 20,
        id: 0
      }, 
      { name: "Styled cornrows",
        image: "../assets/styled-cornrows.jpg", 
        price: 25,
        id: 1
      }, 
      { name: "Braids",
        image: "../assets/braids.jpg", 
        price: 30,
        id: 2
      }, 
      { name: "Twists",
        image: "../assets/twists.jpg", 
        price: 30,
        id: 3
      }]
  },
  { name: "girls",
    id: "girl-container", 
    services: [
      { name: "Styled Cornrows",
        image: "../assets/styled-cornrows-f.jpg",
        price: 30,
        id: 0
      }, 
      { name: "Cornrows",
        image: "../assets/cornrows-f.jpg",
        price: 15,
        id: 1

      }]
  },
  { name: "locs",
    id: "loc-container",
    services: [
      { name: "Barrel Twists",
        image: "../assets//barrel-twists.jpg",
        price: 35,
        id: 0

      }, 
      { name: "Two Strand Twists",
        image: "../assets/loc-twists.jpg",
        price: 30,
        id: 1

      }]
  }
]



const navBar = document.getElementById("navbar");
const details = document.getElementById("details");
let appTime = localStorage.getItem("appTime");
let appDate = localStorage.getItem("appDate");
let gender = localStorage.getItem("appointment-type")

navBar.innerHTML = `
    <a href="index.html">HOME</a>
    <a href="policy.html">POLICY</a>
    <a href="contact.html">CONTACT US</a>
    <a href="portfolio.html">PORTFOLIO</a>
    <a href="booking.html">BOOKING</a>
`




const calendarItem = document.getElementsByClassName('calendar-item')
let mainDiv = document.getElementById("main");

selectedService = JSON.parse(localStorage.getItem("selected-service"));



details.innerHTML = `
    <label>Hairstyle</label>
    <p>${selectedService.name} (${gender})</p>
    <label>Price</label>
    <p>€${selectedService.price}</p>
    <label>Date</label>
    <p>${appDate}, ${appTime}</p>


`

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const dataToSend = {
        firstName: document.querySelector('input[name="firstName"]').value,
        lastName: document.querySelector('input[name="lastName"]').value,
        number: document.querySelector('input[name="number"]').value,
        email: document.querySelector('input[name="email"]').value,
        hairstyle: selectedService.name,  // Assuming these are retrieved dynamically
        app_type: gender,                 // Assuming these are retrieved dynamically
        price: selectedService.price,     // Assuming these are retrieved dynamically
        app_date: appDate,                // Assuming these are retrieved dynamically
        app_time: appTime                 // Assuming these are retrieved dynamically
    };

    fetch('../backend/connect.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    })
    .then(response => response.text())
    .then(result => console.log('Data submitted successfully:', result))
    .catch(error => console.error('Error:', error));
});



function redirect(id){
  appType = localStorage.getItem("appointment-type-id");
  let service = categories[appType].services[id]
  localStorage.setItem("selected-service", JSON.stringify(service));
  window.location = "appointment.html";
    
}

function redirectBooking(time){

  localStorage.setItem("appTime", time);
  window.location = "checkout.html";
}

function options(idx){
  let elementId = document.getElementById(categories[idx].id);

  let clonedDiv = elementId.cloneNode(true);

  if (idx === 0){
    localStorage.setItem("appointment-type", "boys")
    localStorage.setItem("appointment-type-id", 0)

  }
  else if (idx === 1){
    localStorage.setItem("appointment-type", "girls")
    localStorage.setItem("appointment-type-id", 1)
  }
  else {
    localStorage.setItem("appointment-type", "locs")
    localStorage.setItem("appointment-type-id", 2)
  }

  

  mainDiv.innerHTML =`<button onclick="back()" style="height: 20px;"><---  Back</button> </br>` +  `${clonedDiv.innerHTML}`+ 
    `
    <div id="hairstyles">
      <div class="hairstyle-item">
        <div class="hairstyle-img">
          <img src="">
        </div>
      
      </div>
    </div>
    
    
    `;

    let hairstylesDiv = document.getElementById("hairstyles");

    hairstylesDiv.innerHTML = categories[idx].services.map(service => {
      const {name, image, price, id} = service;
      return `
              <div class="hairstyle-item">
                <div class="hairstyle-img">
                  <img src=${image}>
                </div>
                <div class="hairstyle-txt">
                  <b>${name}</b>
                  <p>€${price}</p>
                  <button onclick="redirect(${id})">Book now</button>
                </div>
                

      
              </div>
      
      
      
      `






    })

    
    

  
  
  

  //console.log("ran")
}

function back(){
  mainDiv.innerHTML = `
    <div id="boy-container">
        <div class="container">

            <p>Boys</p>
            <button onclick="options(0)">Select</button>
            
            
        </div>
    </div>

    <div id="girl-container">
        <div class="container">

            <p>Girls</p>
            <button onclick="options(1)">Select</button>
            
            
        </div>
    </div>
    
    
    <div id="loc-container">
        <div class="container">

            <p>Locs</p>
            <button onclick="options(2)">Select</button>
            
            
        </div>
    </div>`
}



