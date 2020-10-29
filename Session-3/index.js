console.log(`
Bài 1 (Lý thuyết): Tìm hiểu về WebComponent: khái niệm? Công dụng?
`);

console.log(`
Bài 2 (OOP): Hãy viết chương trình quản lý tài liệu cá nhân bằng cách cài đặt các class sau
 - Document:
 + id
 + name
 + authorq
 + price
 + publishDate
 + get info(): return thông tin về tài liệu đó
 + set info(data): sửa thông tin của document với data (data là 1 object)
 - EBook kế thừa Document
 + discount: giảm giá, tính theo phần trăm
 + get info(): return thông tin về sách điện tử đó, price tính theo discount
 - HardCopy kế thừa Document
 + source: tên quyển sách được sao chép
 + get info(): return thông tin về bản hardcopy, có cả source
 - DocumentCase:
 + id
 + name
 + documents: là 1 mảng chứa các quyển sách
 + owner: tên người sở hữu
 + dateModified
 + addDocument(document): thêm 1 document. 
 Tham số document truyền vào là thể hiện của Document.
 Hỏi: liệu có truyền thể hiện của EBook hoặc HardCopy được không? Vì sao?
 + findDocuments(name): tìm tất cả document theo tên
 + deleteDocument(id): xóa 1 document theo id
 + showDocuments(): in ra console các documents hiện có
 + updateDocument(id, data): sửa thông tin của document với id và data
 Lấy ví dụ với 1 DocumentCase, 2 EBook, 2 HardCopy
`);

console.log(`
Bài 3 (Nâng cao OOP + Thuật toán, không bắt buộc phải làm): Tìm hiểu về cấu trúc dữ liệu LinkedList và cài đặt?
 - Cấu trúc dữ liệu LinkedList: là cấu trúc dữ liệu dùng để lưu 1 tập dữ liệu dưới kiểu danh sách (gần giống như mảng)
 - Nó là 1 dãy dữ liệu lên kết với nhau thông qua các liên kết
 - Tham khảo: https://www.geeksforgeeks.org/data-structures/linked-list/
 - Cách cài đặt:
 - Node: 
 + data: lưu dữ liệu của node
 + next: trỏ đến 1 node khác
 - LinkedList // - represent class || + represent function
 + firstNode: chứa node đầu tiên của LinkedList
 + tranversal(): duyệt tất cả các node
 + pushNode(node): thêm 1 node vào cuối danh sách
 + unshiftNode(node): thêm 1 node vào đầu danh sách
 + ...
 Lấy 1 ví dụ
`);