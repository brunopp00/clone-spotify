import { RightPage } from './components/RightPage'
import { MainPage } from './components/MainPage'
import { FooterPage } from './components/FooterPage'
import './app.css'

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <RightPage />
        <MainPage />
      </div>
      <FooterPage />
    </div>
  )
}

export default App
