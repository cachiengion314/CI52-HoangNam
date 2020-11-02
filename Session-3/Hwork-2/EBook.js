import Document from "./Document.js";

export default class EBook extends Document {
    discount;
    constructor(name, authorq, price, publishDate, discount) {
        super(name, authorq, price, publishDate);
        this.discount = discount;
    }
    get info() {
        // return thông tin về sách điện tử đó, price tính theo discount
        return console.log(`
            id:             ${this.id}
            name:           ${this.name}
            authorq:        ${this.authorq}
            price:          ${(this.price - (this.price * this.discount)).toLocaleString()} vnd
            publish date:   ${this.publishDate}
            discount:       ${this.discount}
        `);
    }
    set info(data) {
        this.name = data.name;
        this.authorq = data.authorq;
        this.price = data.price;
        this.publishDate = data.publishDate;
    }
}