export default class Document {
    id;
    name;
    authorq;
    price;
    publishDate;

    constructor(name, authorq, price, publishDate) {
        this.name = name;
        this.authorq = authorq;
        this.price = price;
        this.publishDate = publishDate;
        this.id = uuid.v4();
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
        this.name = data.name;
        this.authorq = data.authorq;
        this.price = data.authorq;
        this.publishDate = data.publishDate;
    }
}