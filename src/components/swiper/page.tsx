// // "use client"
// // import React, { useRef, useState } from 'react';
// // // Import Swiper React components
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import Customers from "../../components/customers/customers"
// // import 'swiper/css';
// // import 'swiper/css/free-mode';
// // import 'swiper/css/pagination';
// // import './style.css';
// // import { FreeMode, Pagination } from 'swiper/modules';
// // import Customer from "../ui/customer/customer"
// // // import Card from "@/components/products/page"


// // export default function App({data}:any) {
// //   console.log(data,"llllllll")
// //   return (
// //     <>
// //       <Swiper
// //         slidesPerView={4}
// //         spaceBetween={20}
// //         freeMode={true}
// //         pagination={{
// //           clickable: true,
// //         }}
// //         modules={[FreeMode, Pagination]}
// //         className="mySwiper"
// //         breakpoints={{
// //           // when window width is >= 1024px (desktop)
// //           1252: {
// //             slidesPerView: 4,
// //           },
// //           // when window width is >= 768px (tablet)
// //           768: {
// //             slidesPerView: 3,
// //           },
// //           // when window width is >= 320px (mobile)
// //           320: {
// //             slidesPerView: 2,
// //           },
// //         }}

// //       >
// //         {/* <SwiperSlide><Card /></SwiperSlide> */}
// //         {/* {
// //         data?.map((el:any,i:any) => {
// //             return (
// //               <SwiperSlide key={i}>
// //                 <Card
// //                 datas={el}
// //                 />
// //               </SwiperSlide>
// //             )

// //         })} */}
// //         <SwiperSlide><Customer /></SwiperSlide>
// //         <SwiperSlide><Customer /></SwiperSlide>
// //         <SwiperSlide><Customer /></SwiperSlide>
// //         <SwiperSlide><Customer /></SwiperSlide>
// //         <SwiperSlide><Customer /></SwiperSlide>
// //         <SwiperSlide><Customer /></SwiperSlide>
// //         <SwiperSlide><Customer /></SwiperSlide>
// //         {/* <SwiperSlide><Customers /></SwiperSlide> */}
// //         {/* <SwiperSlide><Card /></SwiperSlide>
// //         <SwiperSlide><Card /></SwiperSlide>
// //         <SwiperSlide><Card /></SwiperSlide>
// //         <SwiperSlide><Card /></SwiperSlide>
// //         <SwiperSlide><Card /></SwiperSlide>
// //         <SwiperSlide><Card /></SwiperSlide> */}
// //       </Swiper>
// //     </>
// //   );
// // }

// "use client";
// import React, { useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';  // Import autoplay styles
// import './style.css';
// import { FreeMode, Pagination, Autoplay } from 'swiper/modules';  // Import Autoplay module
// import useProductsStore from '../../../store/products';
// import Customer from "../ui/customer/customer";

// export default function App({ data }: any) {
//   const {getData,datas} = useProductsStore()

//   useEffect(() => {
//     getData()
//   }, [getData])

//   return (
//     <>
//       <Swiper
//         slidesPerView={1}  // Display one slide at a time
//         spaceBetween={20}
//         loop={true}  // Enable continuous loop mode
//         freeMode={true}
//         pagination={{
//           clickable: true,
//         }}
//         autoplay={{
//           delay: 300,  // Time in milliseconds before transitioning to the next slide
//           disableOnInteraction: false,  // Continue autoplay after user interaction
//         }}
//         modules={[FreeMode, Pagination, Autoplay]}  // Include Autoplay module
//         className="mySwiper"
//         breakpoints={{
//           // when window width is >= 1024px (desktop)
//           1252: {
//             slidesPerView: 5,
//           },
//           // when window width is >= 768px (tablet)
//           768: {
//             slidesPerView: 5,
//           },
//           // when window width is >= 320px (mobile)
//           320: {
//             slidesPerView: 5,
//           },
//         }}
//       >

//         {/* {
//           datas?.map((el: any, i: any) => {
//             return (
//               <SwiperSlide key={i}>
//                 <Customer
//                   datas={el}
//                 />
//               </SwiperSlide>
//             )
//         } */}
//         // <SwiperSlide><Customer /></SwiperSlide>
//         // <SwiperSlide><Customer /></SwiperSlide>
//         // <SwiperSlide><Customer /></SwiperSlide>
//         // <SwiperSlide><Customer /></SwiperSlide>
//         // <SwiperSlide><Customer /></SwiperSlide>
//         // <SwiperSlide><Customer /></SwiperSlide>
//       </Swiper>
//     </>
//   );  
// }


"use client";
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './style.css';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import useProductsStore from '../../../store/products';
import Customer from "../ui/customer/customer";

export default function App() {
  const { getData, datas } = useProductsStore();

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 300,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          1252: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 5,
          },
          320: {
            slidesPerView: 5,
          },
        }}
      >
        {datas?.map((el: any, i: any) => (
          <SwiperSlide key={i}>
            <Customer
              datas={el}  // Pass the unique data to each Customer component
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

