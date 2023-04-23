import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Home from "./components/home";
import Gallery from "./components/classes";
import ContactUs from "./components/contactus";
import Footer from "./components/footer";
function App() {
  const [isOpenmenu, setisOpenmenu] = useState<boolean>(false);
  const [isPageScrolled,setisPageScrolled] = useState<boolean>(false)
  useEffect(()=>{
   const handleScroll = ()=>{
    if(window.scrollY === 0){
      setisPageScrolled(false)
    }
    if(window.scrollY !== 0){
      setisPageScrolled(true)
    }
   }
   window.addEventListener("scroll",handleScroll);
  //  return window.removeEventListener("scroll",handleScroll)
  },[])
  return (
    <div className="App">
      <Navbar {...{ isOpenmenu, setisOpenmenu,isPageScrolled }} />
      <Home/>
      <Gallery/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
