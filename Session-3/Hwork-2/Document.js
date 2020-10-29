export class Document {
    id;
    name;
    authorq;
    price;
    publishDate;

    constructor(id, name, authorq, price, publishDate) {
        this.id = id;
        this.name = name;
        this.authorq = authorq;
        this.price = price;
        this.publishDate = publishDate;
    }
    get info() {
        // return thông tin về tài liệu đó
        return console.log(`
            id:            ${this.id}
            name:          ${this.name}
            authorq:       ${this.authorq}
            price:         ${this.price}
            publis date:   ${this.publishDate}
        `);
    }
    set info(data) {
        // sửa thông tin của document với data (data là 1 object)
        this.id = data.id;
        this.name = data.name;
        this.authorq = data.authorq;
        this.price = data.authorq;
        this.publishDate = data.publishDate;
    }
}