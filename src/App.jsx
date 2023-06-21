import { useState } from 'react'
import './App.css'
import nftImgUrl from './assets/image-equilibrium.jpg'
import clockIconUrl from './assets/icon-clock.svg'
import avatarImgUrl from './assets/image-avatar.png'
import viewIconUrl from './assets/icon-view.svg'
import ethereumIconUrl from './assets/icon-ethereum.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='container'>
      <section>
        <img src={nftImgUrl} alt="" className='product-img' />
        <h1 className='product-title'>Equilibrium #3429</h1>
        <p className='product-description'>Our Equilibrium collection promotes balance and calm.</p>
      </section>

      <section className='product-info'>
        <div className="product-price">
          <img src={ethereumIconUrl} alt="" className='product-info__icon' />
          <p>0.041 ETH</p>
        </div>
        <div className="product-expiry-date">
          <img src={clockIconUrl} alt="" className='product-info__icon' />
          <p>3 days left</p>
        </div>
      </section>

      <hr className='divider' />

      <section className='creator-info'>
        <img src={avatarImgUrl} alt="" className="creator-avatar" />
        <p>Creation of <a href="" className='creator-link'>Jules Wyvern</a></p>
      </section>
    </main>
  )
}

export default App
