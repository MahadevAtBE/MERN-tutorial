import Footer from "../components/Footer.jsx"
import Navbar from "../components/Navbar.jsx"
import Card from "../components/Card.jsx"


function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="card 1" description="details of card one"/>
        <Card title="card 2" description="details of card two"/>
        <Card title="card 3" description="details of card three"/>
        <Card title="card 4" description="details of card four"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
