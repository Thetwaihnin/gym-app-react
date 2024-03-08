import Navbar from "@/Scenes/Navbar"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/type";
import Home from "@/Scenes/home/Home"
import Benefits from "./Scenes/benefits/IndexBenefits";
import OurClasses from "./Scenes/our classes";
import ContactUs from "./Scenes/contact us";
import Footer from "./Scenes/footer";

const App = () => {
  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage,setIsTopOfPage] = useState<boolean>(true)

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }

      if(window.scrollY !== 0) {setIsTopOfPage(false)}
    }
      window.addEventListener("scroll",handleScroll)
      return ()=>window.removeEventListener("scroll",handleScroll)
  },[])

  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer></Footer>
    </div>
  )
}

export default App