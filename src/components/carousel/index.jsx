import { useEffect, useState, useRef } from 'react'
import { IconButton } from '@mui/material'
import './style.css'

export function Carousel() {
  const [data, setData] = useState([])
  const carousel = useRef(null)
  useEffect(() => {
    fetch('http://127.0.0.1:5173/src/assets/files/data.json')
      .then((response) => response.json())
      .then(setData)
  }, [])

  const handleButtonRight = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.firstChild.clientWidth
  }
  const handleButtonLeft = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.firstChild.clientWidth
  }
  if (!data || !data.length) return null
  return (
    <div className='containerCarousel'>
      <IconButton
        sx={{
          width: '40px',
          height: '40px',
          transform: 'rotate(180deg)',
          cursor: 'pointer',
        }}
        onClick={handleButtonLeft}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          width='40px'
          height='40px'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5'
          />
        </svg>
      </IconButton>
      <div className='carousel' ref={carousel}>
        {data.map((item) => {
          const { id, name, price, oldPrice, image } = item
          return (
            <div className='item' key={id}>
              <div className='image'>
                <img src={image} alt={name} />
              </div>
              <div className='info'>
                <span className='name'>{name}</span>
                <span className='oldPrice'>R${oldPrice}</span>
                <span className='price'>R${price}</span>
              </div>
            </div>
          )
        })}
      </div>
      <IconButton
        sx={{
          width: '40px',
          height: '40px',
          cursor: 'pointer',
        }}
        onClick={handleButtonRight}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          width='40px'
          height='40px'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5'
          />
        </svg>
      </IconButton>
    </div>
  )
}
