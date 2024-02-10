import './App.css'
import { Navbar } from './components/Layout/Navbar'
import { Footer } from './components/Layout/Footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { EbookDetails } from './pages/EbookDetails'
import { HomePage } from './pages/HomePage'

function App() {

  return (
    <div className="bg-[#131313] w-full min-h-screen flex flex-col justify-between">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:id' element={<EbookDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
