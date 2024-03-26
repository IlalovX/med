/// <reference types="vite-plugin-svgr/client" />
import Local from "../../assets/svgs/footer/location.svg?react";
import Call from "../../assets/svgs/footer/call-calling.svg?react";
import Phone from "../../assets/svgs/footer/buildings.svg?react";
import SMS from "../../assets/svgs/footer/sms.svg?react";
import Telegram from "../../assets/svgs/footer/telegram.svg?react";
import Instagram from "../../assets/svgs/footer/instagram.svg?react";
import Whatsapp from "../../assets/svgs/footer/whatsapp.svg?react";
import Facebook from "../../assets/svgs/footer/facebook.svg?react";
import Logo from "../../assets/images/logo_Institut.png";
function Footer() {
  return (
    <div className=" bg-black py-5 text-white">
      <section className="container mx-auto flex space-x-32 ">
        <img src={Logo} className="h-[82px]" />
        <div className="flex gap-x-16">
          <div className="space-y-3">
            <h1 className="text-2xl">Наши контакты</h1>
            <p className="flex space-x-5">
              <Local className="w-[24px] h-[24px]" />
              <span>A.Dosnazarov 108</span>
            </p>
            <p className="flex space-x-5">
              <Call className="w-[24px] h-[24px]" />
              <span>+99899 123 45 67</span>
            </p>
            <p className="flex space-x-5">
              <Phone className="w-[24px] h-[24px]" />
              <span>+99861 222 23 45</span>
            </p>
            <p className="flex space-x-5">
              <SMS className="w-[24px] h-[24px]" />
              <span>kmi@gmail.com</span>
            </p>
          </div>
          <div className="space-y-3">
            <h1 className="text-2xl">Социальные сети</h1>
            <p className="flex space-x-5">
              <Telegram className="w-[24px] h-[24px]" />
              <span>Telegram</span>
            </p>
            <p className="flex space-x-5">
              <Instagram className="w-[24px] h-[24px]" />
              <span>Instagram</span>
            </p>
            <p className="flex space-x-5">
              <Whatsapp className="w-[24px] h-[24px]" />
              <span>Whatsapp</span>
            </p>
            <p className="flex space-x-5">
              <Facebook className="w-[24px] h-[24px]" />
              <span>Facebook</span>
            </p>
          </div>
        </div>
      </section>
      <section className=" border-t-2 border-white mt-5 py-5">
        <div className="container mx-auto flex justify-between">
          <p>Все права защищены</p>
          <p>Copyright 2024 - Разработано в Bizler Group</p>
        </div>
      </section>
    </div>
  );
}

export default Footer;
