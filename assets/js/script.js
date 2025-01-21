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

const myForm = document.getElementById("myForm");
const petList = document.getElementById("pet-list");

class Pet {
  constructor(name, owner, species, breed) {
    this.petName = name;
    this.ownerName = owner;
    this.species = species;
    this.breed = breed;
  }

  static compareOwner(newPet1, newPet2) {
    if (newPet1.ownerName === newPet2.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}
const pets = [];

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //questo è il modo più lungo per selezionarli
  /*const name = document.getElementById("name");
  const owner = document.getElementById("owner");
  const species = document.getElementById("species");
  const breed = document.getElementById("breed");*/
  // con questo invece destrutturo e posso ricavarmi gli elementi con una sola riga di codice

  const { name, owner, species, breed } = event.target.elements;
  const newPet = new Pet(name.value, owner.value, species.value, breed.value);

  petList.push(newPet);

  generateNewLi(newPet);
});

const generateNewLi = function (obj) {
  petList.innerHTML = "";
  pets.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerText = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
    petList.appendChild(newLi);
  });
};
