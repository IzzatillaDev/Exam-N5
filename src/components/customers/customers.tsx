import React from 'react'
import Image from 'next/image'
import Left from "../../assets/left_icon.svg"
import Rating from "../../assets/stars.svg"
import Right from "../../assets/right_icon.svg"
import Check from "../../assets/check_mark.svg"

import "./style.scss"

const customers = () => {
  return (
    <>
      <section className='customers'>
        <div className='containers'>
          <div className='icons'>
            <h2 className='customers_title'>OUR HAPPY CUSTOMERS</h2>
            <div className='arrow_icons'>
              <Image
                src={Left}
                width={24}
                height={24}
                alt="Picture of the author"
              />
              <Image
                src={Right}
                width={24}
                height={24}
                alt="Picture of the author"
              />
            </div>
          </div>

          <div className='customer_cards'>

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
            <div className='first_custom_card'>
              <Image
                src={Rating}
                width={138}
                height={22}
                alt="Picture of the author"
              />

              <div className='checks'>
                <h2 className='check_title'>Alex K.</h2>
                <div>
                  <Image
                    src={Check}
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                </div>
              </div>
              <p className='first_text'>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
            </div>
            <div className='first_custom_card'>
              <Image
                src={Rating}
                width={138}
                height={22}
                alt="Picture of the author"
              />

              <div className='checks'>
                <h2 className='check_title'>James L.</h2>
                <div>
                  <Image
                    src={Check}
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                </div>
              </div>
              <p className='first_text'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
            </div>

          </div>


        </div>

      </section>
    </>
  )
}

export default customers