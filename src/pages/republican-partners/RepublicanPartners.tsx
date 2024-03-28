/// <reference types="vite-plugin-svgr/client" />

import RU from "../../assets/images/flags/RU.png";
import KOREA from "../../assets/svgs/flags/Frame 281.svg?react";
import KAZ from "../../assets/images/flags/Flag_of_Kazakhstan 1.png";
import TR from "../../assets/svgs/flags/TR.svg?react";
import Ger from "../../assets/images/flags/pinpng 1.png";
import Iran from "../../assets/images/flags/iran 1.png";
import Belarus from "../../assets/images/flags/belarus 1.png";
import Ukraine from "../../assets/images/flags/ukraine 1.png";
import Austria from "../../assets/images/flags/austria 1.png";
import India from "../../assets/images/flags/India-Flag-PNG-Clipart 1.png";
import US from "../../assets/svgs/flags/UsFlag.svg";
import Slovakia from "../../assets/images/flags/slovakia 1.png";

function RepublicanPartners() {
  return (
    <div className="bg-almost-blue">
      <div className="container mx-auto p-5 text-white space-y-5">
        <h1 className="text-4xl">Республиканские партнеры</h1>
        <div className="grid grid-cols-4 gap-5">
          <div className="border border-white p-5 flex items-center justify-center">
            <img src={RU} alt="" className="w-[233px] h-[155px]" />
          </div>
          <div className="border border-white p-5 flex items-center justify-center">
            <KOREA className="w-[233px] h-[155px]" />
          </div>
          <div className="border border-white p-5 flex items-center justify-center">
            <img src={KAZ} alt="" className="w-[233px] h-[155px]" />
          </div>
          <div className="border border-white p-5 flex items-center justify-center">
            <TR className="w-[233px] h-[155px]" />
          </div>
          <div className="border border-white p-5 flex items-center justify-center">
            <img src={Ger} alt="" className="w-[233px] h-[155px]" />
          </div>
          <div className="border border-white p-5 flex items-center justify-center">
            <img src={Iran} className="w-[233px] h-[155px]" />
          </div>
          <div className="border border-white p-5 flex items-center justify-center">
            <img src={Belarus} alt="" className="w-[233px] h-[155px]" />
          </div>
          <div className="border border-white p-5 flex items-center justify-center">
            <img src={Ukraine} alt="" className="w-[233px] h-[155px]" />
          </div>
          <div className="border border-white p-5 flex items-center justify-center">
            <img src={Austria} alt="" className="w-[233px] h-[155px]" />
          </div>
          <div className="border border-white p-5 flex items-center justify-center">
            <img src={India} alt="" className="w-[233px] h-[155px]" />
          </div>
          <div className="border border-white p-5 flex items-center justify-center">
            <img src={US} className="w-[233px] h-[155px]" />
          </div>
          <div className="border border-white p-5 flex items-center justify-center">
            <img src={Slovakia} className="w-[233px] h-[155px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepublicanPartners;
