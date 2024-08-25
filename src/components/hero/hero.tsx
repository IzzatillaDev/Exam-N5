import React from 'react'
import "./style.scss";
import Image from 'next/image';
import Hero from "../../assets/hero_bg.png"
import HeroBg from "../../assets/hero_bg.svg"

const hero = () => {
    return (
        <>
            <section className='hero'>
                <div className='containers'>
                    <div className='heros'>
                        <div>
                            <h3 className='hero_title'>FIND CLOTHES THAT MATCHES YOUR STYLE</h3>
                            <p className='hero_text'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                            <button className='hero_btn'>
                                Shop Now
                            </button>

                            <div className='buttons_all'>

                                <div className='first_btn'>
                                    <span className='number'>200+</span>
                                    <p className='text'>International Brands</p>
                                </div>

                                <div className='first_btn'>
                                    <span className='number'>2,000+</span>
                                    <p className='text'>International Brands</p>
                                </div>

                                <div className='first_btn'>
                                    <span className='number'>30,000+</span>
                                    <p className='text'>International Brands</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default hero