import './Header.css'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <h1>Driven by Dreams. Engineered for Excellence.</h1>
          <p>Experience the perfect blend of performance, innovation, and timeless design. Discover the thrill of driving a Porsche—where every journey is an adventure.</p>
          <button>
            <span className='explore'>Explore</span>
            <span className='speed'>Speed</span>
          </button>
        </div>
      </div>
    </header>
  )
}