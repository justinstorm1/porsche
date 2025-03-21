import { useState, useEffect } from 'react'
import './Navbar.css'
import porsheLogoWord from  './porscheLogoWord.png'
import porsheLogoBadge from  './porscheLogoBadge.png'

const porscheModels = [
  { name: "718", image: "https://nav.porsche.com/00BC524/series-assets/all/718.webp", type1: "Gasoline", type2: "" },
  { name: "911", image: "https://nav.porsche.com/00BC524/series-assets/all/911.webp", type1: "Gasoline", type2: "" },
  { name: "Taycan", image: "https://nav.porsche.com/00BC524/series-assets/all/taycan.webp", type1: "Electric", type2: "" },
  { name: "Panamera", image: "https://nav.porsche.com/00BC524/series-assets/all/panamera.webp", type1: "Hybrid", type2: "Gasoline" },
  { name: "Macan", image: "https://nav.porsche.com/00BC524/series-assets/all/macan.webp", type1: "Gasoline", type2: "" },
  { name: "Cayenne", image: "https://nav.porsche.com/00BC524/series-assets/all/cayenne.webp", type1: "Hybrid", type2: "" }
];

export default function Navbar() {
  const getInitialSidebarLink = () => (window.innerWidth >= 767 ? 1 : 0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [selectedSidebarLink, setSelectedSidebarLink] = useState(getInitialSidebarLink);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 767 && selectedSidebarLink === 0) {
        setSelectedSidebarLink(1);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [selectedSidebarLink]);

  return (
    <>
    <nav>
      <div className='left' onClick={() => setIsSidebarOpen(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
        <span>Menu</span>
      </div>
      <img className='logoWord' src={porsheLogoWord} alt='Logo' />
      <img className='logoBadge' src={porsheLogoBadge} alt='Logo' />
      <div className='right'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
        </svg>
      </div>
    </nav>

    <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <button className='exit' onClick={() => setIsSidebarOpen(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg>
      </button>
      <div className='left'>
        <div className='links'>
          <a className={`${selectedSidebarLink === 1 ? 'active' : ''}`} href='#' onClick={() => setSelectedSidebarLink(1)}><span>Models</span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></a>
          <a className={`${selectedSidebarLink === 2 ? 'active' : ''}`} href='#' onClick={() => setSelectedSidebarLink(2)}><span>Shopping Tools</span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></a>
          <a className={`${selectedSidebarLink === 3 ? 'active' : ''}`} href='#' onClick={() => setSelectedSidebarLink(3)}><span>Porsche Shop</span> {/*<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>*/}</a>
          <a className={`${selectedSidebarLink === 4 ? 'active' : ''}`} href='#' onClick={() => setSelectedSidebarLink(4)}><span>Services</span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></a>
          <a className={`${selectedSidebarLink === 5 ? 'active' : ''}`} href='#' onClick={() => setSelectedSidebarLink(5)}><span>Experience</span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></a>
          <a className={`${selectedSidebarLink === 6 ? 'active' : ''}`} href='#' onClick={() => setSelectedSidebarLink(6)}><span>Find Your Porsche Center</span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></a>
          <a className={`${selectedSidebarLink === 7 ? 'active' : ''}`} href='#' onClick={() => setSelectedSidebarLink(7)}><span>My Porsche</span> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></a>
        </div>
      </div>
      <div className={`right ${selectedSidebarLink !== 0 ? 'show' : ''}`}>
        <button className='back' onClick={() => setSelectedSidebarLink(0)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"/></svg>
        </button>
        <div style={{ display: `${selectedSidebarLink === 1 ? 'block' : 'none'}`}}>
          <span className='header'>Models</span>
          <div className='cars'>
            {porscheModels.map((model, index) => (
              <div className='car' key={index}>
                <span className='modelText'>{model.name}</span>
                <img src={model.image} />
                <div className='powerTypes'>
                  <span className='type'>{model.type1}</span>
                  {model.type2 === '' ? (null) : (
                    <span className='type'>{model.type2}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: `${selectedSidebarLink === 2 ? 'block' : 'none'}`}}>
          <span className='header'>Shopping Tools</span>
          <div className='toolsNav'>
            <a href='#'>Build Your Own</a>
            <a href='#'>Compare Models</a>
            <a href='#'>New & Used Inventory</a>
            <a href='#'>Current Vehicle Offers</a>
            <a href='#'>Certified Pre-Owned & Warranty</a>
            <a href='#'>Porsche Financial Sevices</a>
            <a href='#'>E-Mobility & E-Performance</a>
          </div>
        </div>
        <div style={{ display: `${selectedSidebarLink === 3 ? 'block' : 'none'}`}}>
          <h1>Porsche Shop</h1>
        </div>
        <div style={{ display: `${selectedSidebarLink === 4 ? 'block' : 'none'}`}}>
          <span className='header'>Services</span>
          <div className='servicesNav'>
            <a href='#'>Original Accessories</a>
            <a href='#'>Exclusive Manufaktur - Individual Vehicles</a>
            <a href='#'>Online Bill Payment</a>
            <a href='#'>Display Programs</a>
            <a href='#'>Porsche Protection Plan</a>
            <a href='#'>Service & Maintenance</a>
            <a href='#'>Classic - Service & Parts</a>
            <a href='#'>Recall Information</a>
          </div>
        </div>
        <div style={{ display: `${selectedSidebarLink === 5 ? 'block' : 'none'}`}}>
          <span className='header'>Experience</span>
          <div className='experienceNav'>
            <a href='#'>Motorsport</a>
            <a href='#'>Drive - Rentals & Subscriptions</a>
            <a href='#'>Experience Center Atlanta</a>
            <a href='#'>Experience Center Los Angeles</a>
            <a href='#'>Track Experience Birmingham</a>
            <a href='#'>Trabel Experience</a>
            <a href='#'>E-Zentrum</a>
            <a href='#'>Apps & Entertainment</a>
            <a href='#'>Stories - People, Passion, Places.</a>
            <a href='#'>Christophorus - The Porsche Magazine</a>
            <a href='#'>Newsletter</a>
            <a href='#'>Porsche Communities</a>
            <a href='#'>Golf</a>
            <a href='#'>Museum</a>
          </div>
        </div>
      </div>
    </aside>
    <div className={`overlay ${isSidebarOpen ? 'show' : ''}`} onClick={() => setIsSidebarOpen(false)}></div>
    </>
  )
}