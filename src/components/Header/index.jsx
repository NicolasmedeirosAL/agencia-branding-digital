import './style.css'
import logo from '../../assets/logo.png'
import iconDark from '../../assets/moon.png'
import iconligth from '../../assets/sun.png'

const Header = props => {
  return (
    <>
      <header className={props.themeMode ? 'dark-mode' : 'light-mode'}>
        <div className="header-menu limite-container">
          <img src={logo} alt="logomarca" />
          <button onClick={props.changeTheme} className="icon-button">
            <img src={props.themeMode ? iconligth : iconDark} alt="icone-lua" />
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
