import PhoneBook from "./PhoneBook.js";
import Person from "./Person.js";

let hungPhoneBook = new PhoneBook(`Hung's Phone Book`);
hungPhoneBook.addPerson(new Person(`Hoang Viet`, `0971155607`, `Thang Long`, 20));
hungPhoneBook.addPerson(new Person(`Do Tung`, `0971145207`, `Vin Group`, 28));
hungPhoneBook.addPerson(new Person(`Nguyen Chi Trich`, `0931158607`, `Vina milk`, 29));
hungPhoneBook.addPerson(new Person(`Hoang Bach Tung`, `0375155637`, `Percas Studio`, 27));
hungPhoneBook.addPerson(new Person(`Dang Lam`, `0371135607`, `Fpt Sortware`, 24));

console.log(hungPhoneBook);
console.log(hungPhoneBook.showAllPeople());
hungPhoneBook.update(`Do Tung`, new Person(`Do Tung edited`, `0971145207`, `Vin Group edited`, 28));
console.log(`Do Tung after update`);
console.log(hungPhoneBook.showAllPeople());
console.log(`find Nguyen Chi Trich`, hungPhoneBook.findPerson(`Nguyen Chi Trich`));
console.log(`find Dang Lam phone`, hungPhoneBook.findPerson(`0371135607`));
hungPhoneBook.removePerson(`Do Tung edited`);
console.log(`After remove Do Tung edited`);
console.log(hungPhoneBook.showAllPeople());