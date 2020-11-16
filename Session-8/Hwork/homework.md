Xử lý bất đồng bộ:
Đây là quá trình mà các câu lệnh có thể chạy cùng một lúc chứ không cần chờ câu lệnh trước. 
Với lý thuyết trên, 
nếu ta sẽ chạy đồng thời 100 câu lệnh đọc file cùng một lúc 
=> Chúng ta sẽ chỉ mất khoảng 0.5s đến 1s thay vì 50s như lúc trước.

Một lưu ý là có thể câu lệnh thứ 2 sẽ thực hiện nhanh hơn câu lệnh 1 
nên sẽ trả về kết quả sớm hơn. 
Do đó, kết quả của các câu lệnh cũng có thể được trả về không theo thứ tự gọi bạn đâu.

Trong javacript có ba cách để xử lý bất đồng bộ. 

1. Callback
Hiểu đơn giản là ta truyền một hàm B vào hàm A dưới dạng 1 tham số, một lúc nào đó 
thì hàm A sẽ gọi hàm B để chạy. 
Ví dụ:
-------------------
function asyncFunction(callback) {
   console.log("Start");
   setTimeout(() => {
      callback();
   }, 1000);
   console.log("Waiting");
}

let printEnd = function() {
   console.log("End");
}
asyncFunction(printEnd)
-------------------
* Ở đây setTimeout để giả sử cho thời gian chờ là 1s.

2. Promise
Để giải quyết vấn đề Callback Hell, phiên bản ES6 đã đem đến cho chúng ta Promise. 
Về khái niệm, Promise chính là "lời hứa" đại diện cho giá trị chưa tồn tại và giá trị đó 
sẽ được trả về vào một thời gian trong tương lai.
Đây là cách để tạo ra một Promise:
-------------------
let promise = new Promise((resolve, reject) => {
  // Asynchronous Code.
});
-------------------
Promise sẽ nhận vào một hàm callback gồm 2 tham số như sau:

resolve: một function sẽ được gọi nếu đoạn code bất đồng bộ trong Promise chạy thành công.
reject: một function sẽ được gọi nếu đoạn code bất đồng bộ trong Promise có lỗi xảy ra.
Promise cũng cung cấp cho chúng ta 2 phương thức để xử lý sau khi được thực hiện:

then(): Dùng để xử lý sau khi Promise được thực hiện thành công (khi resolve được gọi).
catch(): Dùng để xử lý sau khi Promise có bất kỳ lỗi nào đó (khi reject được gọi).
Dưới đây là đoạn code hoàn chỉnh về việc sử dụng Promise:
-------------------
const randomNumber = new Promise((resolve, reject) => {
   const url = 'https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new';
   let request = new XMLHttpRequest();

   request.open('GET', url);
   request.onload = function() {
      if (request.status == '200') {
         resolve(request.response);
      } else {
         reject(Error(request.statusText)); 
      }
   };

   request.onerror = function() {
      reject(Error('Error fetching data.'));
   };

   request.send();
});

randomNumber
.then((res) => {
   console.log("Success");
   console.log("Random number: ", res);
})
.catch((err) => {
   console.log("Error: ", err.message);
})
-------------------

3. Asyn/await
Để sử dụng hàm async, ta cần khai báo từ khóa async ngay trước từ khóa định nghĩa hàm. 
Tức là, với hàm định nghĩa với từ khóa function ta phải khai báo ngay trước function, 
với hàm mũi tên (arrow function) ta phải khai báo trước tập tham số đầu vào.
Kết quả trả ra của hàm async luôn là một Promise dù bạn có gọi 
await - có xử lý bất đồng bộ hay không. 
Promise này sẽ ở trạng thái thành công với kết quả được trả ra với từ khóa return của hàm async, 
hoặc trạng thái thất bại với kết quả được đẩy qua từ khóa throw trong hàm async. 
Như vậy,chúng ta có thể thấy bản chất của hàm async chính là Promise.

Với Promise, ta có thể xử lý ngoại lệ với catch khá đơn giản. 
Tuy nhiên cũng không dễ dàng theo dõi và dễ đọc. 
Nhưng với hàm async, việc này cực kì đơn giản bằng từ khóa try catch hệt như các thao tác đồng bộ.