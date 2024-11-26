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
            createElement();
          
            let listItem2 = document.createElement('li');
            let listItem3 = document.createElement('p');
            let listItem4 = document.createElement('p');
            let listItem5 = document.createElement('p');
           
            listItem2.textContent = `First Name: ${crewList[i].firstName}` 
            listItem3.textContent = `Last Name: ${crewList[i].lastName}`
            listItem4.textContent = `Transponder Snail: ${crewList[i].email}` 
            listItem5.textContent = `Other Transponder Snail: ${crewList[i].slackEmail}`;
           
            listItem2.className = "mt-3"
            listItem3.className = "p-0 m-0";
            listItem4.className = "p-0 m-0";
            listItem5.className = "p-0 m-0";

            displayList.appendChild(listItem2);
            displayList.appendChild(listItem3);
            displayList.appendChild(listItem4);
            displayList.appendChild(listItem5);
        }
      
    
    })
});

function createElement(){
    let pTag1 = document.createElement('p');
    let pTag2 = document.createElement('p2');
    let pTag3 = document.createElement('p3');
    let pTag4 = document.createElement('p4');
    pTag1.textContent = crewList.firstName;
    pTag2.textContent = crewList.lastName;
    pTag3.textContent = crewList.email;
    pTag4.textContent = crewList.slackEmail;
    elementHere.appendChild(pTag1)
    elementHere.appendChild(pTag2)
    elementHere.appendChild(pTag3)
    elementHere.appendChild(pTag4)

}

createElement();

