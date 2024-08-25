

"use client"

import React, { useEffect } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import useProductsStore from '../../../../store/products';
import "./style.scss"

const search = () => {
  const {getData,datas} =  useProductsStore()


  useEffect(() => {
    getData()
  }, [getData])
  return (
    <>

    <Input className="input_ant" placeholder="Search for products..." prefix={<SearchOutlined />} />
  
    {/* <Input placeholder="default size" prefix={<UserOutlined />} /> */}
    <br />
    <br />
    {/* <Input size="small" placeholder="small size" prefix={<UserOutlined />} /> */}
  </>
  )
}

export default search


// "use client";
// import React, { useEffect, useState } from 'react';
// import { SearchOutlined } from '@ant-design/icons';
// import { Input } from 'antd';
// import useProductsStore from '../../../../store/products';
// import "./style.scss";

// const Search = () => {
//   const { getData, datas } = useProductsStore();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

//   // Fetch data on component mount
//   useEffect(() => {
//     getData();
//   }, [getData]);

//   // Filter products based on search query
//   useEffect(() => {
//     if (datas) {
//       setFilteredProducts(
//         datas.filter(product =>
//           product.title.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );
//     }
//   }, [searchQuery, datas]);

//   // Handle search input changes
//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <>
//       <Input
//         className="input_ant"
//         placeholder="Search for products..."
//         prefix={<SearchOutlined />}
//         value={searchQuery}
//         onChange={handleSearchChange}
//       />
//       <div>
//         {filteredProducts.length === 0 ? (
//           <p>No products found</p>
//         ) : (
//           filteredProducts.map(product => (
//             <div key={product._id}>
//               <h2>{product.title}</h2>
//               {/* Render other product details as needed */}
//             </div>
//           ))
//         )}
//       </div>
//     </>
//   );
// };

// export default Search;


