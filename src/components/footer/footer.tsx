import React from 'react'
import Logo from "../../assets/logo.png"
import Socials from "../../assets/socials.svg"
import Visa from "../../assets/visa.svg"
import Badge from "../../assets/badge.svg"
import Paypal from '../../assets/paypal.svg'
import Pay from "../../assets/pay.svg"
import GooglePay from "../../assets/googlepay.svg"


import "./style.scss"
import Image from 'next/image'

const footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='containers'>
          <div className='footer_bottom'>
            <div>
              <Image
                src={Logo}
                width={167}
                height={23}
                alt="Picture of the author"
              />
              <p className='footer_text'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>


              <div className='socialss'>
                <Image
                  src={Socials}
                  width={148}
                  height={28}
                  alt="Picture of the author"
                />
              </div>

            </div>

            <div>
              <h2 className='company'>Company</h2>
              <p className='about'>About</p>
              <p className='about'>Features</p>
              <p className='about'>Works</p>
              <p className='about'>Career  </p>
            </div>

            <div>
              <h2 className='help'>Help</h2>
              <p className='custom'>Customer Support</p>
              <p className='custom'>Delivery Details</p>
              <p className='custom'>Terms & Conditions</p>
              <p className='custom'>Privacy Policy</p>
            </div>

            <div>
              <h2 className='help'>FAQ</h2>
              <p className='custom'>Account</p>
              <p className='custom'>Manage Deliveries</p>
              <p className='custom'>Orders</p>
              <p className='custom'>Payments</p>
            </div>

            <div>
              <h2 className='help'>Resources</h2>
              <p className='custom'>Free eBooks</p>
              <p className='custom'>Development Tutorial</p>
              <p className='custom'>How to - Blog</p>
              <p className='custom'>Youtube Playlist</p>
            </div>
          </div>

          <div className='net_btm'>
            <h2 className='btm_text'>Shop.co © 2000-2023, All Rights Reserved</h2>
            <div className='net_cards'>
            <Image
                src={Visa}
                width={46}
                height={30}
                alt="Picture of the author"
              />
            <Image
                src={Badge}
                width={46}
                height={30}
                alt="Picture of the author"
              />
            <Image
                src={Paypal}
                width={46}
                height={30}
                alt="Picture of the author"
              />
            <Image
                src={Pay}
                width={46}
                height={30}
                alt="Picture of the author"
              />
            <Image
                src={GooglePay}
                width={46}
                height={30}
                alt="Picture of the author"
              />
            </div>
            <div>

            </div>
          </div>



        </div>



      </footer>
    </>
  )
}

export default footer