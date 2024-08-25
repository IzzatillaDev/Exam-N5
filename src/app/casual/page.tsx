import React from 'react'
import Back from "../../assets/right_icon.svg"
import Image from 'next/image'
import Filters from "../../assets/filters.svg"
import "./style.scss"
import Next from "../../assets/right_icon.svg"
import Up from "../../assets/up.svg"
import Link from 'next/link'
import Line from "../../assets/line.svg"
import Green from "../../assets/green.svg"
import Red from "../../assets/red.svg"
import Yellow from "../../assets/yellow.svg"
import Brown from "../../assets/brown.svg"
import Blue from "../../assets/blue.svg"
import CheckColor from "../../assets/check_color.svg"
import Purple from "../../assets/purple.svg"
import Pink from "../../assets/pink.svg"
import White from "../../assets/white.svg"
import Black from "../../assets/black.svg"
import Right from "../../assets/right_icon.svg"
import Card from "../../components/ui/card/card"
import Offers from "../../components/offers/offers"

const page = () => {
  return (
    <div className='Casual'>
      <div className='containers'>
        <div className='casual_all'>
          <Link href="/">
            <div className='casuals'>
              <h2 className='casual_home'>Home</h2>
              <Image
                src={Back}
                width={16}
                height={16}
                alt="Picture of the author"
              />
            </div>
          </Link>

          <div>
            <h2 className='casual_title'>Casual</h2>
          </div>
        </div>

        <div className='all_cashs'>
          <div className='filter_cards'>
            <div className='filters'>
              <h2 className='filters_title'>Filters</h2>
              <Image
                src={Filters}
                width={24}
                height={24}
                alt="Picture of the author"
              />

            </div>

            <div className='first_clothe'>
              <h2 className='shirts'>T-shirts</h2>
              <Image
                src={Next}
                width={16}
                height={16}
                alt="Picture of the author"
              />
            </div>

            <div className='first_clothes'>
              <h2 className='shirts'>Shorts</h2>
              <Image
                src={Next}
                width={16}
                height={16}
                alt="Picture of the author"
              />
            </div>
            <div className='first_clothes'>
              <h2 className='shirts'>Shirts</h2>
              <Image
                src={Next}
                width={16}
                height={16}
                alt="Picture of the author"
              />
            </div>
            <div className='first_clothes'>
              <h2 className='shirts'>Hoodie</h2>
              <Image
                src={Next}
                width={16}
                height={16}
                alt="Picture of the author"
              />
            </div>
            <div className='first_clothes'>
              <h2 className='shirts'>Jeans</h2>
              <Image
                src={Next}
                width={16}
                height={16}
                alt="Picture of the author"
              />
            </div>

            <div className='price_up'>
              <h2 className='price'>Price</h2>
              <Image
                src={Up}
                width={16}
                height={16}
                alt="Picture of the author"
              />
            </div>

            <div className='line'>
              <Image
                src={Line}
                width={247}
                height={20}
                alt="Picture of the author"
              />
            </div>

            <div className='price_costs'>
              <span className='cos_nym'>$50</span>
              <span className='cos_nym'>$200</span>
            </div>

            <div className='colors_all'>
              <div className='color_up'>
                <h2 className='color_title'>Colors</h2>
                <Image
                  src={Up}
                  width={16}
                  height={16}
                  alt="Picture of the author"
                />

              </div>

              <div className='first_color'>
                <Image
                  src={Green}
                  width={37}
                  height={37}
                  alt="Picture of the author"
                />
                <Image
                  src={Red}
                  width={37}
                  height={37}
                  alt="Picture of the author"
                />
                <Image
                  src={Yellow}
                  width={37}
                  height={37}
                  alt="Picture of the author"
                />
                <Image
                  src={Brown}
                  width={37}
                  height={37}
                  alt="Picture of the author"
                />
                <Image
                  src={Blue}
                  width={37}
                  height={37}
                  alt="Picture of the author"
                />

              </div>

              <div className='second_color'>
                <Image
                  src={CheckColor}
                  width={37}
                  height={37}
                  alt="Picture of the author"
                />
                <Image
                  src={Purple}
                  width={37}
                  height={37}
                  alt="Picture of the author"
                />
                <Image
                  src={Pink}
                  width={37}
                  height={37}
                  alt="Picture of the author"
                />
                <Image
                  src={White}
                  width={37}
                  height={37}
                  alt="Picture of the author"
                />
                <Image
                  src={Black}
                  width={37}
                  height={37}
                  alt="Picture of the author"
                />

              </div>
            </div>


            <div className='size_section'>
              <div className='size'>
                <h2 className='price'>Size</h2>
                <Image
                  src={Up}
                  width={16}
                  height={16}
                  alt="Picture of the author"
                />
              </div>

              <div className='first_sizes'>
                <button className='first_size'>XX-Small</button>
                <button className='first_size'>X-Small</button>
              </div>
              <div className='second_sizes'>
                <button className='second_size'>Small</button>
                <button className='second_size'>Medium</button>
              </div>

              <div className='third_sizes'>
                <button className='third_size_1'>Large</button>
                <button className='third_size'>X-Large</button>
              </div>

              <div className='fourth_sizes'>
                <button className='fourth_size'>Small</button>
                <button className='fourth_size'>Medium</button>
              </div>

              <button className='fifth_size'>4X-Large</button>
            </div>

            <div className='dress_style'>
              <div className='drss_up'>
                <h2 className='dress_title'>Dress Style</h2>
                <Image
                  src={Up}
                  width={16}
                  height={16}
                  alt="Picture of the author"
                />

              </div>

              <div className='cas_dress_icon'>
                <h2 className='cas_dress'>Casual</h2>
                <Image
                  src={Right}
                  width={16}
                  height={16}
                  alt="Picture of the author"
                />
              </div>
              <div className='cas_dress_icon'>
                <h2 className='cas_dress'>Formal</h2>
                <Image
                  src={Right}
                  width={16}
                  height={16}
                  alt="Picture of the author"
                />
              </div>
              <div className='cas_dress_icon'>
                <h2 className='cas_dress'>Party</h2>
                <Image
                  src={Right}
                  width={16}
                  height={16}
                  alt="Picture of the author"
                />
              </div>
              <div className='cas_dress_icon'>
                <h2 className='cas_dress'>Gym</h2>
                <Image
                  src={Right}
                  width={16}
                  height={16}
                  alt="Picture of the author"
                />
              </div>

            </div>

            <button className='apply_btn'>Apply Filter</button>
          </div>


          <div>

          <div className='casual_type'>
            <h2 className='sort_cas'>Casual</h2>
              <p className='show_product'>Showing 1-10 of 100 Products</p>
          </div>

          <div className='products'>
            <Card/>
            <Card/>
            <Card/>
          </div>
          <div className='products'>
            <Card/>
            <Card/>
            <Card/>
          </div>
          <div className='products'>
            <Card/>
            <Card/>
            <Card/>
          </div>

          <div className='previos'>
            <button className='previos_btn'>Previous</button>
          </div>



          </div>
        </div>





      </div>
          <div>
            <Offers/>
          </div>
    </div>
  )
}

export default page