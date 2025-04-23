import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Hero from "../../components/hero/Hero"
import Featured from "../../components/featured/Featured.jsx"


function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Hero></Hero>
      <Featured></Featured>
    </div>
  )
}

export default Home
