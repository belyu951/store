import React from "react";
import { useSelector } from "react-redux";
import './sliderBrand.scss'

function SliderBrand() {
  const itemsLogoBrand = useSelector((state) => state.products.items);

  const brand = itemsLogoBrand.map((logoBrand) => {
    return logoBrand.brandLogo
  });

  const unik = [...new Set(brand)]

  return (
    <>
      <div className="brads">
        <div className="brandText">какие у нас есть бренды</div>
        <div className="sliderImagesBrands">{unik.map((brandLogo , key)=>{
            return (
                <img key={key} className="sliderImagesBrands__images" src={brandLogo} alt="" />
            )
        })}</div>
      </div>
    </>
  );
}

export default SliderBrand;
