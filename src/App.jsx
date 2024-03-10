import { useState } from "react"
import DownloadRegain from "./components/DownloadRegain/DownloadRegain"
import Footer from "./components/Footer/Footer"
import FromRegain from "./components/FromRegain/FromRegain"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Offer from "./components/Offer/Offer"
import Royalty from "./components/Royalty/Royalty"
import Title from "./components/Title/Title"
import TopUp from "./components/TopUp/TopUp"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"
import WhyRegain from "./components/WhyRegain/WhyRegain"



function App() {

  const [playState, SetPlayState] = useState(false);

  return (
    
    <div>
      <Navbar/>
      <Hero/>
      <Royalty/>

      <div className="container">
        <Title title="What We Offer"/>
        <Offer/>
        <Title title="Just a few of the section created with Regain."/>
        <FromRegain/>
      </div>

      <WhyRegain/>
      <Title title="Top Up?"/>
      
      <div className="container">
        <TopUp SetPlayState={SetPlayState}/>
        <DownloadRegain/>
      </div>
     
     <Footer/>
     <VideoPlayer playState={playState} SetPlayState={SetPlayState}/>
    </div>
      
     
  
  )
}

export default App
