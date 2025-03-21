import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Model from './components/Model'
import card718 from './components/card718.avif'
import card911 from './components/card911.avif'
import cardTaycan from './components/cardTaycan.avif'
import cardPanamera from './components/cardPanamera.avif'
import cardMacan from './components/cardMacan.avif'
import cardCayenne from './components/cardCayenne.avif'

const carModels = {
  car718: {
    model: '718',
    powerType1: 'Gasoline',
    powerType2: '',
    description: 'The mid-engine sports car for two made for pure driving pleasure.',
    startingPrice: '72,800',
    image: card718,
  },
  car911: {
    model: '911',
    powerType1: 'Gasoline',
    powerType2: '',
    description: 'The iconic, rear engine sports car with exeptional preformance.',
    startingPrice: '121,100',
    image: card911,
  },
  carTaycan: {
    model: 'Taycan',
    powerType1: 'Electric',
    powerType2: '',
    description: 'The pure expression of can electric sports car.',
    startingPrice: '99,400',
    image: cardTaycan,
  },
  carPanamera: {
    model: 'Panamera',
    powerType1: 'Hybrid', 
    powerType2: 'Gasoline',
    description: 'The sports car sedan for an active lifestyle with highest comfort.',
    startingPrice: '102,800',
    image: cardPanamera,
  },
  carMacan: {
    model: 'Macan',
    powerType1: 'Electric',
    powerType2: 'Gasoline',
    description: 'All-electric SUV with impresive E-Performance.',
    startingPrice: '75,300',
    image: cardMacan,
  },
  carCayenne: {
    model: 'Cayenne',
    powerType1: 'Hybrid',
    powerType2: 'Gasoline',
    description: 'The versatile SUV with sports car performance and up to five seats.',
    startingPrice: '84,700',
    image: cardCayenne,
  },
}

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <div className='content'>
        <div className='carCards'>
          <Model {...carModels.car718} />
          <Model {...carModels.car911} />
          <Model {...carModels.carTaycan} />
          <Model {...carModels.carPanamera} />
          <Model {...carModels.carMacan} />
          <Model {...carModels.carCayenne} />
        </div>
      </div>
    </div>
  )
}
