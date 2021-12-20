import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Service from './Components/Service/Service'

import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Service />

      <Footer />
    </div>
  );
}

export default App;
