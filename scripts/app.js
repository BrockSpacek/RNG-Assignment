let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let summonPirate = document.getElementById("summonPirate");
let displayList = document.getElementById("displayList");
let email = document.getElementById("email");
let slackEmail = document.getElementById("slackEmail");

const maxPirates = 5;
let crewList = [];



// Fetch JSON Data of names

function getPiratesData() {
  return fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.pirates;
    });
}


getPiratesData();

// Randomize JSON Data 

function getRandomPirate(pirates){
    let randomIndex = Math.floor(Math.random() * pirates.length);
    console.log([randomIndex]);
    return pirates[randomIndex];
}


// Use button to generate random name and display it on screen

summonPirate.addEventListener('click', () => {
    getPiratesData().then( pirates => {
        let randomPirate = getRandomPirate(pirates);
        console.log(randomPirate);

        firstName.innerText = randomPirate.firstName;
        lastName.innerText = randomPirate.lastName;
        email.innerText = randomPirate.email;
        slackEmail.innerText = randomPirate.slackEmail;
        
        crewList.push(randomPirate);

// Display List (Previous 5)

        let listItem = document.createElement('ul')
        listItem.textContent = `${randomPirate.firstName} ${randomPirate.lastName} ${randomPirate.email} ${randomPirate.slackEmail}`
        displayList.appendChild(listItem);
    
        if (crewList.length > maxPirates) {
            crewList.shift();
        }

        displayList.innerText = '';

        for (let i = 0; i < crewList.length; i++) {
            let listItem = document.createElement('ul');
            listItem.textContent = `${crewList[i].firstName} ${crewList[i].lastName} ${crewList.email} ${crewList.slackEmail}`;
            displayList.appendChild(listItem);
        }
      
    
    })
});

function createElement(){}

