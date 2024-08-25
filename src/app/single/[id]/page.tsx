"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import SingleImage1 from "../../../assets/single_image1.svg"
import SingleImage2 from "../../../assets/single_image2.svg"
import SingleImage3 from "../../../assets/single_image3.svg"
import SingleImage from "../../../assets/single_image.svg"
import FirstColor from "../../../assets/first_color.svg"
import Stars from "../../../assets/stars.svg"
import SecondColor from "../../../assets/second_color.svg"
import ThirdColor from "../../../assets/third_color.svg"
import Rendering from "../../../components/rendering/rendering"
import Card from "../../../components/ui/card/card"
import Offers from "../../../components/offers/offers"
import Frame from "../../../assets/frame.svg"
import useSingleProductsStore from '../../../../store/single_products'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import "./style.scss"

const page = () => {
    const { getData, datas} = useSingleProductsStore()
    const {id} = useParams()
    // const id = localStorage.getItem("product_id")

    console.log(datas)

    useEffect(() => {
        getData(id)
    }, [])

    console.log(datas)
    return (
        <>
            <div className='containers'>
                <Link href="/">
                    <div className='back_too'>
                        <h2 className='back'>Home</h2>
                        <Image
                            src={Frame}
                            width={16}
                            height={16}
                            alt="Picture of the author"
                        />
                    </div>
                </Link>
                <div className='all_single_pg'>
                    <div className='images_single'>
                        <div className='image_1'>
                            <Image
                                src={SingleImage1}
                                width={152}
                                height={167}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className='image_2'>
                            <Image
                                src={SingleImage2}
                                width={152}
                                height={168}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className='image_3'>
                            <Image
                                src={SingleImage3}
                                width={152}
                                height={167}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>

                    <div className='SingleImage'>
                        <Image
                            src={SingleImage}
                            width={444}
                            height={530}
                            alt="Picture of the author"
                        />
                    </div>

                    <div className='single_titles'>

                        <div className='single_title'>{datas?.title}</div>
                        <div className='stars_bg'>
                            <Image
                                src={Stars}
                                width={139}
                                height={24}
                                alt="Picture of the author"
                            />
                            <p className='dis_cost'>4.5/5</p>
                        </div>

                        <div className='costs'>
                            <span className='cost_1'>{datas?.price}</span>
                            <span className='cost_2'>$300</span>
                            <span className='dis_count'>-40%</span>
                        </div>


                        <div className='dist_texts'>
                            <p className='dis_text'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                        </div>

                        <div className='colors'>
                            <h2 className='color_title'>{datas?.title}</h2>
                            <div className='mini_colors'>
                                <Image
                                    src={FirstColor}
                                    width={37}
                                    height={37}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src={SecondColor}
                                    width={37}
                                    height={37}
                                    alt="Picture of the author"
                                />
                                <Image
                                    src={ThirdColor}
                                    width={37}
                                    height={37}
                                    alt="Picture of the author"
                                />
                            </div>

                        </div>

                        <div className='choose_size'>
                            <h2 className='size_title'>Choose Size</h2>
                            <div className='btns'>
                                <button className='btn_size'>Small</button>
                                <button className='btn_size'>Medium</button>
                                <button className='btn_size_click'>Large</button>
                                <button className='btn_size'>X-Large</button>

                            </div>

                        </div>

                        {/* <div className='btn_dec_inc'>
                            <button className='increament'>-</button>
                            <span>1</span>
                            <button className='decrement'>+</button>
                        </div> */}
                        <button className='add_btn'>
                            Add to Cart
                        </button>
                    </div>

                </div>
                <div >
                    <Rendering />

                </div>

                <div className='btn_rev_more'>

                    <button className='more_revies'>Load More Reviews</button>
                </div>

                <div>
                    <h2 className='also_like'>You might also like</h2>
                </div>
                <div className='more_cards'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

                {/* <div> */}
                {/* </div> */}

            </div>
            <Offers />


        </>
    )
}

export default page
