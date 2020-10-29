import { Document } from "./Document.js";

export class HardCopy extends Document {
    source; // tên quyển sách được sao chép
    constructor(id, name, authorq, price, publishDate, source) {
        super(id, name, authorq, price, publishDate);
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