import './style.css'
import Logo from '../../assets/logo.png'
import Fb from '../../assets/facebook.png'
import Gp from '../../assets/google-plus.png'
import Ld from '../../assets/linkedin.png'
import Db from '../../assets/dribble.png'
import Tt from '../../assets/twitter.png'
import Bh from '../../assets/behance.png'

const Footer = (props) => {
  return (
    <>
      <footer className={props.themeMode?'dark-mode':'ligth-mode'}>
        <div className=" footer-box limite-container">
          <img src={Logo} alt="logomarca" />
          <p>
            Ajudamos a criar uma personalidade digital construindo sua marca no
            ambiente online utilizando estratégias, ferramentas e tecnologias
            personalidades.
          </p>
          <nav className="social-links">
            <a href="www.facebook.com" target="_blank">
              <img src={Fb} alt="facebook" />
            </a>
            <a href="www.twitter.com" target="_blank">
              <img src={Tt} alt="twitter" />
            </a>
            <a href="www.linkedin.com" target="_blank">
              <img src={Ld} alt="linkedin" />
            </a>
            <a href="www.behance.com" target="_blank">
              <img src={Bh} alt="behance" />
            </a>
            <a href="www.dribble.com" target="_blank">
              <img src={Db} alt="dribble" />
            </a>
            <a href="www.googleplus.com" target="_blank">
              <img src={Gp} alt=" google plus" />
            </a>
          </nav>
          <span>&copy; 2023 - Todos os Direitos Reservados</span>
        </div>
      </footer>
    </>
  )
}

export default Footer
