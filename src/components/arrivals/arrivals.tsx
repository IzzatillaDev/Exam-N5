// "use client";
//  import React, { useState } from 'react'
// import Card from "../ui/card/card"
// import "./style.scss"
// import useProductsStore from '../../../store/products';

// const arrivals = () => {
//   const { getData, datas } = useProductsStore();



//   console.log(datas);


//   return (
//     <>
//       <section className='arrivals'>
//         <div className='containers'>
//           <h2 className='arrivals_title'>NEW ARRIVALS</h2>

//         <div className='products'>
//           {
//             datas.map((product, index) => 
//             <Card product={product} key={index}/>
//             )
//           }

//         </div>



//         <div className='btn_all'>
//           <button  className='all_view'>View All</button>
//         </div>

//         </div>
//       </section>
//     </>
//   )
// }

// export default arrivals


"use client";
import React, { useState } from 'react';
import Card from "../ui/card/card";
import "./style.scss";
import useProductsStore from '../../../store/products';

const Arrivals = () => {
  const { getData, datas } = useProductsStore();
  const [visibleCount, setVisibleCount] = useState(4); // Dastlab 4 ta mahsulot ko'rsatiladi

  const handleViewAll = () => {
    setVisibleCount(prevCount => prevCount + 4); // "View All" tugmachasi bosilganda 4 ta mahsulot qo'shiladi
  };

  return (
    <section className='arrivals'>
      <div className='containers'>
        <h2 className='arrivals_title'>NEW ARRIVALS</h2>

        <div className='products_arr'>
          {
            datas.slice(0, visibleCount).map((product, index) =>
              <Card product={product} key={index} />
            )
          }
        </div>

        {visibleCount < datas.length && ( // Agar ko'rsatish uchun yana mahsulot bo'lsa, tugma ko'rsatiladi
          <div className='btn_all'>
            <button className='all_view' onClick={handleViewAll}>
              View All
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Arrivals;
