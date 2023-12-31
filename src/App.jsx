import './App.css'
import nftImgUrl from './assets/image-equilibrium.jpg'
import clockIconUrl from './assets/icon-clock.svg'
import avatarImgUrl from './assets/image-avatar.png'
import viewIconUrl from './assets/icon-view.svg'
import ethereumIconUrl from './assets/icon-ethereum.svg'

function App() {
  return (
    <main className='container'>
      <section>
        <div className='img-container'>
          <img src={nftImgUrl} alt="" className='product-img' />

          <div className='middle'>
            <img src={viewIconUrl} alt="" />
          </div>
        </div>

        <h1 className="product-title"><a className='link'>Equilibrium #3429</a></h1>

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
        <p>Creation of <a href="" className='link creator-link'>Jules Wyvern</a></p>
      </section>
    </main>
  )
}

export default App
