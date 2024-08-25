import React from 'react'
import "./style.scss"
import Image from 'next/image'
const styles = () => {
  return (
    <>
      <section className="arrivals">
        <div className="containers">
          <h2 className="arrivals_title">BROWSE BY DRESS STYLE</h2>

          <div className="products">
            <div className="product-item">
              <Image

                src="/gym.jpg"
                width={160}
                height={22}
                alt="Gym"
              />
              {/* <img src="casual.jpg" alt="Casual"> */}
              <div className="product-title">Casual</div>
            </div>
            <div className="product-item">
              <Image

                src="/gym.jpg"
                width={160}
                height={22}
                alt="Gym"
              />
              {/* <img src="formal.jpg" alt="Formal"> */}
              <div className="product-title">Formal</div>
            </div>
            <div className="product-item">
              <Image

                src="/gym.jpg"
                width={160}
                height={22}
                alt="Gym"
              />
              {/* <img src="party.jpg" alt="Party"> */}
              <div className="product-title">Party</div>
            </div>
            <div className="product-item">

              <Image

                src="/gym.jpg"
                width={160}
                height={22}
                alt="Gym"
              />
              {/* <Image src="gym.jpg" alt="Gym">
                <Image /> */}
              <div className="product-title">Gym</div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='styles'>
        <div className='containers'>
          <div className='style'>
            <h2 className='styles_title'>BROWSE BY DRESS STYLE</h2>

            <div className='first_section'>
            <div className='mini_first_card'>
              <h2 className='mini_title'>Casual</h2>
            </div>

            <div className='mini_second_card'>
              <h2 className='mini_second_title'>Formal</h2>
            </div>

            </div>



          </div>

        </div>


      </section> */}
    </>
  )
}

export default styles
