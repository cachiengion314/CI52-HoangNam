import DocumentCase from "./DocumentCase.js";
import EBook from "./EBook.js";
import HardCopy from "./HardCopy.js";

let myCase = new DocumentCase(0, `MyCase`, [
    new EBook(`Doi Gio Hu`, `Bill`, 50000, 2020, 15 / 100),
    new EBook(`Khong Gia Dinh`, `Jack`, 50000, 2000, 5 / 100),

    new HardCopy(`Doi Gio Hu - copy`, `Bill`, 50000, 2020, `Doi Gio Hu`),
    new HardCopy(`Khong Gia Dinh - copy`, `Jack`, 50000, 2000, `Khong Gia Dinh`),
], `Hoang Nam`, 2020);

myCase.findDocuments(`doi gio hu`);
console.log(`---------- add & update ----------`);
myCase.addDocument(new EBook(4, `Chu Cuoi`, `John`, 50000, 1990, 9 / 100));
myCase.documents[0].info = new EBook(5, `Trang Quynh`, `Jim`, 50000, 1980, 8 / 100);
myCase.showDocuments();
console.log(`---------- all book info ---------`);
myCase.documents.map((book) => {
    book.info;
});

console.log(`---------- all book info ---------`);
myCase.documents.map((book) => {
    book.info;
});