import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonAppBar from './Home/navbar'
import Home from './Home/home'
import SpinTheWheel from './first-game/spinTheWheel'
import CustomScratchCard from './second-game/scratchCard'
import HotSlotGame from './third-game/hotSlot'
function App() {
  return (
   <Router>
    <ButtonAppBar />
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home />} />
    <Route path="/spinTheWheel" element={<SpinTheWheel />} />
    <Route path="/scratchCard" element={<CustomScratchCard />} />
    <Route path="/hotSlot" element={<HotSlotGame />} />
    </Routes>
   </Router>
  )
}

export default App;