import './style.css'

export default function Card(props) {
  return (
    <>
      <div id="cards" className={props.themeMode?'dark-mode':'light-mode'}>
        <div className="card limite-container">
          <p className="data">{props.data}</p>
          <h3 className="subtitle">{props.titulo}</h3>
          <span className="empresa">{props.empresa}</span>
          <p className="paragrafo">{props.paragrafo}</p>
        </div>
      </div>
    </>
  )
}
