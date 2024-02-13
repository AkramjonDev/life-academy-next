import React from "react";
import Navbar from "@/components/Navbar";
import HeaderImg from "../assets/images/header_img.png";
import Link from 'next/link';
import bc from "../assets/images/BC_img.webp";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: bc }}
      className="main-header bg-cover bg-center text-[#141024] dark:text-[#fff]"
    >
      <Navbar />
      <div className="header-container text-[#fff] flex flex-col md:flex-row justify-between containerOn mt-[50px] w-full h-auto">
        <div data-aos="fade-right">
          <div className="header-container-text max-md:pt-16">
            <div className="flex-center-text">
              <h1 className="font-bold text-center md:text-6xl mb-4 md:mt-20">
                <span className="font-medium">BIZ NAFAQAT</span> ILM ULASHAMIZ,{" "}
                <span className="font-medium">BALKI</span> INSONLAR HAYOTINI
                O'ZGARTIRAMIZ!
                <br /><br />
                <Link
                  href={
                    "https://docs.google.com/forms/d/1Q7b1OAsUyGKlM_prTfI-EOSHPqR1IsthbYB8PY5lJaM/viewform?edit_requested=true"
                  }
                >
                  <h1 className="btn btn-primary text-[#fff] text-[15px] w-[200px] h-[50px] md:text-[14px] md:w-[200px] md:h-[50px]">Birinchi darsga yozilish</h1>
                </Link>
              </h1>
            </div>
          </div>
        </div>
        <div className="backimg md:ml-8 mt-5">
          <div data-aos="fade-left"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
