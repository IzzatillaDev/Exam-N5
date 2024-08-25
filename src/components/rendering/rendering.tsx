'use client';
import React, { useState } from 'react';
import Stars from "../../assets/stars.svg"
// import Container from "@/components/container";
// import SliderProducts from "@/components/single-product/slider-products";
import './style.scss';
import Image from 'next/image';
import Check from "../../assets/check_mark.svg"
import More from "../../assets/more.svg"

const TabComponent: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Rating & Reviews');

    const renderContent = () => {
        switch (activeTab) {
            case 'Product Details':
                return (
                    <>
                        <h1 className='text-[32px] font-bold mb-6'>Product Details</h1>
                        <div className='flex items-center gap-5'>
                            <div>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                            <div>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                        </div>
                    </>
                );
            case 'Rating & Reviews':
                return (
                    <>
                        <div className='revies'>
                            <h2 className='revies_title'>All Reviews</h2>
                            <span className='revies_num'>(451)</span>
                        </div>

                        <div className='cards_rev'>
                            <div className='review_card'>
                                <div className='more'>
                                    <Image
                                        src={Stars}
                                        width={127}
                                        height={22}
                                        alt="Picture of the author"
                                    />

                                    <Image
                                        src={More}
                                        width={24}
                                        height={24}
                                        alt="Picture of the author"
                                    />

                                </div>

                                <div className='checks'>
                                    <h2 className='samantha'>Samantha D.</h2>
                                    <Image
                                        src={Check}
                                        width={24}
                                        height={24}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div>
                                    <p className='check_tetxs'>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                                    <p className='data'>Posted on August 14, 2023</p>
                                </div>
                            </div>

                            <div className='review_card'>
                                <div className='more'>
                                    <Image
                                        src={Stars}
                                        width={127}
                                        height={22}
                                        alt="Picture of the author"
                                    />

                                    <Image
                                        src={More}
                                        width={24}
                                        height={24}
                                        alt="Picture of the author"
                                    />

                                </div>

                                <div className='checks'>
                                    <h2 className='samantha'>Samantha D.</h2>
                                    <Image
                                        src={Check}
                                        width={24}
                                        height={24}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div>
                                    <p className='check_tetxs'>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                                    <p className='data'>Posted on August 14, 2023</p>
                                </div>
                            </div>
                        </div>
                        <div className='cards_rev'>
                            <div className='review_card'>
                                <div className='more'>
                                    <Image
                                        src={Stars}
                                        width={127}
                                        height={22}
                                        alt="Picture of the author"
                                    />

                                    <Image
                                        src={More}
                                        width={24}
                                        height={24}
                                        alt="Picture of the author"
                                    />

                                </div>

                                <div className='checks'>
                                    <h2 className='samantha'>Samantha D.</h2>
                                    <Image
                                        src={Check}
                                        width={24}
                                        height={24}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div>
                                    <p className='check_tetxs'>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                                    <p className='data'>Posted on August 14, 2023</p>
                                </div>
                            </div>

                            <div className='review_card'>
                                <div className='more'>
                                    <Image
                                        src={Stars}
                                        width={127}
                                        height={22}
                                        alt="Picture of the author"
                                    />

                                    <Image
                                        src={More}
                                        width={24}
                                        height={24}
                                        alt="Picture of the author"
                                    />

                                </div>

                                <div className='checks'>
                                    <h2 className='samantha'>Samantha D.</h2>
                                    <Image
                                        src={Check}
                                        width={24}
                                        height={24}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div>
                                    <p className='check_tetxs'>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                                    <p className='data'>Posted on August 14, 2023</p>
                                </div>
                            </div>
                        </div>
                        <div className='cards_rev'>
                            <div className='review_card'>
                                <div className='more'>
                                    <Image
                                        src={Stars}
                                        width={127}
                                        height={22}
                                        alt="Picture of the author"
                                    />

                                    <Image
                                        src={More}
                                        width={24}
                                        height={24}
                                        alt="Picture of the author"
                                    />

                                </div>

                                <div className='checks'>
                                    <h2 className='samantha'>Samantha D.</h2>
                                    <Image
                                        src={Check}
                                        width={24}
                                        height={24}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div>
                                    <p className='check_tetxs'>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                                    <p className='data'>Posted on August 14, 2023</p>
                                </div>
                            </div>

                            <div className='review_card'>
                                <div className='more'>
                                    <Image
                                        src={Stars}
                                        width={127}
                                        height={22}
                                        alt="Picture of the author"
                                    />

                                    <Image
                                        src={More}
                                        width={24}
                                        height={24}
                                        alt="Picture of the author"
                                    />

                                </div>

                                <div className='checks'>
                                    <h2 className='samantha'>Samantha D.</h2>
                                    <Image
                                        src={Check}
                                        width={24}
                                        height={24}
                                        alt="Picture of the author"
                                    />
                                </div>

                                <div>
                                    <p className='check_tetxs'>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                                    <p className='data'>Posted on August 14, 2023</p>
                                </div>
                            </div>
                        </div>


                    </>

                );
            case 'FAQs':
                return (
                    <>
                        <h2 className='text-[32px] font-bold mb-6'>FAQs</h2>
                        <div className='flex items-center gap-5'>
                            <div>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                            <div>
                                <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                        </div>
                    </>
                );
            // case 'kafolatlar':
            //     return (
            //         <>
            //             <h2 className='text-[32px] font-bold mb-6'>Tovarlarga kafolatlar</h2>
            //             <div className='flex items-center gap-5'>
            //                 <div>
            //                     <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            //                     <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            //                 </div>
            //                 <div>
            //                     <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            //                     <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            //                 </div>
            //             </div>
            //         </>
            //     );
            // case 'tolov':
            // return (
            //     <>
            //         <h2 className='text-[32px] font-bold mb-6'>To'lov usullari</h2>
            //         <div className='flex items-center justify-between'>
            //             <div className='w-[560px]'>

            //                 <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            //                 <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            //             </div>
            //             <div className='w-[560px]'>
            //                 <p className='mb-5 text-[18px]'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            //                 <p className='text-[18px]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            //             </div>
            //         </div>
            //     </>
            // );
            default:
                return null;
        }
    };

    return (
        // <Container>
        <div className=''>
            <div className="mt-[50px]">
                <div className="tabs">
                    <button
                        className={`tab-button ${activeTab === 'Product Details' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Product Details')}
                    >
                        Product Details
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'Rating & Reviews' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Rating & Reviews')}
                    >
                        Rating & Reviews
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'FAQs' ? 'active' : ''}`}
                        onClick={() => setActiveTab('FAQs')}
                    >
                        FAQs
                    </button>
                    {/* <button
                        className={`tab-button ${activeTab === 'kafolatlar' ? 'active' : ''}`}
                        onClick={() => setActiveTab('kafolatlar')}
                    >
                        Tovarlarga kafolatlar
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'tolov' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tolov')}
                    >
                        To'lov usullari
                    </button> */}
                </div>
                <div className="">
                    {renderContent()}
                </div>
            </div>
        </div>
        // <h1 className='text-[24px] font-semibold mt-5 mb-6'>Aksiyadagi mahsulotlar</h1>
        // <SliderProducts/>
        // </Container>
    );
};

export default TabComponent;

