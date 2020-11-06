Tìm hiểu về sự khác nhau giữa 
    querySelector, querySelectorAll vs getElementById, getElementsByClassName, getElementsByTagName

Như tên gọi, getElementById chỉ có thể được sử dụng để lấy các phần tử bằng ID của chúng. 
Điều này sẽ luôn trả về một Elenment có ID phải là duy nhất. 
Trong khi đó, querySelector có thể được sử dụng để truy vấn DOM với các bộ lọc nâng cao hơn bao gồm cả
select được className lẫn tagName.

querySelector sẽ chỉ trả về phần tử được so khớp đầu tiên, querySelectorAll sẽ trả về mọi 
kết quả dưới dạng NodeList. 
Điều này có nghĩa là, nếu bạn có nhiều phần tử có cùng tên lớp và bạn muốn chọn tất cả chúng, 
bạn phải sử dụng querySelectorAll.