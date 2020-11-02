import Document from "./Document.js";

export default class HardCopy extends Document {
    source; // tên quyển sách được sao chép
    constructor(name, authorq, price, publishDate, source) {
        super(name, authorq, price, publishDate);
        this.source = source;
    }
    get info() {
        // return thông tin về bản hardcopy, có cả source
        return console.log(`
            id:            ${this.id}
            name:          ${this.name}
            authorq:       ${this.authorq}
            price:         ${(this.price).toLocaleString()} vnd
            publis date:   ${this.publishDate}
            source:        ${this.source}
    `);
    }
}