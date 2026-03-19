import BusinessTypes from "./BusinessTypes/business"
import Navbar from "./Navbar/Navbar"
import Prices from "./Price/Pricing"
import Home from "./Home/Home"

function App() {

  return (
    <>
    <header>
      {/* Navbar (Azizbek) */}
      <Navbar/>
      {/* Home (Azizbek) */}
      <Home/>
    </header>
    <main>
      {/* Business Types (Alisher)*/}
      <BusinessTypes/>
      {/* Pricing (Bekzod) */}
      <Prices/>
    </main>
    <footer></footer>
    </>
  )
}

export default App
