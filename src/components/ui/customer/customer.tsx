import Image from 'next/image'
import React from 'react'
import Rating from "../../../assets/stars.svg"
import Check from "../../../assets/check_mark.svg"
import "./style.scss"

const customer = () => {
    return (
        <div className=''>
            <div className='first_custom_card'>
                <Image
                    src={Rating}
                    width={138}
                    height={22}
                    alt="Picture of the author"
                />

                <div className='checks'>
                    <h2 className='check_title'>Sarah M.</h2>
                    <div>
                        <Image
                            src={Check}
                            width={24}
                            height={24}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                <p className='first_text'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
            </div>
        </div>
    )
}

export default customer