import React, { useEffect, useState, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../../redux/productsApiSlice'
import { addToCart } from '../../../redux/cartsSlice'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './sliderItem.scss'

function SliderItem() {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector(state => state.products)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts())
    }
  }, [dispatch, status])

  const randomProducts = useMemo(() => {
    return [...items].sort(() => Math.random() - 0.5).slice(0, 4)
  }, [items])

  if (status === 'loading') return <p>Загрузка...</p>
  if (status === 'failed') return <p>Ошибка: {error}</p>

  return (
    <>
      {randomProducts.map((product, index) => (
        <ProductCard key={index} product={product} dispatch={dispatch} />
      ))}
    </>
  )
}

const ProductCard = ({ product, dispatch }) => {
  const cartItems = useSelector(state => state.cart.items)
  const [selectedSize, setSelectedSize] = useState(null)
  const [sizeError, setSizeError] = useState('')
  const [animate, setAnimate] = useState(false)
  const [animateError, setAnimateError] = useState(false)


  const isUniversal =
    typeof product.size === 'string' &&
    (product.size.toLowerCase().includes('универс') || product.size.trim() === '')

  const sizes = Array.isArray(product.size)
    ? (() => {
        const sizeStart = product.size[0]
        const sizeEnd = sizeStart + 5
        return Array.from({ length: sizeEnd - sizeStart + 1 }, (_, i) => `${sizeStart + i} eur`)
      })()
    : []

  // Проверяем, есть ли этот товар с выбранным размером уже в корзине
  const isAddedToCart = cartItems.some(item =>
    item.id === product.id &&
    (
      (isUniversal && item.selectedSize === 'универсальный') ||
      (!isUniversal && item.selectedSize === selectedSize)
    )
  )

  const handleAddToCart = () => {
    if (isUniversal) {
      dispatch(addToCart({ ...product, selectedSize: 'универсальный' }))
      setSizeError('')
      triggerAnimation()
    } else if (!selectedSize) {
      triggerErrorAnimation()
      setSizeError('Выберите размер')
    } else {
      dispatch(addToCart({ ...product, selectedSize }))
      setSizeError('')
      triggerAnimation()
    }
  }

  const triggerAnimation = () => {
    setAnimate(true)
    setTimeout(() => setAnimate(false), 300) // сброс через 300 мс
  }

  const triggerErrorAnimation = () => {
    setAnimateError(true)
    setTimeout(() => setAnimateError(false), 300) // сброс через 300 мс
  }



  return (
    <div className="sliderItem" data-id={product.id}>
      <div className="sliderItemImagesSneakers">
        <img
          src={product.images?.[0]}
          className="sliderItemImages__images"
          alt={product.name}
        />
      </div>

      <div className="sliderItemNameSneakers">
        <div className="nameSneakersBrandImages">
          <span className="sliderItemNameSneakers__nameSneakers">
            {product.name}<br />{product.brand}
          </span>
          <img className='nameSneakersBrandImages__brandLogo' src={product.brandLogo} alt="" />
        </div>
        <span className="sliderItemNameSneakers__articleSneakers">артикул 19666</span>
      </div>

      <div className="sliderItemPriceSneakers">
        <div className="sliderItemPriceSneakers__borderRadiusPrise">
          <span className="sliderItemPriceSneakers__price">{product.price}</span>
        </div>
        {sizeError && (
          <span>{sizeError}</span>
        )}
        <div
          onClick={handleAddToCart}
          className="sliderItemPriceSneakers__borderRadiusLikes"
          
        >
          <FontAwesomeIcon
            className={`
            sliderItemPriceSneakers__svgLike like 
            ${isAddedToCart ? 'liked' : ''} 
            ${animate ? 'animate' : ''} 
            ${animateError ? 'animateError' : ''}
          `}
        

            style={{ cursor: 'pointer', color: isAddedToCart ? 'red' : 'inherit' }}
            icon={faHeart}
          />
        </div>
      </div>

      {!isUniversal && (
        <div className="sliderItemSizeSneakers">
          <span className="sliderItemSizeSneakers__size">размер</span>
          <p className="sliderItemSizeSneakers__flex">
            {sizes.map((size, idx) => (
              <span
                key={idx}
                onClick={() => setSelectedSize(size)}
                className={`sliderItemSizeSneakers__sizes sizesHover ${


selectedSize === size ? 'selectedSize' : ''
                }`}
              >
                {size}
              </span>
            ))}
          </p>
        </div>
      )}
    </div>
  )
}

export default SliderItem