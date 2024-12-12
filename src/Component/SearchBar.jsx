// import React, { useState } from "react";
// import "./SearchBar.css"; // Để thêm CSS vào component

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   // Mảng dữ liệu sản phẩm mẫu
//   const products = [
//     {
//       id: 1,
//       name: "Áo thun trắng",
//       category: "Áo",
//       size: "M",
//       color: "Trắng",
//       price: 200000,
//     },
//     {
//       id: 2,
//       name: "Quần jean xanh",
//       category: "Quần",
//       size: "L",
//       color: "Xanh",
//       price: 500000,
//     },
//     {
//       id: 3,
//       name: "Váy đỏ",
//       category: "Váy",
//       size: "S",
//       color: "Đỏ",
//       price: 350000,
//     },
//     {
//       id: 4,
//       name: "Áo khoác đen",
//       category: "Áo",
//       size: "L",
//       color: "Đen",
//       price: 800000,
//     },
//   ];

//   // Hàm xử lý tìm kiếm
//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);

//     // Lọc sản phẩm theo tên hoặc thuộc tính
//     const results = products.filter(
//       (product) =>
//         product.name.toLowerCase().includes(term) ||
//         product.category.toLowerCase().includes(term) ||
//         product.color.toLowerCase().includes(term)
//     );
//     setFilteredProducts(results);
//   };

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         className="search-input"
//         placeholder="Tìm kiếm sản phẩm..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <button className="search-button">
//         <i className="fa fa-search"></i>
//       </button>

//       {searchTerm && filteredProducts.length > 0 && (
//         <ul className="search-results">
//           {filteredProducts.map((product) => (
//             <li key={product.id}>
//               {product.name} - {product.category} - {product.color} -{" "}
//               {product.price} VND
//             </li>
//           ))}
//         </ul>
//       )}

//       {searchTerm && filteredProducts.length === 0 && (
//         <p className="no-results">Không tìm thấy sản phẩm nào.</p>
//       )}
//     </div>
//   );
// };

// export default SearchBar;

import React from "react";
import { useState } from "react";
