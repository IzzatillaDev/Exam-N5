import React from 'react'
import Hero from "../components/hero/hero"
import Brands from "../components/brands/brands"
import Arrivals from "../components/arrivals/arrivals"
import Seeling from "../components/seeling/seeling"
import Styled from "../components/styled/styles"
import Customers from "../components/customers/customers"
import Offers from "../components/offers/offers"
import Swiper from "../components/swiper/page"

const page = () => {
  return (
    <div>
    <section>
      <Hero/>
    </section>

    <section>
      <Brands/>
    </section>

    <section>
      <Arrivals/>
    </section>

    <section>
      <Seeling/>
    </section>

    <section>
      <Styled/>
    </section>
    
    {/* <section>
      <Customers/>
    </section> */}
    <section>
      <Swiper/>
    </section>
 

    <section>
      <Offers/>
    </section>


    </div>
  )
}

export default page