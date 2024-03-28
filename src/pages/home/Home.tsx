/// <reference types="vite-plugin-svgr/client" />

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Arrow from "../../assets/svgs/arrow-circle-right.svg?react";
import Send from "../../assets/svgs/send.svg?react";
import BgImg1 from "../../assets/images/bgHome1.png";
import BgImg2 from "../../assets/images/bgHome2.png";
import CabinetClassroom from "../../assets/images/cabinets/Classroom.png";
import CabinetLibrary from "../../assets/images/cabinets/Library.png";
import CabinetPractice from "../../assets/images/cabinets/Practice.png";
import CabinetGraduation from "../../assets/images/cabinets/Graduation.png";
import Faculty1 from "../../assets/images/faculty/Факультет фото.png";
import Faculty2 from "../../assets/images/faculty/Факультет фото (1).png";
import Local from "../../assets/images/local.png";

import { ADVERT, FILTERS_TYPE, NEWS } from "../../constans/data";

function Home() {
  const [advertActiveFilter, setAdvertActiveFilter] = useState("institute");
  const [advertFilterArray, setAdvertFilterArray] = useState(
    ADVERT.filter((item) => item.type === advertActiveFilter)
  );

  const handleChangeFilter = (filter: string) => {
    setAdvertActiveFilter(filter);
    setAdvertFilterArray(ADVERT.filter((item) => item.type === filter));
  };

  return (
    <>
      <section>
        <Swiper
          rewind={true}
          pagination={true}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={BgImg1} className="w-full h-[700px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={BgImg2} className="w-full h-[700px]" />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className=" bg-almost-red p-5">
        <div className="container mx-auto">
          <div className="flex flex-col gap-y-5 sm:flex-row justify-between mb-12">
            <h1 className="text-black text-3xl">Об институте</h1>
            <p className="text-white text-4xl w-[40%]">
              {`  Образование - не подготовка\n к жизни;\n Образование - это самая жизнь`}
            </p>
          </div>
          <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:gap-0  lg:items-end lg:justify-end sm:space-x-10 my-6">
            <img
              src={CabinetClassroom}
              className="sm:w-50 sm:h-80  lg:w-[400px] lg:h-[500px]"
            />
            <img
              src={CabinetLibrary}
              className="sm:w-50 sm:h-80  lg:w-[400px] lg:h-[500px] "
            />
          </div>
          <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:flex lg:flex-row    sm:space-x-10 my-6">
            <img
              src={CabinetPractice}
              className="sm:w-50 sm:h-80  lg:w-[400px] lg:h-[500px]"
            />
            <img
              src={CabinetGraduation}
              className="sm:w-50 sm:h-80 lg:w-[400px] lg:h-[500px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-almost-blue p-5 ">
        <div className="container mx-auto text-white">
          <h1 className="text-3xl mb-2">Новости</h1>
          <h2 className="text-2xl mb-10">Узнайте о последних новостях</h2>
          <Swiper
            className="mySwiper h-[300px]"
            spaceBetween={10}
            breakpoints={{
              500: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              760: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {NEWS.map((item, index) => (
              <SwiperSlide
                className="relative border border-white rounded-lg p-3 "
                key={index}
              >
                <h3 className="text-4xl mb-10">{item.title}</h3>
                <p className="text-2xl">{item.value}</p>
                <Arrow className="w-[37px] h-[37px] absolute right-[12px] bottom-[12px]" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="container mx-auto flex flex-col space-y-10 p-5 ">
        <div className="flex flex-col gap-y-5 sm:flex-row justify-between ">
          <h1 className="text-xl sm:text-2xl">Факультеты</h1>
          <p className="text-2xl sm:text-4xl font-bold max-w-[50%]">{`Наш квалифицированный\n преподавательский состав\n помогает студентам в изучении\n многих дисциплин`}</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <img src={Faculty1} alt="faculty1" className="w-full" />
          <div className=" border border-black rounded-lg p-5 flex flex-col justify-evenly">
            <h1>{`Название \n Факультета`}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
            <NavLink to="/">more</NavLink>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-4">
          <div className="border border-black rounded-lg p-5 flex flex-col justify-evenly">
            <h1>{`Название \n Факультета`}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore{" "}
            </p>
            <NavLink to="/">more</NavLink>
          </div>
          <img src={Faculty2} alt="faculty1" className="w-full" />
        </div>
        <div className="flex  justify-center">
          <button className="flex justify-between items-center space-x-2 border border-black px-4 py-1 rounded-lg text-xl">
            <span>Все факультеты</span>
            <Send width={24} height={24} />
          </button>
        </div>
      </section>

      <section className="bg-almost-blue p-5 ">
        <div className="container mx-auto text-white flex flex-col space-y-10">
          <div>
            <h1 className="text-3xl mb-2">Объявления</h1>
            <h2 className="text-2xl mb-10">Узнайте о последних новостях</h2>
          </div>
          <div className="text-xs flex items-center space-x-4 sm:text-3xl">
            {FILTERS_TYPE.map((item, index) => (
              <p
                onClick={() => handleChangeFilter(item)}
                className={
                  item === advertActiveFilter
                    ? "text-white cursor-pointer"
                    : "text-gray-500 cursor-pointer"
                }
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
          <div>
            <Swiper
              className="mySwiper h-[300px]"
              spaceBetween={10}
              breakpoints={{
                500: {
                  slidesPerView: 1.5,
                  spaceBetween: 30,
                },
                760: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {advertFilterArray.map((item, index) => (
                <SwiperSlide
                  className="relative border border-white rounded-lg p-3 "
                  key={index}
                >
                  <h3 className="text-4xl mb-10">{item.title}</h3>
                  <p className="text-2xl">{item.value}</p>
                  <Arrow className="w-[37px] h-[37px] absolute right-[12px] bottom-[12px]" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col space-y-10 p-5">
        <h1 className="text-3xl">Фотогалерея</h1>
        <Swiper
          rewind={true}
          pagination={true}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="container mx-auto mySwiper"
        >
          <SwiperSlide>
            <img src={Faculty1} className="w-full max-h-[700px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Faculty2} className="w-full max-h-[700px]" />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="bg-almost-red p-5">
        <div className="container mx-auto">
          <h1 className="text-3xl mb-10">Наши контакты</h1>
          <div className="flex flex-col lg:grid lg:grid-cols-[40%_50%] min-h-[500px] gap-10 mb-20">
            <div className="border border-black rounded-lg flex flex-col justify-evenly text-center text-white min-h-[350px]">
              <p>phone</p>
              <p>location</p>
              <p>gmail</p>
            </div>
            <NavLink
              to="https://yandex.uz/maps/org/208027049709/?ll=59.618553%2C42.471601&z=16.65"
              target="_blank"
            >
              <img src={Local} className="w-full h-full min-h-[350px]" />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
