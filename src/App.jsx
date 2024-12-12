import { useState } from "react";

// function App() {
//   const [job, setJobs] = useState("");
//   // console.log(job);
//   const [jobList, setJobList] = useState([]);
//   const [resultSearch, setResultSearch] = useState(null); // là null ko timg thấy kq tìm kiếm
//   const handleClick = () => {
//     if (job.trim()) {
//       setJobList((prev) => [...prev, job]);

//       // Hiện thị result dựa trên từ khóa tìm kiếm
//       if (job.toLocaleLowerCase().includes("nam")) {
//         setResultSearch("nam");
//       } else if (
//         job.toLocaleLowerCase().includes("nu") ||
//         job.toLocaleLowerCase().includes("nữ")
//       ) {
//         setResultSearch("nu");
//       } else {
//         setResultSearch(null);
//       }
//       setJobs("");
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <input
//         type="text"
//         placeholder="enter todo"
//         value={job}
//         onChange={(e) => setJobs(e.target.value)}
//       />
//       <button onClick={handleClick}>ADD</button>

//       <ul>
//         {jobList.map((job, index) => (
//           <li key={index}>{job}</li>
//         ))}
//       </ul>

//       {/* // Hiện thị result dựa trên từ khóa tìm kiếm */}
//       {resultSearch === "nam" && (
//         <div>
//           <h1>THOI TRANG NAM</h1>
//           <img src="" alt="anh 1 " />
//           <img src="" alt="anh 1 " />
//           <img src="" alt="anh 1 " />
//         </div>
//       )}

//       {resultSearch === "nu" && (
//         <div>
//           <h1>THOI TRANG NỮ </h1>
//           <img src="" alt="anh 1 " />
//           <img src="" alt="anh 1 " />
//           <img src="" alt="anh 1 " />
//         </div>
//       )}
//     </div>
//   );
// }
// export default App;

// GIỎ HÀNG
// function App() {
//   const products = [
//     { id: 1, name: "AO LEN", price: 2000 },
//     { id: 2, name: "AO KHOAC", price: 3000 },
//     { id: 3, name: "AO NI", price: 4000 },
//   ];
//   const [car, setCart] = useState([]); //là mảng để chứa các sp mà người dùng thêm vào

//   const handleCar = (pro) => {
//     //pro sản phẩm đã chọn
//     //là hàm dùng để gọi người dùng nhấp vào 'thêm vao gio hang'
//     setCart((prev) => [...prev, pro]);
//   };
//   return (
//     <div style={{ padding: "40px" }}>
//       <h1>THOI TRANG </h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - {product.price}$
//             <button onClick={() => handleCar(product)}>
//               Them vao gio hang
//             </button>
//           </li>
//         ))}
//       </ul>
//       <h2>GIO HANG</h2>
//       {car.leng === 0 ? (
//         <p>Giỏ hàng trống </p>
//       ) : (
//         <ul>
//           {car.map((item, index) => (
//             <li key={index}>
//               {item.name} - {item.price}$
//             </li>
//           ))}
//         </ul>
//       )}
//       <h3>TONG TIEN : {car.reduce((total, item) => total + item.price, 0)}$</h3>

//     </div>
//   );
// }
// export default App;

// NAM OR NỮ
// function App() {
//   const [search, setSearch] = useState("");
//   console.log(search);
//   // const [searchList, setSearchList] = useState([]);
//   const [result, setResult] = useState(false); //lưu giá trị ô trả ra kết quả

//   const handleSubmit = () => {
//     if (search.toLowerCase().includes("nam")) {
//       setResult(true); //hien thi thoi trang nam
//     } else {
//       setResult(false); //ko hien thi hoac hien thi khac
//     }
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <button onClick={handleSubmit}>ADD</button>

//       {/* hien thi nam */}
//       {result && (
//         <div>
//           <h1>THOI TRANG NAM</h1>
//           <img src="" alt="anh 1" />
//           <img src="" alt="anh 1" />
//           <img src="" alt="anh 1" />
//         </div>
//       )}

//       {/* hien thi nu */}
//       {!result && (
//         <div>
//           <h1>THOI TRANG nữ</h1>
//           <img src="" alt="anh 1" />
//           <img src="" alt="anh 1" />
//           <img src="" alt="anh 1" />
//         </div>
//       )}
//     </div>
//   );
// }
// export default App;

//CHỨC NĂNG TÌM KIẾM THỜI TRANG NAM (false)
// function App() {
//   const [search, setSearch] = useState("");
//   console.log(search);
//   const [list, setList] = useState([]);
//   const [result, setResult] = useState(false); //hien thi kq tim kiem

//   const handleSubmit = () => {
//     //loại bỏ khoảng trằng va kiêm tra khoi if
//     const trim = search.toLowerCase().trim();

//     //them tu khóa vào danh sach neu có nội dung
//     if (trim) {
//       setList((prev) => [...prev, search]);
//       setSearch("");
//     }
//     if (trim.toLowerCase().includes("nam")) {
//       setResult(true);
//     } else {
//       setResult(false);
//     }
//   };
//   return (
//     <div style={{ padding: "40px" }}>
//       <input
//         type="text"
//         placeholder="Enter todo"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <ul>
//         {list.map((job, index) => (
//           <li key={index}>{job}</li>
//         ))}
//       </ul>

//       <button onClick={handleSubmit}>ADD</button>

//       {/* nam */}
//       {result && (
//         <div>
//           <h1>THOI TRANG NAM</h1>
//           <img src="" alt="anh 1" />
//           <img src="" alt="anh 2" />

//           <img src="" alt="anh 3" />
//         </div>
//       )}

//       {/* nu */}
//       {!result && (
//         <div>
//           <h1>THOI TRANG NU</h1>
//           <img src="" alt="anh 1" />
//           <img src="" alt="anh 2" />

//           <img src="" alt="anh 3" />
//         </div>
//       )}
//     </div>
//   );
// }
// export default App;

//nam hoac nu (null)
// function App() {
//   const [search, setSearch] = useState("");
//   const [result, setResult] = useState(null);

//   const handleSubmit = () => {
//     const chuHoa = search.toLowerCase();
//     if (chuHoa.includes("nam")) {
//       setResult("nam");
//     } else if (chuHoa.includes("nu") || chuHoa.includes("nữ")) {
//       setResult("nu");
//     } else {
//       setResult(null);
//     }
//     setSearch("");
//   };
//   return (
//     <div style={{ padding: "40px" }}>
//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <button onClick={handleSubmit}>ADD</button>

//       {/* nam */}
//       {result === "nam" && (
//         <div>
//           <h1>THOI TRANG NAM</h1>
//           <img
//             alt=""
//             src="https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27.jpg"
//           />
//           <img
//             alt=""
//             src="https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27.jpg"
//           />

//           <img
//             alt=""
//             src="https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27.jpg"
//           />
//         </div>
//       )}

//       {/* nu */}
//       {result === "nu" && (
//         <div>
//           <h1>THOI TRANG NU</h1>
//           <img
//             src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-con-cho-26.jpg"
//             alt=""
//           />
//           <img
//             src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-con-cho-26.jpg"
//             alt=""
//           />

//           <img
//             src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-con-cho-26.jpg"
//             alt=""
//           />
//         </div>
//       )}
//     </div>
//   );
// }
// export default App;

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const [list, setList] = useState([]);
  console.log(input);
  const handleSubmit = () => {
    const namNu = input.toLowerCase().trim();
    if (namNu.includes("nam")) {
      setResult("nam");
    } else if (namNu.includes("nu") || namNu.includes("nữ")) {
      setResult("nữ");
    } else {
      setResult(null);
    }
  };
  return (
    <div style={{ padding: "40px" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>ADD</button>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      {/* nam */}
      {result === "nam" && (
        <div>
          <h1>THOI TRANG NAM</h1>
          <img
            src="https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27.jpg"
            alt=""
          />
          <img
            src="https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27.jpg"
            alt=""
          />

          <img
            src="https://hoangthuong.net/wp-content/uploads/2022/05/hinh-anh-cho-con-de-thuong-27.jpg"
            alt=""
          />
        </div>
      )}

      {/* nu */}
      {result === "nữ" && (
        <div>
          <h1>THOI TRANG NU</h1>
          <img
            src="https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_1280.jpg"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_1280.jpg"
            alt=""
          />

          <img
            src="https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_1280.jpg"
            alt=""
          />
        </div>
      )}
    </div>
  );
}
export default App;
