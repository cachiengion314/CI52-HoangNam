export class DocumentCase {
    id;
    name;
    documents;
    owner;
    dateModified;
    constructor(id, name, documents, owner, dateModified) {
        this.id = id;
        this.name = name;
        this.documents = documents;
        this.owner = owner;
        this.dateModified = dateModified;
    }
    addDocument(document) {
        // document is object of Document
        this.documents.push(document);
    }
    findDocuments(name) {
        // tìm tất cả document theo tên
        let resultsArr = this.filterAnArray((book) => {
            return this.isStringInString(name, book.name);
        }, this.documents);
        console.log(`Name of all documents that have "${name}" name is below:`);
        resultsArr.map((book) => {
            console.log(book.name);
        });
        return resultsArr;
    }
    deleteDocument(id) {
        // xóa 1 document theo id
        let str = ``;
        let allBookWithGivenId = this.filterAnArray((book) => {
            return book.id == id;
        }, this.documents);
        allBookWithGivenId.map((book) => {
            str += book.name + ` `;
            this.documents.splice(this.documents.indexOf(book), 1);
        });
        console.log(`Delete all with id: "${id}" and name: "${str}" is done`);
    }
    showDocuments() {
        // in ra console các documents hiện có
        console.log(`Name of all documents is below:`);
        this.documents.map((book) => {
            console.log(book.name);
        });
    }
    updateDocument(id, data) {
        // sửa thông tin của document với id và data
        let str = ``;
        let allBookWithGivenId = this.filterAnArray((book) => {
            return book.id == id;
        }, this.documents);
        allBookWithGivenId.map((book) => {
            str += book.name + ` `;
            this.documents[this.documents.indexOf(book)] = data;
        });
        console.log(`Update all with id: "${id}" and name: "${str}" become ${data.name} is done!`);
    }
    filterAnArray(callback, array) {
        let filterArray = [];
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                filterArray.push(array[i]);
            }
        }
        return filterArray;
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