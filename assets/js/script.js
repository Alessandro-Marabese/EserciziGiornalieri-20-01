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

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  compareOwner(instance) {
    if (this.ownerName === instance.ownerName) {
      return "true";
    } else {
      return "false";
    }
  }
}

document.button.addEventListener("submit", function (event) {
  event.preventDefault();
});
