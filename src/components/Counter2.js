import React, { useState } from 'react';

function Counter2() {
  // Sử dụng useState để khởi tạo một biến state 'count' với giá trị ban đầu là 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Bạn đã nhấn {count} lần</p>
      {/* Khi nút được nhấn, gọi hàm setCount để cập nhật giá trị của count */}
      <button onClick={() => setCount(count + 1)}>
        Nhấn để tăng số lần nhấn
      </button>
    </div>
  );
}

export default Counter2;
