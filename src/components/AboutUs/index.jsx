import React from "react";
import aboutUsMap from "../../assets/aboutUsMap.png";

const AboutUs = () => {
    return (
        <div className="w-full max-xl:h-fit h-[683px] bg-blue01 relative z-10  text-center py-[53px]">
            <h2 className="text-4xl max-xl:text:2xl text-white font-bold pb-[53px]" >Страны БРИКС</h2>
            <div className="grid xl:grid-cols-2 place-items-center gap-[82px] max-xl:px-[24px] xl:px-[113.5px] max-xl:  items-center  text-start">
                <img src={aboutUsMap} alt="" />
                <div>
                    <h3 className=" text-white text-[25px] font-normal">
                        Межгосударственное объединение, союз пяти государств:
                        Бразилии, России, Индии, КНР, ЮАР. <br />
                        <br />
                        Организация была основана в июне 2006 года, в рамках
                        Петербургского экономического форума с участием
                        министров экономики Бразилии, России, Индии, Китая
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
