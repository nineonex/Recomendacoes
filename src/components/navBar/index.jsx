import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import { useState } from 'react'
import './style.css'

export function NavBar() {
  const [search, setSearch] = useState('')
  console.log(search)
  return (
    <nav className='containerNavBar'>
      <ul className='list'>
        <li>
          <Link to='/' className='link'>
            <svg
              className='logo'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link to='/' className='link'>
            Home
          </Link>
        </li>
        <li className='categorias'>
            Categorias
          <ul>
            <li>
              <Link to='/amplificador' className='link'>Amplificador</Link>
            </li>
            <li>
              <Link to='/dac' className='link'>Dac</Link>
            </li>
            <li>
              <Link to='/fone-de-ouvido' className='link'>Fone de Ouvido</Link>
            </li>
            <li>
              <Link to='/headset' className='link'>Headset</Link>
            </li>
            <li>
              <Link to='/microfone' className='link'>Microfone</Link>
            </li>
            <li>
              <Link to='/monitor' className='link'>Monitor</Link>
            </li>
            <li>
              <Link to='/mouse' className='link'>Mouse</Link>
            </li>
            <li>
              <Link to='/mousepad' className='link'>Mousepad</Link>
            </li>
            <li>
              <Link to='/organizacao' className='link'>Organização</Link>
            </li>
            <li>
              <Link to='/periferico' className='link'>Perifericos</Link>
            </li>
            <li>
              <Link to='/teclado' className='link'>Teclado</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to='/sobre' className='link'>
            Sobre
          </Link>
        </li>
      </ul>
      <div className='pesquisa'>
        <TextField
          id='outlined-basic'
          label='Pesquisa'
          variant='outlined'
          className='box'
          size='small'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          sx={{
            '& label.Mui-focused': {
              color: '#000000',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'gray',
              },
              '&:hover fieldset': {
                borderColor: 'gray',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#000000',
              },
            },
          }}
        />
        <svg
          className='bttpesquisa'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </div>
    </nav>
  )
}
