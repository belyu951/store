import React from 'react'

//импорт стилей
import './footer.scss'

//импорт иконок
import { FaInstagramSquare } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <div className='footer'>

        <div className="footer__logoStore">
            <div className="logoStore__logo"><span className="logoStore__logoName">хаус Shop</span></div>
        </div>

        <div className="footer__connection">
            <div className="connection__webSite">
            <FaInstagramSquare className='webSite__insta'/>
            <FaVk className='webSite__vk'/>
            <IoLogoWhatsapp className='webSite__whats'/>
            </div>
            <div className="connection__contact">
                <span className='contact__phone'><FaPhoneVolume className='contact__phoneSvg' /> +7(999) 999 99 99</span>
                <span className='contact__email'><IoIosMail className='contact__emailSvg'/> info@stageboxbrand.ru</span>
            </div>
        </div>

        <div className="footer__informationStore">
            <span className="informationStore info">Доставка</span>
            <span className="informationStore info">Гарантии</span>
            <span className="informationStore info">Таблица размеров</span>
            <span className="informationStore info">Обмен и возврат</span>
            <span className="informationStore info">Вопросы и ответы</span>
        </div>

    </div>
  )
}

export default Footer