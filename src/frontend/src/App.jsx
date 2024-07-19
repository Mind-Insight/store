import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from "./components/main/MainPage"
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="" element={<MainPage></MainPage>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
