import './Model.css'

export default function Model(props) {
  return (
    <div className='model'>
      <img className='background' src={props.image} alt={props.model} />
      <div className='upper'>
        <h3>{props.model}</h3>
        <div className='power-types'>
          <span>{props.powerType1}</span>
          {props.powerType2 !== '' ? (
            <span>{props.powerType2}</span>
          ) : (null)}
        </div>
      </div>
      <div className='lower'>
        <h3>{props.description}</h3>
        <p>From $ {props.startingPrice} *</p>
        <div className='buttons'>
          <button className='top'>
            <span>Build your {props.model}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </button>
          <button className='bottom'>
            <span>All {props.model} models</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}