import bannerImage from '../../assets/banner.png'
import './style.css'




const Banner = (props) => {
  return (
    <>
      <div className='banner-section'>
        <div id='image-box' className={props.themeMode?'dark-mode':'light-mode'}>
          <img src={bannerImage} alt="Banner" />
        </div>
        <div className="title-box">
          <p>BRANDING / UI / UX / TECNOLOGIA</p>
          <h1>Agência de Branding</h1>
          <span>e design digital</span>
        </div>
      </div>
    </>
  )
}
export default Banner
