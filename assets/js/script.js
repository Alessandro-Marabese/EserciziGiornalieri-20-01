class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAge(instance) {
    if (this.age > instance.age) {
      console.log(this.firstName + " è più vecchio di " + instance.firstName);
    } else if (this.age < instance.age) {
      console.log(instance.firstName + " è più vecchio di " + this.firstName);
    } else {
      console.log(this.firstName + " ha la stessa età di " + instance.firstName);
    }
  }
}

const user1 = new User("Mario", "Rossi", 40, "Roma");
console.log(user1);
const user2 = new User("Marco", "Bianchi", 30, "Milano");
console.log(user2);
const user3 = new User("Giuseppe", "Verdi", 75, "Torino");
console.log(user3);
const user4 = new User("Matteo", "Esposito", 55, "Palermo");
console.log(user4);
const user5 = new User("Daniele", "Mercanti", 30, "Venezia");
console.log(user5);
user2.compareAge(user5);

const petList = [];
class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
}
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name");
  const owner = document.getElementById("owner");
  const species = document.getElementById("species");
  const breed = document.getElementById("breed");
  const newPet = new Pet(name.value, owner.value, species.value, breed.value);
  petList.push(newPet);
  console.log(petList);
});

function displayPetList() {
  const petList = document.querySelector("#petList");
  petList.innerHTML = "";
  pets.forEach((pet) => {
    const petDiv = document.createElement("div");
    petDiv.textContent = `Name: ${pet.petName}, Owner: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
    petList.appendChild(petDiv);
  });
}
