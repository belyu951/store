import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,dicrement,incrementByAmount } from '../../redux/counter'

function SneakersCatalog() {

    const count = useSelector( state => state.counter.value)
    const dispatch = useDispatch()
    console.log(count);

  return (
    <>
        <div>SneakersCatalog</div>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(dicrement())}>dicrement</button>
        <button onClick={() => dispatch(incrementByAmount())}>incrementByAmount</button>
    </>
  )
}
export default SneakersCatalog