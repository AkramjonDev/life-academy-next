import React from "react";
import CoursesEnglish from "../assets/images/courses-english.png";
import Arabic from "@/assets/images/arabic-teachers-xpats-1200x793.jpg"
import Korean from "@/assets/images/korean.webp"
import Russia from "@/assets/images/Russian-teacher.jpg"
import School from "@/assets/images/School.jpg"
import Math from "@/assets/images/Math.jpg"
import Link from 'next/link';
import Image from "next/image";
const Courses = () => {
  return (
    <div id="main-courses" className="main-courses containerOn">
      <h1
        data-aos="zoom-in"
        className="courses-title font-bold md:text-6xl mb-24 md:mt-20 sm:text-4xl text-5xl text-center"
      >
        O'zingizga mos keladigan kursni tanlang
      </h1>
      <div
        data-aos="fade-up"
        className="courses-cards flex justify-center items-center flex-wrap gap-12"
      >
        <div data-aos="fade-up" className="courses-card flex flex-col items-center p-8 rounded-2xl bg-[#fff] dark:bg-[#262449] mb-10">
          <Image className="mb-10" src={CoursesEnglish} />
          <h3 className="text-center font-bold text-5xl mb-6">Ingilis tili</h3>
          <div className="coureses-result flex justify-between mb-5 gap-12">
            <h4>IELTS</h4>
            <h4>CEFR</h4>
            <h4>SAT</h4>
          </div>
          <p className=" w-[320px] opacity-50 mb-6">
            Ingliz tilini o'rganing! Bizning ta'lim markazida Ingliz tili kurslari bilan sifatli ta'lim oling, va CEFR va IELTS imtihonlarida yuqori ballarni qolga kiriting !
          </p>
          <Link href={"https://docs.google.com/forms/d/1Q7b1OAsUyGKlM_prTfI-EOSHPqR1IsthbYB8PY5lJaM/viewform?edit_requested=true"} className="btn btn-primary text-[#fff] text-[15px] w-[200px] h-[50px] md:text-[14px] md:w-[200px] md:h-[50px]">
            <h1 className="btn btn-primary text-[#fff] text-[15px] w-[200px] h-[50px] md:text-[14px] md:w-[200px] md:h-[50px]">Ro'yxatdan o'tish</h1>
          </Link >
        </div>

        <div data-aos="fade-up" className="courses-card flex flex-col items-center p-8 rounded-2xl bg-[#fff] dark:bg-[#262449] mb-10">
          <Image className="mb-10 w-[320px] h-[208px] rounded-lg" src={Arabic} />
          <h3 className="text-center font-bold text-5xl mb-6">Arab tili</h3>
          <div className="coureses-result flex justify-between mb-5 gap-12">
            <h4>Grammatika</h4>
            <h4>CEFR</h4>
            <h4>So'zlashish</h4>
          </div>
          <p className="w-[320px] opacity-50 mb-8">
            Arab tilini o'rganing! Bizning ta'lim markazida Arab tili kurslari mavjud. Siz Arab tili bilimlaringizni oshirish yoki 0 dan o'rganishingiz mumkin
          </p>
          <Link href={"https://docs.google.com/forms/d/1Q7b1OAsUyGKlM_prTfI-EOSHPqR1IsthbYB8PY5lJaM/viewform?edit_requested=true"} >
            <h1 className="btn btn-primary text-[#fff] text-[15px] w-[200px] h-[50px] md:text-[14px] md:w-[200px] md:h-[50px]">Ro'yxatdan o'tish</h1>
          </Link >
        </div>

        <div data-aos="fade-up" className="courses-card flex flex-col items-center p-8 rounded-2xl bg-[#fff] dark:bg-[#262449] mb-10">
          <Image className="mb-10 w-[320px] h-[208px] rounded-lg" src={Korean} />
          <h3 className="text-center font-bold text-5xl mb-6">Koreys tili</h3>
          <div className="coureses-result flex justify-between mb-5 gap-12">
            <h4>Грамматика</h4>
            <h4>Topic</h4>
          </div>
          <p className=" w-[320px] opacity-50 mb-6 mt-5">
            Koreys tilini o'rganing! Bizning ta'lim markazida Koreys tili kurslari bilan, Koreys tilini xalqaro darajada o'rganishingiz mumkin
          </p>
          <Link href={"https://docs.google.com/forms/d/1Q7b1OAsUyGKlM_prTfI-EOSHPqR1IsthbYB8PY5lJaM/viewform?edit_requested=true"} >
            <h1 className="btn btn-primary text-[#fff] text-[15px] w-[200px] h-[50px] md:text-[14px] md:w-[200px] md:h-[50px]">Ro'yxatdan o'tish</h1>
          </Link >
        </div>

        <div data-aos="fade-up" className="courses-card flex flex-col items-center p-8 rounded-2xl bg-[#fff] dark:bg-[#262449] mb-10">
          <Image className="mb-10 w-[320px] h-[208px] rounded-lg" src={Russia} />
          <h3 className="text-center font-bold text-5xl mb-6">Rus tili</h3>
          <div className="coureses-result flex justify-between mb-5 gap-5">
            <h4>Grammatika</h4>
            <h4>So'zlashish</h4>
            <h4>Adabiyot</h4>
          </div>
          <p className=" w-[320px] opacity-50 mb-6">
            Rus tilini o'rganing! Bizning ta'lim markazida rus tili kurslari orqali, siz Rus tilini nazariy va amaliy ravishda o'rganasiz.
          </p>
          <Link href={"https://docs.google.com/forms/d/1Q7b1OAsUyGKlM_prTfI-EOSHPqR1IsthbYB8PY5lJaM/viewform?edit_requested=true"} >
            <h1 className="btn btn-primary text-[#fff] text-[15px] w-[200px] h-[50px] md:text-[14px] md:w-[200px] md:h-[50px]">Ro'yxatdan o'tish</h1>
          </Link >
        </div>
        <div data-aos="fade-up" className="courses-card flex flex-col flex-wrap items-center p-8 rounded-2xl bg-[#fff] dark:bg-[#262449] mb-10">
          <Image className="mb-10 w-[320px] h-[208px] rounded-lg" src={School} />
          <h3 className="text-center font-bold text-5xl mb-2">
            Prezident maktabiga <br /> tayyarlov
          </h3>
          <div className="coureses-result flex justify-between mb-3 gap-12">
          </div>
          <p className=" w-[320px] opacity-50 mb-4">
            Prezident maktabiga tayyorlaning! Bizning tal'im markazida yosh o'g'il-qizlarni prezident maktablariga tayyorlash kurslari yo'lga qoyilgan
          </p>
          <Link href={"https://docs.google.com/forms/d/1Q7b1OAsUyGKlM_prTfI-EOSHPqR1IsthbYB8PY5lJaM/viewform?edit_requested=true"} >
            <h1 className="btn btn-primary text-[#fff] text-[15px] w-[200px] h-[50px] md:text-[14px] md:w-[200px] md:h-[50px]">Ro'yxatdan o'tish</h1>
          </Link >
        </div>
        <div data-aos="fade-up" className="courses-card flex flex-col items-center p-8 rounded-2xl bg-[#fff] dark:bg-[#262449] mb-10">
          <Image className="mb-10 w-[320px] h-[208px] rounded-lg" src={Math} />
          <h3 className="text-center font-bold text-5xl mb-6">Matematika</h3>
          <div className="coureses-result flex justify-between mb-5 gap-12">
            <h4>DTM</h4>
            <h4>Mental arifmetika</h4>
          </div>
          <p className=" w-[320px] opacity-50 mb-6">
            Matematikani o'rganing! Bizning ta'lim markazida matematika kurslari orqali, sizning hisob-kitob qobiliyatlaringizni rivojlantiramiz.
          </p>
          <Link href={"https://docs.google.com/forms/d/1Q7b1OAsUyGKlM_prTfI-EOSHPqR1IsthbYB8PY5lJaM/viewform?edit_requested=true"} >
            <h1 className="btn btn-primary text-[#fff] text-[15px] w-[200px] h-[50px] md:text-[14px] md:w-[200px] md:h-[50px]">Ro'yxatdan o'tish</h1>
          </Link >
        </div>
      </div>
    </div>
  );
};

export default Courses;
