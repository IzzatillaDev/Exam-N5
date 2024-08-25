import React from 'react'
import Right from "../../assets/right_icon.svg"
import Image from 'next/image'
import Card from "../../assets/card_image.svg"
import Delete from "../../assets/delete.svg"
import Offers from "../../components/offers/offers"
import "./style.scss"

const page = () => {
    return (
        <>
            <div className='containers'>
                <div className='cart_all_botm'>
                    <h2 className='cart_btm'>Home</h2>
                    <Image
                        src={Right}
                        width={24}
                        height={24}
                        alt="Picture of the author"
                    />
                    <div>
                        <h2 className='cart'>Cart</h2>
                    </div>
                </div>

                <div>
                    <h2 className='cart_title'>Your cart</h2>
                </div>

                <div className='korzina_checked'>
                    <div className='all_carts'>
                        <div className='first_cart'>
                            <Image
                                src={Card}
                                width={125}
                                height={187}
                                alt="Picture of the author"
                            />
                            <div className='cart_center'>
                                <div className='del'>
                                    <h2 className='cart_center_title'>Gradient Graphic T-shirt</h2>
                                    <Image
                                        className='delete_btn'
                                        src={Delete}
                                        width={24}
                                        height={24}
                                        alt="Picture of the author"
                                    />

                                </div>
                                <p className='size'>Size: Large</p>
                                <p className='color'>Color: White</p>

                                <p className='cart_cost'>$145</p>

                            </div>


                        </div>
                        <div className='second_cart'>
                            <Image
                                src={Card}
                                width={125}
                                height={187}
                                alt="Picture of the author"
                            />
                            <div className='cart_center'>
                                <div className='del'>
                                    <h2 className='cart_center_title'>Gradient Graphic T-shirt</h2>
                                    <Image
                                        className='delete_btn'
                                        src={Delete}
                                        width={24}
                                        height={24}
                                        alt="Picture of the author"
                                    />

                                </div>
                                <p className='size'>Size: Large</p>
                                <p className='color'>Color: White</p>

                                <p className='cart_cost'>$145</p>

                            </div>


                        </div>
                        <div className='third_cart'>
                            <Image
                                src={Card}
                                width={125}
                                height={187}
                                alt="Picture of the author"
                            />
                            <div className='cart_center'>
                                <div className='del'>
                                    <h2 className='cart_center_title'>Gradient Graphic T-shirt</h2>
                                    <Image
                                        className='delete_btn'
                                        src={Delete}
                                        width={24}
                                        height={24}
                                        alt="Picture of the author"
                                    />

                                </div>
                                <p className='size'>Size: Large</p>
                                <p className='color'>Color: White</p>

                                <p className='cart_cost'>$145</p>

                            </div>


                        </div>
                    </div>

                    <div className='order_sum'>
                        <h2 className='order_title'>Order Summary</h2>

                        <div className='all_total'>
                            <h2 className='sub_total'>Subtotal</h2>
                            <span className='sub_cost'>$565</span>
                        </div>

                        <div className='dis_count'>
                            <h2 className='dis_title'>Discount (-20%)</h2>
                            <span className='dis_cost'>-$113</span>
                        </div>

                        <div className='deliverys'>
                            <h2 className='delivery_title'>Delivery Fee</h2>
                            <span className='delivery_cost'>$15</span>
                        </div>

                        <div className='totals'>
                            <h2 className='total'>Total</h2>
                            <span className='all_total'>$467</span>
                        </div>

                        <div className='promo_btn'>
                            <button type="submit" className='promo_btns'>Add promo code</button>
                            <button className='apply_btn'>Apply</button>
                        </div>

                        <div className='checkout'>
                            <button className='checkout_btn'>Go to Checkout</button>

                        </div>

                    </div>

                </div>


            </div>

            <div>
                <Offers/>
            </div>
        </>
    )
}

export default page