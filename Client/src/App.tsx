

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import './assets/css/media.scss'
import CreatePage from './pages/CreatePage/CreatePage'
import MainPage from './pages/MainPage/MainPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
