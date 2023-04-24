import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Home from "./components/home";
import Classes from "./components/classes";
import ContactUs from "./components/contactus";
import Footer from "./components/footer";
import Trainers from "./components/Trainers";
import { Circles } from "react-loader-spinner";
const navItems: string[] = [
  "Home",
  "About",
  "Classes",
  "Trainers",
  "Gallery",
  "Contact us",
];
function App() {
  const [isOpenmenu, setisOpenmenu] = useState<boolean>(false);
  const [isPageScrolled, setisPageScrolled] = useState<boolean>(false);
  const [spinner, setSpinner] = useState<boolean>(false);
  useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 3000);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setisPageScrolled(false);
      }
      if (window.scrollY !== 0) {
        setisPageScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    //  return window.removeEventListener("scroll",handleScroll)
  }, []);
  return (
    <div className="App">
      {spinner && (
        <div className="fixed top-0 w-full h-full bg-white flex justify-center items-center z-[10000]">
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}

      <Navbar {...{ isOpenmenu, setisOpenmenu, isPageScrolled ,navItems}} />
      <Home />
      <Trainers />
      <Classes />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
