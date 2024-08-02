import Image from "next/image";
import React from "react";
import {
  Home as HomeIcon,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  WhatsApp as WhatsAppIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
} from "@mui/icons-material";

export default function Index() {
  return (
    <footer className="w-full h-[50px]">
      <div className="relative top-2 bg-[#FBD029] w-full h-[20px]"></div>
      <div className="bg-[#1F1D14] flex flex-col w-full py-10 md:flex-row items-start gap-5 md:items-center md:justify-between px-[85px] md:px-[110px]">
        <div className="flex max-w-[70px] text-[20px] font-semibold gap-[11px] text-white">
          <Image
            src="/images/logo.svg"
            alt="Sport Market"
            width={50}
            height={50}
          />
          <h1 className="hover:text-[#FBD029] transition duration-300 cursor-pointer">
            Sport Market
          </h1>
        </div>
        <ul className="mb-9">
          <li className="hover:text-[#FBD029] transition duration-300 cursor-pointer  text-white font-bold text-[18px] mb-4 ">
            Контакты
          </li>
          <li className=" cursor-pointer text-white flex items-center gap-2 hover:text-[#FBD029] transition duration-300">
            <PhoneIcon />
            +998 (93) 241-31-61
          </li>
          <li className=" cursor-pointer text-white flex items-center gap-2 hover:text-[#FBD029] transition duration-300">
            <MailIcon />
            uabdullo55@gmail.com
          </li>
        </ul>
        <p className="text-white flex items-start gap-2 hover:text-[#FBD029] transition duration-300 cursor-pointer">
          <HomeIcon />
          Tashkent Sh. Chilonzor 9 mavze <br /> 41uy
        </p>
        <div>
          <p className="text-white font-semibold mb-3 flex flex-col items-center md:flex-row">
            Подписатся
          </p>
          <input
            type="text"
            placeholder="support@figma.com"
            className="block p-3 rounded-md w-[235px]"
          />
          <button className="rounded-md w-[235px] bg-yellow-400 mt-3 p-3 hover:bg-yellow-500 transition duration-300">
            Отправить
          </button>
          <div className="text-white text-[29px] flex items-center gap-4 mt-7">
            <InstagramIcon className="cursor-pointer hover:text-[#FBD029] transition duration-300 hover:scale-110" />
            <FacebookIcon className="cursor-pointer hover:text-[#FBD029] transition duration-300 hover:scale-110" />
            <WhatsAppIcon className="cursor-pointer hover:text-[#FBD029] transition duration-300 hover:scale-110" />
          </div>
        </div>
      </div>
      <div className="bg-[#1F1D14] w-full py-2 border-t-2 border-black flex flex-col md:flex-row items-center justify-between px-[110px]">
        <p className="text-[#7B7E86] text-[12px]">© 2024 All Rights Reserved</p>
        <ul className="flex items-center flex-col md:flex-row gap-5 text-[#7B7E86] text-[12px]">
          <li className="hover:text-white transition duration-300">
            Privacy Policy
          </li>
          <li className="hover:text-white transition duration-300">
            Terms of Use
          </li>
          <li className="hover:text-white transition duration-300">
            Sales and Refunds
          </li>
          <li className="hover:text-white transition duration-300">Legal</li>
          <li className="hover:text-white transition duration-300">Site Map</li>
        </ul>
      </div>
    </footer>
  );
}
