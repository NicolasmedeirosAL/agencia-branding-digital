import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import SecaoServico from './components/SecaoServico'
import Footer from './components/Footer'

function App() {
  const [themeMode, setThemeMode] = useState(false)

  const changeTheme = () => {
    setThemeMode(!themeMode)
  }

  return (
    <div className="App">
      <Header changeTheme={changeTheme} themeMode={themeMode} />
      <Banner changeTheme={changeTheme} themeMode={themeMode} />
      <SecaoServico changeTheme={changeTheme} themeMode={themeMode} />
      <Footer changeTheme={changeTheme} themeMode={themeMode} />
    </div>
  )
}

export default App
