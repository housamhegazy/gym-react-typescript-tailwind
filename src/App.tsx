import Navbar from "./components/Navbar";
import { useState } from "react";
import Home from "./components/home";
import Gallery from "./components/gallery";
function App() {
  const [isOpenmenu, setisOpenmenu] = useState<boolean>(false);
  return (
    <div className="App">
      <Navbar {...{ isOpenmenu, setisOpenmenu }} />
      <Home/>
      <Gallery/>
    </div>
  );
}

export default App;
