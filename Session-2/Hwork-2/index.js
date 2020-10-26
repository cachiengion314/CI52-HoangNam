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
        console.log(``);
    }
    showCEO() {
        console.log(``);
    }
    showManagers() {
        console.log(``);
    }
    showStaffs() {
        console.log(``);
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
        console.log(``);
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
    new Staff(`Nguyen Duy Phu`, `male`, 27, `43 Le Duyen`, 2),
    new Staff(`Nguyen Duy Phu`, `male`, 27, `43 Le Duyen`, 2),
    new Staff(`Nguyen Duy Phu`, `male`, 27, `43 Le Duyen`, 2),
    new Staff(`Nguyen Duy Phu`, `male`, 27, `43 Le Duyen`, 2),
    new Staff(`Nguyen Duy Phu`, `male`, 27, `43 Le Duyen`, 2),
    new Staff(`Nguyen Duy Phu`, `male`, 27, `43 Le Duyen`, 2),
    new Staff(`Nguyen Duy Phu`, `male`, 27, `43 Le Duyen`, 2),
    new Staff(`Nguyen Duy Phu`, `male`, 27, `43 Le Duyen`, 2),
    new Staff(`Nguyen Duy Phu`, `male`, 27, `43 Le Duyen`, 2),
    new Staff(`Nguyen Duy Phu`, `male`, 27, `43 Le Duyen`, 2),

    new Manager(`Nguyen Duy Phu`, `male`, 27, `43 Le Duyen`, 2),
    new Manager(`Nguyen Duy Phu`, `male`, 27, `43 Le Duyen`, 2),
    new Manager(`Nguyen Duy Phu`, `male`, 27, `43 Le Duyen`, 2),
    new Manager(`Nguyen Duy Phu`, `male`, 27, `43 Le Duyen`, 2),
    new Manager(`Nguyen Duy Phu`, `male`, 27, `43 Le Duyen`, 2),

    new CEO(`Nguyen Duy Phu`, `male`, 27, `43 Le Duyen`, 2),
]);