import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import '../../conteiner.css'
import './products.scss'

// import SideBar from '../sidBar/SideBar'



function Products() {
  const { id } = useParams()
  const products = useSelector(state => state.products.items)
  const status = useSelector(state => state.products.status)

  const product = products.find(p => p.id === id)

  if (status === 'loading') return <p>Загрузка...</p>
  if (!product) return <p>Товар не найден.</p>

  return (
    
    <div className='paddingTop'>
      <h2>{product.name}</h2>
      <p><strong>Бренд:</strong> {product.brand}</p>
      <p>{product.description}</p>
    </div>
  )
}

export default Products