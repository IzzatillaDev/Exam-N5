import React from 'react'
import "./style.scss"
import Image from 'next/image'
import Versage from "../../assets/versage.svg"
import Znba from "../../assets/ZNBA.svg"
import Gucci from "../../assets/gucci.svg"
import Prada from "../../assets/prada.svg"
import Calvin from "../../assets/calvin.svg"

const brands = () => {
    return (
        <>
            <section className='brands'>
                <div className='containers'>

                   <div className='all_brands'>
                   <div>
                        <Image
                            src={Versage}
                            width={166}
                            height={33}
                            alt="Picture of the author"
                        />
                    </div>

                    <div>
                        <Image
                            src={Znba}
                            width={91}
                            height={38}
                            alt="Picture of the author"
                        />
                    </div>

                    <div>
                        <Image
                            src={Gucci}
                            width={156}
                            height={36}
                            alt="Picture of the author"
                        />
                    </div>
                    <div>
                        <Image
                            src={Prada}
                            width={194}
                            height={32}
                            alt="Picture of the author"
                        />
                    </div>
                    <div>
                        <Image
                            src={Calvin}
                            width={206}
                            height={33}
                            alt="Picture of the author"
                        />
                    </div>
                   </div>


                </div>

            </section>
        </>
    )
}

export default brands