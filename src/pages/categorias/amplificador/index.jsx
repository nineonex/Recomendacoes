import { useState, useEffect } from 'react'
import '../style.css'
export function Amplificador() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:5173/src/assets/files/data.json')
      .then((response) => response.json())
      .then(setData)
  }, [])
  return (
    <>
      <h1 className='tituloCategoria'>Amplificador</h1>
      <section className='conteinerCategoria'>
        {data.map((item) => {
          const { id, name, price, oldPrice, image } = item
          if (!data || !data.length) return null
          return (
            <div className='itemCategoria' key={id}>
              <div className='imageCategoria'>
                <img src={image} alt={name} />
              </div>
              <div className='infoCategoria'>
                <span className='nomeCategoria'>{name}</span>
                <span className='oldCategoria'>R${oldPrice}</span>
                <span className='priceCategoria'>R${price}</span>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}
