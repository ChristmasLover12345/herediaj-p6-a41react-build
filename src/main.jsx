import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SayHello from './Components/SayHello.jsx'
import AskingQuestions from './Components/AskingQuestions.jsx'
import GreaterThanLessThan from './Components/GreaterThanLessThan.jsx'
import AddingNumbers from './Components/AddingNumbers.jsx'
import MadLib from './Components/MadLib.jsx'
import OddOrEven from './Components/OddOrEven.jsx'
import ReverseAlpha from './Components/ReverseAlpha.jsx'
import ReverseNums from './Components/ReverseNums.jsx'
import Magic8Ball from './Components/Magic8Ball.jsx'
import RestaurantPicker from './Components/RestaurantPicker.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/SayHello' element={<SayHello />}/>
      <Route path='/AskingQuestions' element={<AskingQuestions />}/>
      <Route path='/GTLT' element={<GreaterThanLessThan />}/>
      <Route path='/AddTwo' element={<AddingNumbers />}/>
      <Route path='/MadLib' element={<MadLib />}/>
      <Route path='/OddOrEven' element={<OddOrEven />}/>
      <Route path='/ReverseAlpha' element={<ReverseAlpha />}/>
      <Route path='/ReverseNums' element={<ReverseNums />}/>
      <Route path='/Magic8Ball' element={<Magic8Ball />}/>
      <Route path='/Restaurant' element={<RestaurantPicker />}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
