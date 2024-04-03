import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './pages/Home'
import { About } from './pages/About'



const HomePage = () => <Home/>
const AboutPage = () => <About/>

const ScrollToTop = () => {
  const { pathname } = useLocation()


useEffect(() => {
  window.scrollTo(0,0)
}, [pathname])

}
function App() {
  return (
    <Router>
    <ScrollToTop/>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/About" element={<AboutPage />} />
   
  </Routes>
</Router>
  );
}

export default App;
