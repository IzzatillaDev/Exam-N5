// "use client"
// import React from 'react'
// import Card from "../ui/card/card"
// import "./style.scss"
// import useProductsStore from '../../../store/products';

// const seeling = () => {
//   const { getData, datas } = useProductsStore();

//   return (
//     <>
//     <section className='seeling'>
//         <div className='containers'>
//             <h2 className='seeling_title'>TOP SELLING</h2>
//             <div className='products'>
//               {
//                 datas.map((product, i) => 
//                 <Card product={product} key={i}/>
//                 )
//               }

//                 {/* <Card/>
//                 <Card/>
//                 <Card/>
//                 <Card/> */}
//             </div>

//             <div className='btn_all'>
//           <button className='all_view'>View All</button>
//         </div>

//         </div>

//     </section>
//     </>
//   )
// }

// export default seeling

"use client"
import React, { useState } from 'react';
import Card from "../ui/card/card";
import "./style.scss";
import useProductsStore from '../../../store/products';

const Seeling = () => {
  const { getData, datas } = useProductsStore();
  const [visibleCount, setVisibleCount] = useState(4);

  const handleViewAll = () => {
    setVisibleCount(prevCount => prevCount + 4); 
  };

  return (
    <section className='seeling'>
      <div className='containers'>
        <h2 className='seeling_title'>TOP SELLING</h2>
        <div className='products'>
          {datas.slice(0, visibleCount).map((product, i) => (
            <Card product={product} key={i} />
          ))}
        </div>

        {visibleCount < datas.length && ( 
          <div className='btn_all'>
            <button className='all_view' onClick={handleViewAll}>
              View All
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Seeling;
