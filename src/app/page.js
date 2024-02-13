"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import WhyYouChooseUs from "@/components/WhyYouChooseUs";
import OurStudents from "@/components/OurStudents";
import Courses from "@/components/Courses";
import OurLocation from "@/components/OurLocation";
import FooterNav from "@/components/FooterNav";
import Chat from "@/components/Chat";
import AOS from "aos";
import "aos/dist/aos.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import { appWithTranslation } from 'next-i18next';

function Home() {
  useEffect(() => {
    AOS.init({
      offset: 50,
      delay: 100,
      duration: 600,
      easing: "ease-in-out-back",
      mirror: true,
    });
  }, []);

  return (
    <>
      <Header />
      <WhyYouChooseUs />
      <OurStudents />
      <Courses />
      <OurLocation />
      <FooterNav />
      <Chat />
    </>
  );
}

export default Home;
