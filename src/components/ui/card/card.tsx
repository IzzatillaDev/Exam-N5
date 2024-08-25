// "use client"
// import React, { use, useEffect } from 'react'
// import Card from "../../../assets/card_image.svg"
// import Stars from "../../../assets/stars.svg"
// import Image from 'next/image'
// import Link from "next/link";
// import useProductsStore from '../../../../store/products';

// import "./style.scss"
// import products from '../../../../service/product'
// import { title } from 'process'

// const card = () => {

//     const {getData,datas} = useProductsStore()

//   console.log(datas);



//     // let result = data.map(item => ({id:item._id, title:item.title, img:item.urls[0], price:item.price}))
//     // console.log(result)




//     useEffect(() => {
//         getData()
//     }, [getData])

//     // const productDetails = datas.map(product => ({
//     //     title: product.title,
//     //     price: product.price,
//     //     url: product.urls[0] // Assuming `urls` is an array and you want the first element
//     // }));

//     // console.log(productDetails);

//     const id = localStorage.getItem("product_id")



//     return (
//         <section className='first_product'>
//             <Link href="/single_products">
//                 <div className='first_card'>
//                     {
//                         datas?.map(product => (
//                             <div>
//                           <Link href={`/single/${product._id}`}>
//                           <Image
//                                 className='card_img'
//                                 src={product.urls[0]}
//                                 width={290}
//                                 height={440}
//                                 alt="Picture of the author"
//                             />
//                           </Link>
//                             <h2 className='card_title'>{product.title}</h2>
//                             <div className='twos'>
//                                 <Image
//                                     src={Stars}
//                                     width={104}
//                                     height={18}
//                                     alt="Picture of the author"
//                                 />
//                                 <p className='span_number'>{product.rating}</p>
//                             </div>
//                             <p className='cost'>${product.price}</p>

//                             <button className='to_cart'>To Cart</button>
//                         </div>
//                         ))
//                     }

//                 </div>
//             </Link>

//         </section>
//     )
// }

// export default card

// "use client"
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import useProductsStore from '../../../../store/products';
// import "./style.scss";
// import Stars from "../../../assets/stars.svg";
// import Notification from '../../../../utils/notification';
// import { ToastContainer } from 'react-toastify';

// const Card = () => {
//     const { getData, datas } = useProductsStore();
//     const [cart, setCart] = useState([]);

//     useEffect(() => {
//         getData();
//         const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//         setCart(storedCart);
//     }, [getData]);

//     const handleCartToggle = (productId: any) => {
//         let updatedCart;
//         if (cart.includes(productId)) {
//             updatedCart = cart.filter(id => id !== productId);
//             // alert("Bu maxsulot muvaffaqiyatli cartdan o'chirildi");
//             Notification({ title: "Bu maxsulot muvaffaqiyatli cartdan o'chirildi", type: "error" })
//         } else {
//             updatedCart = [...cart, productId];
//             Notification({ title: "Bu maxsulot muvaffaqiyatli cart ga qo'shildi", type: "default" })

//         }
//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     return (

//         // <ToastContainer>
//         <section className='first_product'>
//             <div className='first_card'>
//                 {
//                     datas?.map(product => (
//                         <div key={product._id}>
//                             <Link href={`/single/${product._id}`}>
//                                 <Image
//                                     className='card_img'
//                                     src={product.urls[0]}
//                                     width={290}
//                                     height={440}
//                                     alt={product.title}
//                                 />
//                             </Link>
//                             <h2 className='card_title'>{product.title}</h2>
//                             <div className='twos'>
//                                 <Image
//                                     src={Stars}
//                                     width={104}
//                                     height={18}
//                                     alt="Stars"
//                                 />
//                                 <p className='span_number'>{product.rating}</p>
//                             </div>
//                             <p className='cost'>${product.price}</p>
//                             <button
//                                 className='to_cart'
//                                 onClick={() => handleCartToggle(product._id)}
//                             >
//                                 {cart.includes(product._id) ? "Remove Cart" : "To Cart"}
//                             </button>
//                         </div>
//                     ))
//                 }
//             </div>
//         </section>
//         // </ToastContainer>
//     );
// };

// export default Card;

// "use client"
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import useProductsStore from '../../../../store/products';
// import "./style.scss";
// import Stars from "../../../assets/stars.svg";
// // import Notification from '../../../../utils/notification';
// // import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Ensure this CSS import is included
// import { HeartOutlined } from '@ant-design/icons';
// import { ToastContainer } from 'react-toastify';


// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Notification from '../../../../utils/notification';

// const Card = () => {
//     const { getData, datas } = useProductsStore();
//     const [cart, setCart] = useState<string[]>([]);

//     useEffect(() => {
//         getData();
//         const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//         setCart(storedCart);
//     }, [getData]);

//     // const handleCartToggle = (productId: string) => {
//     //     let updatedCart;
//     //     if (cart.includes(productId)) {
//     //         updatedCart = cart.filter(id => id !== productId);
//     //         toast.error("Bu maxsulot muvaffaqiyatli cartdan o'chirildi");
//     //     } else {
//     //         updatedCart = [...cart, productId];
//     //         toast.success("Bu maxsulot muvaffaqiyatli cart ga qo'shildi");
//     //     }
//     //     setCart(updatedCart);
//     //     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     // };


//     const handleCartToggle = (productId: string) => {
//         let updatedCart;
//         if (cart.includes(productId)) {
//             updatedCart = cart.filter(id => id !== productId);
//             alert("Bu maxsulot muvaffaqiyatli cartdan o'chirildi");

//             // toast.error("Bu maxsulot muvaffaqiyatli cartdan o'chirildi");


//             // Notification({ title: "Bu maxsulot muvaffaqiyatli cartdan o'chirildi", type: "error" });
//         } else {
//             updatedCart = [...cart, productId];
//             alert("Bu maxsulot muvaffaqiyatli cart ga qo'shildi");

//             // toast.success("Bu maxsulot muvaffaqiyatli cart ga qo'shildi");
//             // Notification({ title: "Bu maxsulot muvaffaqiyatli cart ga qo'shildi", type: "default" });
//         }
//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     return (
//         <section className='first_product'>
//             <div className='first_card'>
//                 {
//                     datas?.map(product => (
//                         <div key={product._id}>


//                             <Link href={`/single/${product._id}`}>
//                                 <Image
//                                     className='card_img'
//                                     src={product.urls[0]}
//                                     width={290}
//                                     height={440}
//                                     alt={product.title}
//                                 />
//                             </Link>
//                             <h2 className='card_title'>{product.title}</h2>
//                             <div className='twos'>
//                                 <Image
//                                     src={Stars}
//                                     width={104}
//                                     height={18}
//                                     alt="Stars"
//                                 />
//                                 <p className='span_number'>{product.rating}</p>
//                             </div>
//                             <p className='cost'>${product.price}</p>

//                             <div className='like_icon'>
//                             <HeartOutlined />
//                             </div>
//                             <button
//                                 className='to_cart'
//                                 onClick={() => handleCartToggle(product._id)}
//                             >
//                                 {cart.includes(product._id) ? "Remove Cart" : "To Cart"}
//                             </button>
//                         </div>
//                     ))
//                 }
//             </div>
//         </section>

//     );
// };

// export default Card;

// "use client";
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import useProductsStore from '../../../../store/products';
// import "./style.scss";
// import Stars from "../../../assets/stars.svg";
// import { HeartOutlined, HeartFilled } from '@ant-design/icons'; // Import both icons
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Card = ({product}: any) => {
    

//     console.log(product);
    
//     const { getData, datas } = useProductsStore();
//     const [cart, setCart] = useState<string[]>([]);
//     const [likedProducts, setLikedProducts] = useState<string[]>([]);

//     useEffect(() => {
//         getData();
//         const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//         setCart(storedCart);

//         const storedLikes = JSON.parse(localStorage.getItem('likedProducts') || '[]');
//         setLikedProducts(storedLikes);
//     }, [getData]);

//     const handleCartToggle = (productId: string) => {
//         let updatedCart;
//         if (cart.includes(productId)) {
//             updatedCart = cart.filter(id => id !== productId);
//             alert("Bu maxsulot muvaffaqiyatli cartdan o'chirildi");
//         } else {
//             updatedCart = [...cart, productId];
//             alert("Bu maxsulot muvaffaqiyatli cart ga qo'shildi");
//         }
//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     const handleLikeToggle = (productId: string) => {
//         let updatedLikes;
//         if (likedProducts.includes(productId)) {
//             updatedLikes = likedProducts.filter(id => id !== productId);
//             alert("Bu maxsulot muvaffaqiyatli likedan o'chirildi");

//             // Optionally show a message
//             // toast.info("Product removed from favorites");
//         } else {
//             updatedLikes = [...likedProducts, productId];
//             alert("Bu maxsulot muvaffaqiyatli likega qo'shildi");

//             // Optionally show a message
//             // toast.success("Product added to favorites");
//         }
//         setLikedProducts(updatedLikes);
//         localStorage.setItem('likedProducts', JSON.stringify(updatedLikes));
//     };

//     return (
//         <section className='first_product'>
//             <ToastContainer />
//             <div className='first_card'>
//                 {/* {
//                     datas?.map(product => ( */}
//                         <div>
//                             <Link href={`single/${product?._id}`} >
//                                 <Image
//                                     className='card_img'
//                                     src={product?.urls[0]}
//                                     width={290}
//                                     height={440}
//                                     alt={product?.title}
//                                 />
//                             </Link>
//                             <h2 className='card_title'>{product?.title}</h2>
//                             <div className='twos'>
//                                 <Image
//                                     src={Stars}
//                                     width={104}
//                                     height={18}
//                                     alt="Stars"
//                                 />
//                                 <p className='span_number'>{product?.rating}</p>
//                             </div>
//                             <p className='cost'>${product?.price}</p>

//                             <div className='like_icon'>
//                                 {likedProducts.includes(product?._id) ? (
//                                     <HeartFilled
//                                         onClick={() => handleLikeToggle(product?._id)}
//                                         style={{ color: 'red' }}
//                                     />
//                                 ) : (
//                                     <HeartOutlined
//                                         onClick={() => handleLikeToggle(product?._id)}
//                                     />
//                                 )}
//                             </div>
//                             <button
//                                 className='to_cart'
//                                 onClick={() => handleCartToggle(product?._id)}
//                             >
//                                 {cart.includes(product?._id) ? "Remove Cart" : "To Cart"}
//                             </button>
//                         </div>
//                     {/* ))
//                 } */}
//             </div>
//         </section>
//     );
// };

// export default Card;

"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useProductsStore from '../../../../store/products';
import "./style.scss";
import Stars from "../../../assets/stars.svg";
import { HeartOutlined, HeartFilled } from '@ant-design/icons'; // Import both icons
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ product }: any) => {
    const { getData, datas } = useProductsStore();
    const [cart, setCart] = useState<string[]>([]);
    const [likedProducts, setLikedProducts] = useState<string[]>([]);

    useEffect(() => {
        getData();
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(storedCart);

        const storedLikes = JSON.parse(localStorage.getItem('likedProducts') || '[]');
        setLikedProducts(storedLikes);
    }, [getData]);

    const handleCartToggle = (productId: string) => {
        let updatedCart;
        if (cart.includes(productId)) {
            updatedCart = cart.filter(id => id !== productId);
            alert("Bu maxsulot muvaffaqiyatli cartdan o'chirildi");
        } else {
            updatedCart = [...cart, productId];
            alert("Bu maxsulot muvaffaqiyatli cart ga qo'shildi");
        }
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleLikeToggle = (productId: string) => {
        let updatedLikes;
        if (likedProducts.includes(productId)) {
            updatedLikes = likedProducts.filter(id => id !== productId);
            alert("Bu maxsulot muvaffaqiyatli likedan o'chirildi");
        } else {
            updatedLikes = [...likedProducts, productId];
            alert("Bu maxsulot muvaffaqiyatli likega qo'shildi");
        }
        setLikedProducts(updatedLikes);
        localStorage.setItem('likedProducts', JSON.stringify(updatedLikes));
    };

    const truncateTitle = (title: string) => {
        return title.length > 20 ? `${title.substring(0, 20)}...` : title;
    };

    return (
        <section className='first_product'>
            <ToastContainer />
            <div className='first_card'>
                <div>
                    <Link href={`single/${product?._id}`} >
                        <Image
                            className='card_img'
                            src={product?.urls[0]}
                            width={290}
                            height={440}
                            alt={product?.title}
                        />
                    </Link>
                    <h2 className='card_title'>{truncateTitle(product?.title)}</h2>
                    <div className='twos'>
                        <Image
                            src={Stars}
                            width={104}
                            height={18}
                            alt="Stars"
                        />
                        <p className='span_number'>{product?.rating}</p>
                    </div>
                    <p className='cost'>${product?.price}</p>

                    <div className='like_icon'>
                        {likedProducts.includes(product?._id) ? (
                            <HeartFilled
                                onClick={() => handleLikeToggle(product?._id)}
                                style={{ color: 'red' }}
                            />
                        ) : (
                            <HeartOutlined
                                onClick={() => handleLikeToggle(product?._id)}
                            />
                        )}
                    </div>
                    <button
                        className='to_cart'
                        onClick={() => handleCartToggle(product?._id)}
                    >
                        {cart.includes(product?._id) ? "Remove Cart" : "To Cart"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Card;









