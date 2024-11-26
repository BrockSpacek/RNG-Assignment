let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let summonPirate = document.getElementById("summonPirate");





function getPiratesData() {
  return fetch("../data/data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.pirates;
    });
}


getPiratesData();


function getRandomPirate(pirates){
    let randomIndex = Math.floor(Math.random() * pirates.length);
    console.log([randomIndex]);
    return pirates[randomIndex];
}

summonPirate.addEventListener('click', () => {
    getPiratesData().then( pirates => {
        let randomPirate = getRandomPirate(pirates);
        console.log(randomPirate);

        firstName.innerText = randomPirate.firstName
        lastName.innerText = randomPirate.lastName
        
    })
});