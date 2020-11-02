import Person from "./Person.js";

export default class PhoneBook {
    constructor(name) {
        this.name = name;
        this.date = new Date().toLocaleDateString();
        this.people = [];
    }
    update(personName, data) {
        let person = this.findPerson(personName);
        if (person.length < 2) {
            let indexOfPerson = this.people.map(p => {
                return p.name;
            }).indexOf(person[0].name);
            this.people[indexOfPerson].name = data.name;
            this.people[indexOfPerson].phoneNumber = data.phoneNumber;
            this.people[indexOfPerson].company = data.company;
            this.people[indexOfPerson].age = data.age;
        } else {
            console.log(`Your given name is not distinguish enought!`);
        }
    }
    removePerson(personName) {
        let person = this.findPerson(personName);
        if (person.length < 2) {
            let indexOfPerson = this.people.map(p => {
                return p.name;
            }).indexOf(person[0].name);
            this.people.splice(indexOfPerson, 1);
        } else {
            console.log(`Your given name is not distinguish enought!`);
        }
    }
    addPerson(person) {
        if (person instanceof Person) {
            this.people.push(person);
        } else {
            console.log(`Please type again`);
        }
    }
    showAllPeople() {
        let str = ``;
        this.people.map(item => {
            str += `${item.name} - ${item.phoneNumber} \n`;
        });
        return str;
    }
    findPerson(key) {
        let resultNameArr = this.people.filter((item) => {
            return this.isStringInString(key, item.name) || this.isStringInString(key, item.phoneNumber);
        });
        return resultNameArr;
    }
    isStringInString(keyString, originString) {
        keyString = keyString.toLocaleLowerCase();
        originString = originString.toLocaleLowerCase();
        for (let i = 0; i < originString.length; i++) {
            let indexKeyString = 0;
            let indexOriginString = i;
            while (indexKeyString < keyString.length && keyString[indexKeyString] == originString[indexOriginString]) {
                indexKeyString++;
                indexOriginString++;
            }
            if (indexKeyString == keyString.length) {
                return true;
            }
        }
        return false;
    }
}