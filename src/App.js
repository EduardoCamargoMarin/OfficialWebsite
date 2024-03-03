import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './pages/Home'
import { Service } from './pages/Service'



const HomePage = () => <Home/>
const ServicePage = () => <Service/>

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
    <Route path="/About" element={<ServicePage />} />
   
  </Routes>
</Router>
  );
}

export default App;
