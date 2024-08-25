import React from 'react'
import Image from "next/image"
import Logo from "../../assets/logo.png"
import Search from "../ui/search/search"
import Korzina from "../../assets/korzina.svg"
import User from "../../assets/user.svg"
import Link from "next/link"
import Menu from "../../assets/menu.svg"
import SearchIcon from "../../assets/search_icon.svg"

import "./style.scss";

const header = () => {
  return (
    <>
      <header className='header'>
        <div className='first_header'>
          <h2 className='fisrt_title'>Sign up and get 20% off to your first order. Sign Up Now</h2>

        </div>
        <div className="containers">

          <div className='flex items-center gap-[100px]'>
            <div className='second_header'>

              <div className='all_mobile_icons'>

                <div className='first_icons'>
                <div className='menu'>
                  <Image
                    src={Menu}
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />

                </div>
                <div className='mobile_logo'>
                  <Image
                    src={Logo}
                    width={126}
                    height={18}
                    alt="Picture of the author"
                  />

                </div>

                </div>

                <div className='third_icons'>
                <div className='search_icn'>
                  <Image
                    src={SearchIcon}
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />

                </div>

                <div className='korzina'>
                  <Image
                    src={Korzina}
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />

                </div>

                <div className='user'>
                  <Image
                    src={User}
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                </div>

                </div>


              </div>

              <div className='all'>
                <Link href="/">
                  <div className='logo'>
                    <Image
                      src={Logo}
                      width={160}
                      height={22}
                      alt="Picture of the author"
                    />
                  </div>
                </Link>


                <div className='all_links'>
                  <div className='links1'>
                    <li className='links_title'>
                      <Link href="/korzina">
                        Cart
                      </Link>
                    </li>
                      <Link href="/casual">
                    <li className='links_title'>
                        Casual
                    </li>
                      </Link> 
                    <li className='links_title'>
                      <Link href="/">
                        New Arrivals
                      </Link>
                    </li>
                  </div>

                  <div className='links2'>
                    <li className='links_title2'>
                      <Link href="/">
                        Brands
                      </Link>
                    </li>

                  </div>
                </div>
              </div>

            </div>

            <div className='flex items-center gap-[40px] pt-[40px]'>
              <div className='search'>
                <Search />
              </div>

              <div className='icons'>
                <Link href="/korzina">
                  <div>
                    <Image
                      src={Korzina}
                      width={24}
                      height={24}
                      alt="Picture of the author"
                    />
                  </div>
                </Link>

                <Link href="/singin">
                  <div>
                    <Image
                      src={User}
                      width={24}
                      height={24}
                      alt="Picture of the author"
                    />
                  </div>
                </Link>

              </div>
            </div>
          </div>


        </div>
      </header>
    </>
  )
}

export default header