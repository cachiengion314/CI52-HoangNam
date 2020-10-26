class Company {
    name;
    establishedDate;
    country;
    businessType;
    employees;

    constructor(name, establishedDate, country, businessType, employees) {
        this.name = name;
        this.establishedDate = establishedDate;
        this.country = country;
        this.businessType = businessType;
        this.employees = employees;
    }

    showAllEmployees = () => {
        for (let i = 0; i < this.employees.length; i++) {
            console.log(this.employees[i]);
        }

    }
    showCEO() {
        this.employees.map((person) => {
            if (person.strategy != undefined) {
                console.log(person);
            }
        });
    }
    showManagers() {
        this.employees.map((person) => {
            if (person.managementStyle != undefined) {
                console.log(person);
            }
        });
    }
    showStaffs() {
        this.employees.map((person) => {
            if (person.experience != undefined) {
                console.log(person);
            }
        });
    }
}
class Employee {
    name;
    sex;
    age;
    address;

    constructor(name, sex, age, address) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.address = address;
    }
    about = () => {
        console.log(`Hello, my name is ${this.name}`);
    }
}
class CEO extends Employee {
    strategy; // chien luoc kinh doanh

    constructor(name, sex, age, address, strategy) {
        super(name, sex, age, address);
        this.strategy = strategy;
    }
}
class Manager extends Employee {
    managementStyle;
    constructor(name, sex, age, address, managementStyle) {
        super(name, sex, age, address);
        this.managementStyle = managementStyle;
    }
}
class Staff extends Employee {
    experience;
    constructor(name, sex, age, address, experience) {
        super(name, sex, age, address);
        this.experience = experience;
    }
}

let myCompany = new Company(`TNHH Xuan Van`, 2020, `Viet Nam`, `Nha hang`, [
    new Staff(`Nguyen Duy Phu`, `male`, 27, `43 Le Duyen`, 1),
    new Staff(`Nguyen Duy Dao`, `female`, 23, `43 Le Duyen`, 2),
    new Staff(`Nguyen Duy Phan`, `male`, 22, `43 Le Duyen`, 5),
    new Staff(`Nguyen Duy Nam`, `male`, 27, `43 Le Duyen`, 2),
    new Staff(`Nguyen Duy Tung`, `male`, 25, `43 Le Duyen`, 1),
    new Staff(`Nguyen Duy Hao`, `female`, 24, `43 Le Duyen`, 1),
    new Staff(`Nguyen Duy Phuc`, `male`, 27, `43 Le Duyen`, 1),
    new Staff(`Nguyen Duy Phuong`, `female`, 27, `43 Le Duyen`, 2),
    new Staff(`Nguyen Duy Anh`, `male`, 37, `43 Le Duyen`, 2),
    new Staff(`Nguyen Duy Phi`, `male`, 33, `43 Le Duyen`, 1),

    new Manager(`Nguyen Duy Xuan`, `male`, 31, `43 Le Duyen`, `hard manager style`),
    new Manager(`Nguyen Duy Nham`, `male`, 32, `43 Le Duyen`, `easy manager style`),
    new Manager(`Nguyen Duy Chi`, `female`, 27, `43 Le Duyen`, `hard manager style`),
    new Manager(`Nguyen Duy Do`, `female`, 26, `43 Le Duyen`, `normal manager style`),
    new Manager(`Nguyen Duy Linh`, `female`, 37, `43 Le Duyen`, `normal manager style`),

    new CEO(`Nguyen Duy Kiet`, `male`, 41, `43 Le Duyen`, `Toc chien, toc thang`),
]);

myCompany.showAllEmployees();
myCompany.showCEO();
myCompany.showManagers();
myCompany.showStaffs();