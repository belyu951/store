import React from 'react'

// импорт стилей
import './sneakersCatalogCard.scss'

function SneakersCatalogCard(sneakersNoneDiskont) {
    // console.log(sneakersNoneDiskont.props.images);
  return (
    <>
    <div className="cardItem">

        <div className='imagesItem'>
        {/* {sneakersNoneDiskont.props.images?.map((images)=> <img style={{width: '50px'}} className="imagesItem__img" src={images} alt="" />)} */}
        {Array.isArray(sneakersNoneDiskont.props.images) && sneakersNoneDiskont.props.images.length > 0 && (<img className="imagesItem__img" src={sneakersNoneDiskont.props.images[0]} alt="first image" />
)}         
        </div>

        <div className='nameItem'>
            <span className="nameItem__name">{sneakersNoneDiskont.props.name}{sneakersNoneDiskont.props.brand}</span>
            <span className="nameItem__article"></span>
        </div>

        <div className='priceLikesItem'>
            <div className="priceLikesItemPrice"></div>
            <div className="priceLikesItemLike"></div>
        </div>

        <div className='sizeItem'>
            <span className="sizeItem__size"></span>
            <span className="sizeItem__sizes"></span>
        </div>

    </div>
    </>
  )
}

export default SneakersCatalogCard