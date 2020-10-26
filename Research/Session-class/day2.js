// class và object
// class: bản thiết kế để tạo 1 đối tượng
// object: được tạo từ class

// class Person {
//     name;
//     age;
//     address;
//     sex;
//     isMarriage;

//     constructor(name, age, address, isMarriage, sex) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.isMarriage = isMarriage;
//         this.sex = sex;
//     }

//     run() {
//         console.log(`I'm running`);
//     }
//     walk() {
//         console.log(`I'm walking`);
//     }
//     goTo(destination) {
//         console.log(`I'm going to ${destination}`);
//     }
//     calculateSum(a, b) {
//         console.log(`${a} + ${b} = ${a + b}`);
//     }
//     sleep = function sleepFunc(params) {
//         console.log(`Sleep`);
//     }
//     laugh = () => {

//     }
//     introduce() {
//         console.log(`
//         Xin chào mọi người
//         Mình là ${this.name}
//         Mình năm nay ${this.age} tuổi
//         Quê mình ở ${this.address}
//         `);
//     }
// }
// class GoodBoye {
//     name;
//     age;
//     sex;
//     slogan;
//     poor;
// }
// class GoodBoye {
//     name;
//     age;
//     sex;
//     slogan;
//     poor;
// }

// let hoangAnh = new Person(`Hoang Anh`, 20, `Bac Giang`, false, `male`);
// console.log(hoangAnh);
// hoangAnh.goTo(`Quất Lâm`);
// hoangAnh.sleep();
// hoangAnh.introduce();

// class Animal {
//     name;
//     gender;
//     species;
//     color;
//     legs;

//     constructor(name, gender, species, color, legs) {
//         this.name = name;
//         this.gender = gender;
//         this.species = species;
//         this.color = color;
//         this.legs = legs;
//     }
//     speak() {
//         console.log(`
//         ${this.name} biết nói
//         `);
//     }
//     walk = () => {
//         console.log(`
//         Con này có ${this.legs} chân
//         `);
//     }
// }

// let choNgao = new Animal(`Cơm Nguội`, `male`, `Chó ngáo`, `black`, 4);
// let cat = new Animal(`Cỏ khô`, `female`, `Mèo`, `White`, 4);
// let cat2 = new Animal(`Bánh mỳ`, `female`, `Mèo`, `White`, 4);

// console.log(choNgao, cat, cat2);
// cat2.walk();
// cat2.speak();

// class Person {
//     name;
//     sex;
//     age;
//     slogan;
//     constructor(name, sex, age, slogan) {
//         this.name = name;
//         this.sex = sex;
//         this.age = age;
//         this.slogan = slogan;
//     }
// }

// class GoodBoy extends Person {
//     poor;

//     constructor(name, sex, age, slogan, poor) {
//         super(name, sex, age, slogan); // Gọi phương thức khởi tạo của thằng cha.
//         this.poor = poor;
//     }
// }
// class BigCityBoy extends Person {
//     rich;

//     constructor(name, sex, age, slogan, rich) {
//         super(name, sex, age, slogan); // Gọi phương thức khởi tạo của thằng cha.
//         this.rich = rich;
//     }
// }
// class YellowBoy extends Person {
//     amount;

//     constructor(name, sex, age, slogan, amount) {
//         super(name, sex, age, slogan); // Gọi phương thức khởi tạo của thằng cha.
//         this.amount = amount;
//     }
// }

// let long = new GoodBoy(`Long`, `male`, 20, `Em ăn cơm với canh chwua?`, true);
// let nam = new BigCityBoy(`Nam`, `male`, 20, `Không thể tin nổi`, true);
// let hung = new YellowBoy(`Hung`, `male`, 20, `Không thể tin nổi`, 20);
// console.log(long, nam, hung);

// Hãy cài đặt class sau:
class Person {
    name;
    age;
    address;

    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    speak = () => {
        console.log(`I can speak`);
    }
}

class Boy extends Person {
    sex;
    strength;
    constructor(name, age, address, strength) {
        super(name, age, address);
        this.sex = `male`;
        this.strength = strength;
    }
    hit = () => {
        console.log(`I can hit`);
    }
}

class BadBoy extends Boy {
    rich;
    constructor(name, age, address, strength, rich) {
        super(name, age, address, strength);
        this.rich = rich;
    }
}
class GoodBoy extends Boy {
    poor;
    constructor(name, age, address, strength, poor) {
        super(name, age, address, strength);
        this.poor = poor;
    }
}

class Girl extends Person {
    sex;
    beauty;
    constructor(name, age, address, beauty) {
        super(name, age, address);
        this.sex = `female`;
        this.beauty = beauty;
    }
    cook = () => {
        console.log(`I'm cooking`);
    }
}

class BadGirl extends Girl {
    rich;
    constructor(name, age, address, beauty, rich) {
        super(name, age, address, beauty);
        this.rich = rich;
    }
}
class GoodGirl extends Girl {
    poor;
    constructor(name, age, address, beauty, poor) {
        super(name, age, address, beauty);
        this.poor = poor;
    }
}

let xuanMai = new BadGirl(`Xuan Mai`, 20, `so 15 nguyen luong bang`, true, true);
let hungManh = new GoodBoy(`Hung Manh`, 20, `so 15 nguyen luong bang`, true, true);
console.log(xuanMai);
console.log(hungManh);